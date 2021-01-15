let a = [10,20,4,40,60,70];
let b = [1,2,3,4,5,6,7,8,9,10];
let ab = b.concat(a);
ab = ab.filter((item,index)=>{
    return (ab.indexOf(item) == index)
 })
 document.write(ab);