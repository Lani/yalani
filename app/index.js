import m from 'mithril'
import routes from 'routes'

/* eslint-disable no-unused-vars */
import styles from 'styles'
/* eslint-enable no-unused-vars */

m.route.mode = 'hash'

const header = {
  controller: function () {},
  view: function () {
    return m('div',
      routes.map((route) => m('a', {
        href: route.path,
        config: m.route,
        class: m.route() === route.path ? 'active' : ''
      }, route.title))
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
