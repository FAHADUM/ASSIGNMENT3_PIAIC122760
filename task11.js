var a=["cake","Apple pie","cookie","chip","patties"];
var order=prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am");
var b=false;
for(i=0;i<a.length;i++)
{
    if(order==a[i])
    {
        b=true;
        document.write(order+" is available at Index "+i+" in our bakery");
        break;
    }

}
if(b==false)
    document.write("We are sorry. "+order+" is not available in our bakery");

