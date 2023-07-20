const countOeis = (n) => {
    let order = [1];
    let total = 1;
    
    for (let i = 1; i < n; i++) {
      total += i;
      order.push(total);
    }
    
    return order.join('-');
  }
  
  // Print hasil pemanggilan fungsi
  
  console.log(countOeis(7));  // Output: 1-2-4-7-11-16-22
  console.log(countOeis(4));  // Output: 1-2-4-7
  console.log(countOeis(15)); // Output: 1-2-4-7-11-16-22-29-37-46-56-67-79-92-106