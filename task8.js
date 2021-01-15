var a=[];
for(i=1;i<=15;i++)
    a.push(i);
document.write("a. Counting: "+a+"<br>");

var b=[];
for(i=10;i>=1;i--)
    b.push(i);
document.write("b. Reverse counting: "+b+"<br>");

var c=[];
for(i=0;i<=20;i+=2)
    c.push(i);
document.write("c. Even: "+c+"<br>");

var d=[];
for(i=1;i<=20;i+=2)
    d.push(i);
document.write("d. Odd: "+d+"<br>");

var e=[];
for(i=2;i<=20;i+=2)
    e.push(i+"k");
document.write("e. Series: "+e+"<br>");