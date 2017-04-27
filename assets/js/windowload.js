window.addEventListener('load',function(){
  document.getElementById('form').addEventListener('submit',function(e){
    e.preventDefault();

    if(validateForm()){
      //limpiar campos
      alert("todos tus datos fueron registrados correctamente");
    }else {
      alert("Ingrese todos los campos correctamente");
    }
  });
    // validateForm();
    // console.log("aqui");
  //});
});
