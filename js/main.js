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
};

/*-----Bài 3------
Nhập 1 số n. Tính giai thừa : 1*2*3*...*n
b1: 
Nhập 1 số n
b2: xử lý bằng for
b3:xuất ra file html
*/
function handleGiaiThua() {
    var numberN = +document.querySelector("#numberN").value;
    var x = 1;
    for(var i = 1; i <= numberN; i++) {
        x *= i;
    };
    document.querySelector("#result3").innerHTML = `<h5>Giai thừa của ${numberN} bằng: ${x}.</h5>`;
};
document.querySelector("#handleGiaiThua").onclick = function() {
    handleGiaiThua();
};

/*-----Bài 4------
10 thẻ div, thẻ chẵn background màu đỏ, lẻ background màu xanh
b1: 
10 thẻ div
b2: xử lý bằng for
b3:xuất ra file html
*/
function handleTheDiv() {
        var result4 = document.querySelector("#result4");
        for (i = 1 ; i <= 10; i++) {
            if (i % 2 === 0) {
                result4.innerHTML = result4.innerHTML + `<div class="bg-danger text-center m-1 col">Đây là thẻ div chẵn số ${i}</div>`;
                // document.querySelector("#result4").innerHTML = result4.innerHTML;
            } else {
                result4.innerHTML = result4.innerHTML + `<div class="bg-primary text-center m-1 col">Đây là thẻ div lẻ số ${i}</div>`;
                // document.querySelector("#result4").innerHTML = result4.innerHTML;
            };
            document.querySelector("#result4").innerHTML = result4.innerHTML;
        }
    
};
document.querySelector("#handleTheDiv").onclick = function() {
    handleTheDiv();
};

/*-----Bài 5------
In ra tất cả số nguyên tố từ 1 đến giá trị nhập vào ô input 
b1: 
Nhận giá trị number
b2: xử lý bằng for
b3:xuất ra file html
*/
  // hàm kiểm tra số nguyên tố

  /**
  * hàm kiểm tra số nguyên tố
  * @param (n): số truyền vào kiểm tra có phải số nguyên tố hay không
  * @return true hoặc false
  */
  function kiem_tra_snt(n)
  {
      // Biến cờ hiệu
      var flag = true;

      // Nếu n bé hơn 2 tức là không phải số nguyên tố
      if (n < 2) {
          flag = false;
      }
      else if (n == 2) {
          flag = true;
      }
      else if (n % 2 == 0) {
          flag = false;
      }
      else {
          // lặp từ 3 tới n-1 với bước nhảy là 2 (i+=2)
          for (var i = 3; i <= Math.sqrt(n); i += 2)
          {
              if (n % i == 0) {
                  flag = false;
                  break;
              }
          }
      }
      
      return flag;
  };

  // Hàm in ra các số nguyên tố từ 1 tới n
  function handleSoNguyenTo()
  {
      // Lấy number
      var number = +document.querySelector("#numberNguyenTo").value;

      // Lặp để in kết quả
      var html = '';
      for (var i = 1; i <= number; i++) {
          // Nếu là số nguyên tố thì in ra
          if (kiem_tra_snt(i)){
            html += i + ' ,';
          };
      }
      document.querySelector("#result5").innerHTML = `Các số nguyên tố từ 1 đến ${number} là: ${html}`;
  };
  document.querySelector("#handleSoNguyenTo").onclick = function() {
    handleSoNguyenTo();
  }