var inputs=[{id:"name", clase:"input-box", type:"text", placeholder:"", require:"required"},
            {id:"name", clase:"input-box", type:"text", placeholder:"", require:"required"},
            {id:"name", clase:"input-box", type:"text", placeholder:"", require:"required"},
            {id:"name", clase:"input-box", type:"text", placeholder:"", require:"required"},
            {id:"name", clase:"input-box", type:"text", placeholder:"", require:"required"},
            {id:"name", clase:"input-box", type:"text", placeholder:"", require:"required"},
            {id:"name", clase:"input-box", type:"text", placeholder:"", require:"required"},
            {id:"name", clase:"input-box", type:"text", placeholder:"", require:"required"}];

inputs.forEach(function(e){
  var input=document.createElement('input');
  input.setAttribute("id",e.id)
  input.setAttribute("class",e.clase);
  input.setAttribute("type",e.type);
  input.setAttribute("placeholder",e.placeholder);
  input.setAttribute("class",e.require);
  document.getElementById('formulario').appendChild(input);
});

// function validateForm(funcion){
//   var inputElements=document.getElementsByClassName('input-box');
//   for (var i = 0; i < inputElements.length; i++) {
//     inputElements[i].addEventListener('blur',funcion);
//   }
//   return true;
// }
function validateForm(){
  var name=document.getElementById('name');
  var letters = /^([A-Za-zÑñá-úÁ-Ú ]+)$/;
  var mayus=/[^a-zá-ú-0-9\s]+([a-zá-ú ]{2,})/;
  var dni=/[0-9]{8}/;
  var fecha=/[0-31]+[0-12]+[0-9]{4}/;

  if(name.value!="" || name.value.trim().length!=0){
    if(!name.value.match(letters) || !name.value.match(mayus)){
         //removeMessage();
        showMessage("name-alert","Solo se aceptan letras, el primer caracter debe ser mayúscula");
        return false;
      }
    }else {
      // removeMessage();
      showMessage('name-alert',"Ingrese su nombre");
      return false;
    }
    return true;
}


function showMessage(id,message) {
  var e = document.getElementById(id);
  e.appendChild(document.createTextNode(""));
  e.appendChild(document.createTextNode(message));
}

function removeMessage(){
   var tool=document.getElementsByClassName('tooltip');
   for (var i = 0; i < tool.length; i++) {
     tool[i].style.display="none";
   }
}
