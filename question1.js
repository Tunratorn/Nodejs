function isDigisible(num) {
  if (num < 10000) {
    // Convert integer to string
    const numStr = num.toString();
    
    // Check condition (1) and (2)
    for (let i = 0; i < numStr.length; i++) {
      if (numStr[i] === '0' || numStr.indexOf(numStr[i]) !== i) {
        return false;
      }
    }
    
    // Check condition (3)
    for (let i = 0; i < numStr.length; i++) {
      if (num % parseInt(numStr[i]) !== 0) {
        return false;
      }
    }
    
    return true;
  } else {
    return false;
  }
}