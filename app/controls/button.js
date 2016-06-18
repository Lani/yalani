/* eslint-disable no-unused-vars */
import buttonStyle from 'material-design-lite/src/button/_button.scss'
import buttonJs from 'material-design-lite/src/button/button'
import rippleStyle from 'material-design-lite/src/ripple/_ripple.scss'
import rippleJs from 'material-design-lite/src/ripple/ripple'
/* eslint-enable no-unused-vars */

import m from 'mithril'
import cs from 'classnames'

export default {
  view: function (ctrl, { href, onclick, label, raised = true, ripple = true, colored, fab,
    miniFab, accent, primary, disabled }) {
    const clickHandler = () => {
      m.route(href)
    }

    const classes = cs('mdl-button', {
      'mdl-js-button': true,
      'mdl-button--raised': raised,
      'mdl-button--colored': colored,
      'mdl-button--fab': fab || miniFab,
      'mdl-button--accent': accent,
      'mdl-button--primary': primary,
      'mdl-button--mini-fab': miniFab,
      'mdl-js-ripple-effect': ripple
    })

    const config = function (element, isInitialized, context) {
      /* If the button triggers a route change, it will cause the whole DOM to be recreated.
       * The ripple animation will then be cut off. Setting retain=true prevents the
       * button from beeing recreated. I do not currently know if this has any drawbacks. */
      context.retain = true

      if (!isInitialized) {
        window.componentHandler.upgradeElement(element)
      }
    }

    return m(`button.${classes}`, {
      config: config,
      disabled: disabled,
      onclick: href ? clickHandler : onclick
    }, label)
  }
}
