const isBalancedBracket = (str) => {
    let stack = [];
  
    for (let char of str) {
      if (char === '(' || char === '{' || char === '[') {
        stack.push(char);
      } else if (char === ')' || char === '}' || char === ']') {
        if (stack.length === 0) {
          return "NO";
        }
  
        let top = stack.pop();
        if ((char === ')' && top !== '(') || (char === '}' && top !== '{') || (char === ']' && top !== '[')) {
          return "NO";
        }
      }
    }
  
    return stack.length === 0 ? "YES" : "NO";
  }
  
  console.log(isBalancedBracket("{[()]}")); // Output: YES
  console.log(isBalancedBracket("{[(])}")); // Output: NO
  console.log(isBalancedBracket("{(([])[])[]}")); // Output: YES