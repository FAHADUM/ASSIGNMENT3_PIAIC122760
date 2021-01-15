var a = [20,53,78,4,91,12];
document.write("Orignal Array: "+a+"<br>");
a.sort(function(a, b) {
  return a - b;
});
document.write("Sorted Array: "+a+"<br>");
