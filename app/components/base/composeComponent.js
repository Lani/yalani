/* eslint-disable no-unused-vars */
/* eslint-enable no-unused-vars */
import m from 'mithril'
import compose from 'utils/compose'

export default function (tag = 'div', ...funcs) {
  console.log('funcs2|', funcs)
  const composeParts = compose.apply(this, funcs)

  return {
    controller: function (options = {}) {
      return options
    },
    view: function (ctrl, options = {}, ...children) {
      console.log('ctrl|', ctrl)
      console.log('options|', options)
      const composedParts = {
        classes: [],
        configs: []
      }
      const passOptions = composeParts.call(composedParts, ctrl)

      passOptions.config = function (element, isInitialized, context) {
        composedParts.configs.forEach((config) => config(...arguments))
        if (!isInitialized) window.componentHandler.upgradeElement(element)
      }

      return m(`${tag}.${composedParts.classes.join(' ')}`, passOptions, children)
    }
  }
}
