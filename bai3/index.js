function tinhTien() {
    var giaUsd = document.getElementById("giaUsd").value*1;
    var giaUsdtheotienvietnamhiennay = 23500 ;
    var giaTien = giaUsd * giaUsdtheotienvietnamhiennay;
    var resultElement = document.getElementById("result");
    resultElement.innerHTML = "Giá tiền hiện nay là:" + giaTien + " đồng" ;
}