/* eslint-disable no-unused-vars */
import styles from 'styles'
import mdl from 'material-design-lite/src/mdlComponentHandler'
/* eslint-enable no-unused-vars */

import m from 'mithril'
import routes from 'routes'
import button from 'components/mdl/button'
import layout from 'components/mdl/layout'

const header = {
  controller: function () {},
  view: function () {
    return m('div', [
      routes.map((route) => m(button, {
        href: route.path,
        ripple: true,
        raised: true,
        accent: m.route() === route.path
      }, route.title)),
      m(button, { onclick: () => alert('hej') }, 'On click'),
      m(button, { disabled: true }, 'Disabled'),
      m(button, { colored: true, ripple: true }, 'Colored'),
      m(button, { fab: true, ripple: true }, '+'),
      m(button, { miniFab: true }, '+'),
      m(button, { raised: false, colored: true, accent: true }, 'Flat accent'),
      m(button, { raised: false, primary: true }, 'Flat primary'),
      m(button, { accent: true }, 'Raised accent'),
      m(button, {}, 'Raised ripple'),
      m(layout, { fixedHeader: true })
    ])
  }
}

if (module.hot) {
  module.hot.accept()
}

m.mount(document.getElementById('header'), header)

m.route(document.getElementById('main'), '/',
  routes.reduce(function (prev, next) {
    prev[next.path] = next.component
    return prev
  }, {})
)

console.log('App started.')
