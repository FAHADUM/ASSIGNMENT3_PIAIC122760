var color_name=["Red","Orange","Purple","Green","White"];
document.write("Orignal Array:"+color_name+"<br>");

color_name.unshift(prompt("Enter color at the beginning of Array"));
document.write("After Add color to beginning: "+color_name+"<br>");

color_name.push(prompt("Enter color at the end of Array"));
document.write(color_name+"<br>");

color_name.unshift("Black","Blue");
document.write(color_name+"<br>");

color_name.shift();
document.write(color_name+"<br>");

color_name.pop();
document.write(color_name+"<br>");

var num=Number(prompt("Enter Index number where you want to add color"));
if(num>=0 && num<=color_name.length)
    color_name.splice(num,0,prompt("Enter the color name at Index "+num));
else
    document.write("Invalid index number");
document.write(color_name+"<br>");

var num=Number(prompt("Enter Index number where you want to delete color"));
var num_todelete=Number(prompt("How many color you want to delete"));
if(num>=0 && num<=color_name.length)
    color_name.splice(num,num_todelete);
else
    document.write("Invalid index number");

document.write(color_name+"<br>");
