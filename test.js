function test() {
  let result = ''
  if (!a) {
    result += 'b'
    return result
  }
  if (!b) {
    result = 'c'
  }
  result = 'a'
  result += 'b'
  return result
}
