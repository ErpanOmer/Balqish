export function isPromiseObject (p) {
  return !!Promise
         && ('then' in p && 'catch' in p && 'finally' in p)
         && (p.constructor === Promise)
         && (p instanceof Promise)
         && (Object.prototype.toString.call(p) === '[object Promise]')
}
