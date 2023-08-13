function Tinhluong() {
    var soNgaylamviec = document.getElementById("soNgaylamviec").value*1 ;
    var luongNgay = 100000;
    var luongThang = luongNgay * soNgaylamviec
    var resultElement = document.getElementById("result")
    resultElement.innerHTML = "lương của bạn là : " + luongThang + "đồng";

 }