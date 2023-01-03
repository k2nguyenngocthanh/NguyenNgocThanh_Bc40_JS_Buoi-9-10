var chucVuType = {
    sep: "Giám Đốc",
    truongPhong: "Trưởng phòng",
    nhanVien: "Nhân viên"
}

function layThongTinTuForm() {
    const _taiKhoan = document.getElementById('tknv').value;
    const _tenNV = document.getElementById('name').value;
    const _email = document.getElementById('email').value;
    const _matKhau = document.getElementById('password').value;
    const _thoiGian = document.getElementById('datepicker').value;
    const _luongCB = document.getElementById('luongCB').value * 1;
    const _chucVu = document.getElementById('chucvu').value;
    const _gioLam = document.getElementById('gioLam').value;

    var nv = new NhanVien(_taiKhoan, _tenNV, _email, _matKhau, _thoiGian, _luongCB, _chucVu, _gioLam)

    return nv;
}

function renderDSNV(nvArr) {
    var contentHTML = "";
    for (var index = 0; index < dsnv.length; index++) {
        var item = dsnv[index];
        var contentTr = `  <tr>
        <td>${item.taiKhoan}</td>
        <td>${item.ten}</td>
        <td>${item.email}</td>
        <td>${item.thoiGian}</td>
        <td>${chucVuType[item.chucVu]}</td>
        <td>${item.tongLuong()}</td>
        <td>${item.xepLoai()}</td>
        <td>
        <button onclick="xoaNhanVien('${item.taiKhoan}')" class="btn btn-danger">
        Xóa</button>

        <button onclick="suaNhanVien('${item.taiKhoan}')" class="btn btn-warning">
        Sửa</button>
        </td>
  
        </tr>`
        contentHTML += contentTr;

    }
    document.getElementById("tableDanhSach").innerHTML = contentHTML;

}

function timKiemViTri(id,arr){
    var vitri=-1;
    for(var index=0; index<arr.length;index++){
     var sv=arr[index];
     if(sv.taiKhoan==id){
         vitri=index;
         break;
         
     }
 }
 return vitri;
}
function showThongTinLenForm(nv){
    document.getElementById('tknv').value=nv.taiKhoan;
    document.getElementById('name').value=nv.ten;
    document.getElementById('email').value=nv.email;
    document.getElementById('password').value=nv.matKhau;
    document.getElementById('datepicker').value=nv.thoiGian;
    document.getElementById('luongCB').value =nv.luongCB;
    document.getElementById('chucvu').value=nv.chucVu;
    document.getElementById('gioLam').value=nv.gioLam;


}