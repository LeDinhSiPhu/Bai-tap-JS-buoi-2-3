function tinhChuso () {
    var chuSo = document.getElementById("chuSo").value*1
    var hangChuc = Math.floor(chuSo / 10);
    var hangDonvi = chuSo % 10 ;
    var tongChuso = hangChuc + hangDonvi;
    var ketQuaelement = document.getElementById("ketQua")
    ketQuaelement.innerHTML = "Tổng các chữ số là :" + tongChuso
}