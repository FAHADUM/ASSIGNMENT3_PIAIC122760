let a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
a = a.filter((item,index)=>{
   return (a.indexOf(item) == index)
})
document.write(a);