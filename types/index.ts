import { VueConstructor } from 'vue'

export const VKbarProvider = {} as VueConstructor

export interface KBarAction {
  id: string
  name: string
  icon?: unknown,
  description?: string
  shortcut?: string[]
  keywords?: string
  perform: () => void
}
