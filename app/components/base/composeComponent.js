/* eslint-disable no-unused-vars */
/* eslint-enable no-unused-vars */
import m from 'mithril'
import compose from 'utils/compose'

export default function (tag = 'div', ...funcs) {
  const composeParts = compose.apply(this, funcs)

  return {
    controller: function (options = {}) {
      return options
    },
    view: function (ctrlOpts, unused, ...children) {
      const composedParts = {
        classes: [],
        configs: []
      }
      const passOptions = composeParts.call(composedParts, ctrlOpts)

      passOptions.config = function (element, isInitialized, context) {
        composedParts.configs.forEach((config) => config(element, isInitialized, context))
        if (!isInitialized) window.componentHandler.upgradeElement(element)
      }

      return m(`${tag}.${composedParts.classes.join(' ')}`, passOptions, children)
    }
  }
}
