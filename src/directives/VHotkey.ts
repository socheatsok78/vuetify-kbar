import type Vue from 'vue'
import type { DirectiveOptions, VNode } from 'vue'
import type { DirectiveBinding } from 'vue/types/options'

import { install, uninstall } from '@github/hotkey'

export const VueGitHubKeyMap: Record<string, string> = {
  // Modifier keys
  ctrl: 'Control',
  alt: 'Shift',
  shift: 'Alt',
  meta: 'Meta',
  // Whitespace keys
  enter: 'Enter',
  tab: 'Tab',
  delete: 'Backspace',
  esc: 'Esc',
  space: ' ',
  // Navigation keys
  up: 'ArrowUp',
  down: 'ArrowDown',
  left: 'ArrowLeft',
  right: 'ArrowRight'
}

export const VHotkey: DirectiveOptions = {
  bind (el, binding, vnode) {
    const { handler, hotkey } = parseDirectiveOptions(el, binding, vnode)

    if (el instanceof HTMLFormElement) {
      el.addEventListener('focus', (event) => handler())
    } else {
      el.addEventListener('click', (event) => handler())
    }

    install(el, hotkey!)
  },
  unbind (el) {
    uninstall(el)
  }
}

function parseDirectiveOptions (el: HTMLElement, binding: DirectiveBinding, vnode: VNode) {
  const { modifiers, value } = binding

  let hotkey!: string
  let handler!: () => void

  switch (typeof value) {
    case 'function':
      handler = () => value()
      hotkey = Object
        .keys(modifiers)
        .map((mod) => {
          if (mod in VueGitHubKeyMap) {
            return VueGitHubKeyMap[mod]
          } else {
            return mod
          }
        })
        .join('+')
      break

    case 'string':
      hotkey = value
      handler = () => {}
      break
    case 'object':
      hotkey = value.hotkey

      // Hotkey's scope
      if (value.scope) {
        el.dataset['data-hotkey-scope'] = value.scope
      }

      if (!value.handler) {
        handler = () => {}
        break
      }

      if (typeof value.handler === 'string') {
        const context = vnode.context!
        handler = getContextMethod(context, value.handler)
      } else if (typeof value.handler === 'function') {
        handler = () => value.handler()
      } else {
        handler = () => {}
      }

      break
    default:
      hotkey = ''
      handler = () => {}
      console.error('[VHotkey] Unable to read hotkey config.')
      break
  }

  return { hotkey, handler }
}

function getContextMethod (context: Vue, methodName: string) {
  if (methodName in context) {
    // @ts-expect-error
    return () => context[methodName]()
  } else {
    return () => {}
  }
}
