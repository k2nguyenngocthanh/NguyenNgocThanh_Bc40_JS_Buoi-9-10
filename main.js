var dsnv=[]

var dsnvJson=localStorage.getItem("DSNV");
if(dsnvJson !=null){
    var nvArr=JSON.parse(dsnvJson);
    dsnv=nvArr.map(function(item){
        return new NhanVien(
            item.taiKhoan, item.ten, item.email, item.matKhau, item.thoiGian, item.luongCB, item.chucVu, item.gioLam
        );
    })
    renderDSNV(dsnv);
}

function btnThemNV(){
    var nv = layThongTinTuForm();
    var isValid=true;
    //Kiểm tra tài khoản nhân viên
    isValid=kiemTraDoDai(nv.taiKhoan,"tbTKNV",4,6);
    //Kiểm tra họ tên
    isValid= isValid & kiemHoTen(nv.ten);
    //Kiểm tra Email
    isValid= isValid & kiemTraEmail(nv.email);
    //Kiểm tra mật khẩu
    isValid =isValid & kiemTraMatKhau(nv.matKhau);
    //Kiểm tra Ngày
    
    //Kiểm tra lương
    isValid =isValid & isValidSaLaRy(nv.luongCB);
    // Kiểm tra chức vụ
    isValid =isValid & kiemTraChucVu(nv.chucVu);
   

    //Kiểm tra giờ làm
    isValid =isValid & kiemTraGioLam(nv.gioLam);


    if(isValid){
    

    dsnv.push(nv);
  

    var dsnvJson = JSON.stringify(dsnv);


    localStorage.setItem("DSNV", dsnvJson);

    renderDSNV(dsnv);}
}

function xoaNhanVien(idNv){
  
    var vitri=timKiemViTri(idNv,dsnv);
        if(vitri !=-1){ 
            dsnv.splice(vitri,1);
            var dsnvJson= JSON.stringify(dsnv);
            localStorage.setItem("DSNV",dsnvJson);
            renderDSNV(dsnv);
        }
    }

    function suaNhanVien(idNv){
    
        var vitri=timKiemViTri(idNv,dsnv);
        if(vitri==-1){
            return;
        }
        var nv =dsnv[vitri];
       //SHOW thông tin lên form
       showThongTinLenForm(nv);
    }

    function capNhatNhanVien(){
        // Lấy thông tin sau khi user update
        var nv=layThongTinTuForm();
        var isValid=true;
    //Kiểm tra tài khoản nhân viên
    isValid=kiemTraDoDai(nv.taiKhoan,"tbTKNV",4,6);
    //Kiểm tra họ tên
    isValid= isValid & kiemHoTen(nv.ten);
    //Kiểm tra Email
    isValid= isValid & kiemTraEmail(nv.email);
    //Kiểm tra mật khẩu
    isValid =isValid & kiemTraMatKhau(nv.matKhau);
    //Kiểm tra Ngày
    
    //Kiểm tra lương
    isValid =isValid & isValidSaLaRy(nv.luongCB);
    // Kiểm tra chức vụ
    isValid =isValid & kiemTraChucVu(nv.chucVu);
   

    //Kiểm tra giờ làm
    isValid =isValid & kiemTraGioLam(nv.gioLam);
        
        // update dữ liệu mới thay thế dữ liệu cũ
        var vitri=timKiemViTri(nv.taiKhoan,dsnv);
        if(vitri!=-1){
            if(isValid){
            dsnv[vitri]=nv;
            var dsnvJson= JSON.stringify(dsnv);
            localStorage.setItem("DSNV",dsnvJson);
            renderDSNV(dsnv);}
        }
    
    }

   
