module.exports = function check(str, bracketsConfig) {

  const stack = [];
  const check = str.split('');

  for (let i in check) {
    for(let br in bracketsConfig){
      if (check[i] === bracketsConfig[br][0]){
        if (bracketsConfig[br][0]=== bracketsConfig[br][1]) {
          if (stack[stack.length -1] === check[i]) {
            stack.pop();
            continue
          }
        }
        stack.push(check[i]);
        continue
      }

      if(check[i] === bracketsConfig[br][1]) {
        let open = stack.pop();
        if (open !== bracketsConfig[br][0]) {
          return false
        }
      }
    }
  }
  
  return stack.length === 0
};
