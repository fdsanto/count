// count doesn't collide with the global scope
let count = 0; // 

export default function(number = 1) {
  return count = count + number;
};