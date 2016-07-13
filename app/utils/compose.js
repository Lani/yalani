export default function () {
  var funcs = arguments
  return function () {
    var args = arguments
    for (var i = funcs.length; i--; i > 0) {
      args = [funcs[i].apply(this, args)]
    }
    return args[0]
  }
}
