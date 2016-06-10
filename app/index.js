import m from 'mithril'
import routes from 'routes'

/* eslint-disable no-unused-vars */
import 'polythene/theme/theme'
import styles from 'styles'
/* eslint-enable no-unused-vars */

import button from 'polythene/button/button'

m.route.mode = 'hash'

const header = {
  controller: function () {},
  view: function () {
    return m('div', [
      routes.map((route) => m(button, {
        label: route.title,
        url: {
          href: route.path,
          config: m.route
        },
        class: m.route() === route.path ? 'active' : ''
      })),
      m(button, { label: 'Test', raised: true }) ]
    )
  }
}

if (module.hot) {
  module.hot.accept()
}

m.mount(document.getElementById('header'), {controller: header.controller, view: header.view})

m.route(document.getElementById('main'), '/',
  routes.reduce(function (prev, next) {
    prev[next.path] = next.component
    return prev
  }, {})
)

console.log('App started.')
