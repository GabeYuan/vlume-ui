export const INSTALLED_KEY = Symbol('INSTALLED_KEY')

import type { App, Plugin } from 'vue'

export const makeInstaller = (components: Plugin[] = []) => {
  const install = (app: App) => {
    if ((app as any)[INSTALLED_KEY]) return
    ;(app as any)[INSTALLED_KEY] = true
    components.forEach(c => app.use(c))
  }

  return {
    install
  }
}
