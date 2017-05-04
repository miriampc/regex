var inputMsj=[
  {title:"Solo acepta letras, la primera debe ser mayuscula"},
  {title:"Solo acepta letras, la primera debe ser mayuscula"},
  {title:"Debe tener 8 digitos"},
  {title:"Ingrese una fecha correcta"},
  {title:"Debe iniciar con 9 y tener 9 digitos"},
  {title:"Debe tener 6 o 7 digitos"},
  {title:"Debe ser mayor a 6 digitos"}];

var input=document.getElementsByClassName('input-box');
inputMsj.forEach(function(e,i){
  input[i].setAttribute("title",e.title);
});

var alert=document.getElementsByClassName('alert');

function validateForm(){

    var pswd1=document.getElementById('password1');
    var pswd2=document.getElementById('password2');
    var check=document.getElementById('check');
    if(verifyAge()==false){
      return false;
    }

    if(pswd1.value!=pswd2.value){
      alert[1].style.display="block";
      return false;
    }else {
      alert[1].style.display="none";
      if(!check.checked){
        alert[2].style.display="block";
        return false;
      }
      alert[2].style.display="none";

  }
    return true;
}

function verifyAge(){
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1;
  var yyyy = today.getFullYear();
  var edad=document.getElementById("date").value;
  var arrFecha=edad.split("-");
  if(yyyy - parseInt(arrFecha[0])<18){
    alert[0].style.display="block";
    return false;
  }else if(parseInt(arrFecha[1])>mm){
    alert[0].style.display="block";
    return false;
  }else if(parseInt(arrFecha[2])>dd){
    alert[0].style.display="block";
    return false;
  }else{
    alert[0].style.display="none";
    return true;
  }
}
