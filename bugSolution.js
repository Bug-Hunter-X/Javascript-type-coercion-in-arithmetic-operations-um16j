function foo(a,b){
if(typeof a === 'string' && typeof b === 'string'){
  return parseInt(a) + parseInt(b);
} else if (typeof a === 'string'){
  return parseInt(a) + b;
} else if (typeof b === 'string'){
  return a + parseInt(b);
} else {
  return a + b;
}
}
console.log(foo(1,2)); //3
console.log(foo(1,"2")); //3
console.log(foo("1",2)); //3
console.log(foo("1","2")); //3