import composeComponent from 'components/base/composeComponent'
import { layoutPart } from './layout'

/**
 * The component part passed in 'func' is called with the options in the propery name
 * passed in 'prefix', which is extracted from the options and the rest of the options
 * are returned.
 *
 * The function 'func' is not called if there are no options in the property specified
 * in 'prefix'.
 * @param {string} prefix The property name to extract from the component parts specified options.
 * @param {Function} func The component part to call.
 * @returns
 */
const prefixPart = function (prefix, func) {
  return function prefixPartOptions (opts) {
    console.log('prefixPart(opts)|', opts)
    const { [prefix]: extracted, ...rest } = opts
    if (extracted) {
      func.call(this, extracted)
    }
    return rest
  }
}

export default function (tag = 'div', ...funcs) {
  console.log('funcs|', funcs)
  return composeComponent(tag, ...funcs,
    prefixPart('layout', layoutPart)
  )
}
