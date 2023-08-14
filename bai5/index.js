function tinhChuso () {
    var chuSo = document.getElementById("chuSo").value*1
    var hangChuc = Math.floor(chuSo / 10);
    var hangDonvi = chuSo % 10 ;
    var tongChusp = hangChuc + hangDonvi;
    var ketQuaelement = document.getElementById("ketQua")
    ketQuaelement = "Tổng các chữ số là :" + tongChusp
}