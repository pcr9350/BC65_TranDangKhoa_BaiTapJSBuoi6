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
    document.getElementById("result1").innerHTML = `Số n nhỏ nhứt để 1 + 2 + ... + n < 10000 là ${number}`;
};
document.getElementById("handleNumber").onclick = function() {
    handleNumber();
}