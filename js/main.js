/*-----Bài 1------
Tìm só nguyên dương nhỏ nhứt sao cho 1 + 2 + ... + n > 10000
b1: 
number = 0;
tong = 0
b2: xử lý bằng while (tong < 10000): number = number + 1, tong = tong + number
b3:xuất ra file html
*/
function handleNumber() {
    var number = 0;
    var tong = 0;
    while(tong < 10000) {
        number++;
        tong = tong + number;
    };
    document.getElementById("result1").innerHTML = `<h5>Số n nhỏ nhứt để 1 + 2 + ... + n < 10000 là ${number}</h5>`;
};
document.getElementById("handleNumber").onclick = function() {
    handleNumber();
}

/*-----Bài 2------
Nhập 2 số x,n. Tính tổng S = x + x^2 + x^3 ... + x^n
b1: 
 Nhập 2 số x,n
 var sum
b2: xử lý bằng for
b3:xuất ra file html
*/
function handleSum() {
    var numX = +document.getElementById("numX").value;
    var numN = +document.getElementById("numN").value;
    var sum = 0;
    for(var i = 1; i <= numN; i++) {
        sum += Math.pow(numX, i);
    };
    document.getElementById("result2").innerHTML = `<h5>Tổng là: ${sum}</h5>`;
};
document.getElementById("handleSum").onclick = function() {
    handleSum();
}