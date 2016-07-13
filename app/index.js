/* eslint-disable no-unused-vars */
import styles from 'styles'
import mdl from 'material-design-lite/src/mdlComponentHandler'
/* eslint-enable no-unused-vars */

import m from 'mithril'
import routes from 'routes'
import button from 'components/mdl/button'
import layout from 'components/mdl/layout'
/*
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
      m(button, { label: 'On click', raised: true, onclick: () => alert('hej') }),
      m(button, { label: 'Disabled', raised: true, disabled: true }),
      m(button, { label: 'Colored', raised: true, colored: true, ripple: true }),
      m(button, { label: '+', raised: true, fab: true, ripple: true }),
      m(button, { label: '+', raised: true, miniFab: true }),
      m(button, { label: 'Flat accent', raised: false, colored: true, accent: true }),
      m(button, { label: 'Flat primary', raised: false, primary: true }),
      m(button, { label: 'Raised accent', accent: true, ripple: true }),
      m(button, { label: 'Raised ripple', raised: true, ripple: true }),
      m(layout, { fixedHeader: true })
    ])
  }
}

if (module.hot) {
  module.hot.accept()
}

m.mount(document.getElementById('header'), header)
*/
/*
m.route(document.getElementById('main'), '/',
  routes.reduce(function (prev, next) {
    prev[next.path] = next.component
    return prev
  }, {})
)
*/

m.mount(document.getElementById('header'), layout)

console.log('App started.')
