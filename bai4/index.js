function tinhChuViDienTich() {

    var chieuDai = parseFloat(document.getElementById("chieuDai").value);
    var chieuRong = parseFloat(document.getElementById("chieuRong").value);

     var chuVi = 2 * (chieuDai + chieuRong);
    var dienTich = chieuDai * chieuRong;

    var ketQuaElement = document.getElementById("ketQua");
    ketQuaElement.innerHTML = "Chu vi hình chữ nhật là: " + chuVi + "<br>" + "Diện tích hình chữ nhật là: " + dienTich;
}