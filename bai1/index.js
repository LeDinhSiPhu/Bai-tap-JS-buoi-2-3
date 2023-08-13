 function tinhChuso() {

    var chuSo = document.getElementById("chuSo").value*1
    var hangChuc = math.floor(chuSo / 10);
    var hangDonvi = chuSo % 10 
    var tongChuso = hangChuc + hangDonvi
    var ketQuaElement = document.getElementById("ketQua")
    ketQuaElement.innerHTML = "Tổng chữ số là : " + tongChuso 

 }