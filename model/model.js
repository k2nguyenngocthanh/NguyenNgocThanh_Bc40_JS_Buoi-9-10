class NhanVien{
    constructor(
        _taiKhoan,
        _tenNV,
        _email,
        _matKhau,
        _thoiGian,
        _luongCB,
        _chucVu,
        _gioLam,
    ){
        this.taiKhoan =_taiKhoan;
        this.ten=_tenNV;
        this.email=_email;
        this.matKhau=_matKhau;
        this.thoiGian=_thoiGian;
        this.luongCB=_luongCB;
        this.chucVu=_chucVu;
        this.gioLam=_gioLam;
        this.tongLuong= function(){
            if(this.chucVu=='sep'){
                return(this.luongCB*3);
            }
            else if(this.chucVu=='truongPhong'){
                return(this.luongCB*2);
            }else if(this.chucVu=='nhanVien'){
                return(this.chucVu);
            }

            
        };
        this.xepLoai=function(){
            if(this.gioLam>=192){
                return "Nhân viên xuất sắc"
               
            }
            else if(this.gioLam>=176 && this.gioLam<192){
                return "Nhân viên giỏi"
               
            }
            else if(this.gioLam>=160 && this.gioLam<176){
                return "Nhân viên Khá"
            
            }
            else{
                return "Nhân viên trung bình"
            
            }
        }

    }
}