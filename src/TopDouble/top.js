/* Using whichever loop you'd like, complete the top double function to find the largest double 
for the value that is below the top */

function topDouble(value, top) {
  let store = value;
  for (i = 1; i <= top; i++) {
    let pre = store;
    store *= 2;
    if (store > top) {
      return pre;
    }
  }
}

module.exports = topDouble;
