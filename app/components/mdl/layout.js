/* eslint-disable no-unused-vars */
//import layoutStyle from 'material-design-lite/src/layout/_layout'
//import layoutJs from 'material-design-lite/src/layout/layout'
/* eslint-enable no-unused-vars */

import cs from 'classnames'
import composeMdl from './composeMdlComponent'

export const layoutPart = function ({fixedHeader, ...rest}) {
  this.classes.push(cs('mdl-layout', 'mdl-js-layout', {
    'mdl-layout--fixed-header': fixedHeader
  }))
  return rest
}

export default composeMdl('div', layoutPart)
