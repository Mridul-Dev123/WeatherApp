function fTC(f) {
  return ((f - 32) * 5/9).toFixed(2);
}
function cTF(c) {
  return ((c * 9/5) + 32).toFixed(2);
}
export {fTC, cTF};