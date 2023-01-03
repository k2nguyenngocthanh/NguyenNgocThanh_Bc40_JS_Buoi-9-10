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
    const reg =/^[a-zA-Z]+$/;
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

