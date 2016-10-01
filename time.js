var myDate=new Date();
myDate.setFullYear(2008,8,9);

var today = new Date();

if (myDate>today)
{
    console.log("Today is before 9th August 2008");
}
else
{
    console.log("Today is after 9th August 2008");

}

console.log(Math.floor(Math.random()*11));

var patt1 = new RegExp("@");

if(!(patt1.test("The best thing in life are free"))){
    console.log("输入有误");
}

var patt2 = new RegExp("e","g");
do{
    result = patt2.exec("The best thing in life are free");
    console.log(result);
}while( result != null );

var patt3 = new RegExp("e");
console.log(patt3.test("The best thing in life are free"));

patt3.compile("d");
console.log(patt3.test("The best thing in life are free"));



console.log(parseFloat("12345red") + "<br />");
console.log(parseFloat("0xA") + "<br />");
console.log(parseFloat("11.2") + "<br />");
console.log(parseFloat("11.22.33") + "<br />");
console.log(parseFloat("0102") + "<br />");
console.log(parseFloat("red") + "<br />") ;