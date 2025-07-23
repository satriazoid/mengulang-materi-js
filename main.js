let data1 = "12";
data1 = Array(data1); 
/*
Disini kita bisa merubah type data yang tadi nya string menjadi number
Tanpa harus membuang tanda kutif dua nya, berlaku untuk semua type data
boolean, Number dan string
*/
document.writeln(`data ${data1} bertipe ${typeof data1}`)
document.writeln('</br>')


let data2 = "12";
data2 = Boolean(data2);

document.writeln(`data ${data2} bertipe ${typeof data2}`)
document.writeln('</br>')

let data3 = "12";
data3 = string(data2);

document.writeln(`data ${data2} bertipe ${typeof data2}`)
document.writeln('</br>')

// let data1 = 12;
// data1 = Number(data1);
// let data2 = 3;
// let data3 = data1 + data2;

// document.writeln(data3) //maka hasil nya adalah 15