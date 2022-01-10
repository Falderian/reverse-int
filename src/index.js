module.exports = function reverse (n) {
    let str=String(Math.abs(n));
  let arr=[];
  for (i=0; i<=str.length-1;i++){
      arr[i]=str[i];
  }
  arr = arr.reverse();
  result=arr.join('');
  return result;
    
}
