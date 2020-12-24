var str = prompt("Enter a string to reverse");
var revStr = (str) =>
{
    var str1 = str.split("").reverse().join("");
    document.write(str1);
}
revStr(str);