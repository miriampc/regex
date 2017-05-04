window.addEventListener('load',function(){
  document.getElementById('form').addEventListener('submit',function(e){
    e.preventDefault();

    if(validateForm()){
      var inputbox=document.getElementsByClassName("input-box");
      for (var i = 0; i < inputbox.length; i++) {
        inputbox[i].value="";
      }
      alert("Todos tus datos fueron registrados correctamente");
    }else {
      alert("Ingrese todos los campos correctamente");
    }
  });
});
