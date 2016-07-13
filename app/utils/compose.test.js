/* eslint-env browser, mocha */
import { assert } from 'chai'
import compose from './compose'

describe('Compose', () => {
  it('should compose objects', () => {
    const a = (opts) => {
      opts.a = true
      return opts
    }

    const b = (opts) => {
      opts.b = true
      return opts
    }

    const result = compose(b, a)({})
    assert.deepEqual(result, { a: true, b: true })
  })

  it('should pass along the current javascript environment as this', () => {
    const a = function (opts) {
      this.a = true
      return opts
    }

    const b = function (opts) {
      this.b = true
      return opts
    }

    let env = { org: true }
    compose(b, a).call(env, {})
    assert.deepEqual(env, { org: true, a: true, b: true })
  })
})
