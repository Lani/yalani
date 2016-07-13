/* eslint-disable no-unused-vars */
//import buttonStyle from 'material-design-lite/src/button/_button.scss'
//import buttonJs from 'material-design-lite/src/button/button'
//import rippleStyle from 'material-design-lite/src/ripple/_ripple.scss'
//import rippleJs from 'material-design-lite/src/ripple/ripple'
/* eslint-enable no-unused-vars */

import m from 'mithril'
import cs from 'classnames'

//import composeMdl from './composeMdlComponent'
import composeMdl from './composeMdlComponent'

const buttonPart = function ({ href, onclick, raised = true, ripple = true, colored, fab,
    miniFab, accent, primary, ...rest }) {
  const clickHandler = () => {
    m.route(href)
  }

  this.classes.push(cs('mdl-button', 'mdl-js-button', {
    'mdl-button--raised': raised,
    'mdl-button--colored': colored,
    'mdl-button--fab': fab || miniFab,
    'mdl-button--accent': accent,
    'mdl-button--primary': primary,
    'mdl-button--mini-fab': miniFab,
    'mdl-js-ripple-effect': ripple
  }))

  this.config.push(function (element, isInitialized, context) {
    /* If the button triggers a route change, it will cause the whole DOM to be recreated.
      * The ripple animation will then be cut off. Setting retain=true prevents the
      * button from beeing recreated. I do not currently know if this has any drawbacks. */
    context.retain = true
  })

  return { ...rest, onclick: href ? clickHandler : onclick }
}

//export default composeMdl('button', buttonPart)
export default function () {}

