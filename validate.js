function kiemTraDoDai(value,idErr,min,max){
    var length=value.length;
    if(length<min||length>max){
        document.getElementById(idErr).innerText=`Độ dài phải từ ${min} đến ${max} kí tự và không để trống`;
        return false;
    }
    else{
        document.getElementById(idErr).innerText= "";
        return true;
    }


}

function kiemHoTen(value){
    const reg =/^[A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ][a-zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]*(?:[ ][A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ][a-zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]*)*$/gm;
  var ktHoTen =reg.test(value);
  if(ktHoTen){
    document.getElementById("tbTen").innerText="";
    return true;

}
else{
    document.getElementById("tbTen").innerText="Họ tên phải là chữ và không để trống";
    return false;
} 
}

function kiemTraEmail(value){
    const reg =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  var isEmail =reg.test(value);
  if(isEmail){
    document.getElementById("tbEmail").innerText="";
    return true;

}
else{
    document.getElementById("tbEmail").innerText="Email không hợp lệ";
    return false;
} 
}

function kiemTraMatKhau(value){
   var reg =/^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{6,10}$/;
  var isPass =reg.test(value);
  if(isPass){
    document.getElementById("tbMatKhau").innerText="";
    return true;

}
else{
    document.getElementById("tbMatKhau").innerText="Mật khẩu 6-10 ký tự, ít nhất một chữ cái viết hoa, một chữ cái viết thường, một số và một ký tự đặc biệt";
    return false;
} 
}





const min_SALARY= 1000000;
const max_SALARY= 20000000;
const isValidSaLaRy =(luongCB) =>{
    if(!luongCB){
        document.getElementById("tbLuongCB").innerText="Lương cơ bản 1 000 000 - 20 000 000, không để trống";
        return false;
    }
    if(luongCB<min_SALARY || luongCB>max_SALARY){
        document.getElementById("tbLuongCB").innerText="Lương cơ bản 1 000 000 - 20 000 000, không để trống";
        return false;
    }
    document.getElementById("tbLuongCB").innerText="";
    return true;

}

function kiemTraChucVu(chucVu){
    if(chucVu){
        document.getElementById("tbChucVu").innerText="";
        return true;
    }
    document.getElementById("tbChucVu").innerText="Chức vụ phải chọn chức vụ hợp lệ (Giám đốc, Trưởng Phòng, Nhân Viên)";
    return false;

}


const min_GioLam= 80;
const max_GioLam= 200;
const kiemTraGioLam =(gioLam) =>{
    if(!gioLam){
        document.getElementById("tbGiolam").innerText=" Số giờ làm trong tháng 80 - 200 giờ, không để trống";
        return false;
    }
    if(gioLam<min_GioLam || gioLam>max_GioLam){
        document.getElementById("tbGiolam").innerText=" Số giờ làm trong tháng 80 - 200 giờ, không để trống";
        return false;
    }
    document.getElementById("tbGiolam").innerText="";
    return true;

}


