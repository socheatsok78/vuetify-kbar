import type { DirectiveOptions } from 'vue'

export const VFocus: DirectiveOptions = {
  inserted: function (el) {
    if (el instanceof HTMLFormElement) {
      el.focus()
      el.setAttribute('autofocus', 'true')
    } else {
      const input = el.querySelector('input')
      if (input) input.focus()
    }
  }
}
