window.addEventListener('load',function(){
  document.getElementById('form').addEventListener('submit',function(e){
    e.preventDefault();

    if(validateForm()){
      // alert("Todos tus datos fueron registrados correctamente");
      console.log("ok");
      var inputbox=document.getElementsByClassName("input-box");
      for (var i = 0; i < inputbox.length; i++) {
        inputbox[i].value="";
      }
    }else {
      console.log("not send");
      // alert("Ingrese todos los campos correctamente");
    }
  });
});
