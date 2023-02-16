function cargar(){
    var divContactos = document.getElementById('divContactos');  
    divContactos.innerHTML = "";
    fetch("http://www.raydelto.org/agenda.php")
    .then(function(datos){
        return datos.json();
    }).then(function (datos){
        datos.forEach(
            function(contacto){
                divContactos.innerHTML += "<table class=` font` id=`table`> <tr> <th>" +contacto.nombre + "</th> <th>" +contacto.apellido+ "</th> <th>"+contacto.telefono+"</th></tr></table>";
            }
        )
    })
}


function agregar(){
    var txtNombre = document.getElementById('txtNombre');
    var txtApellido = document.getElementById('txtApellido');
    var txtTelefono = document.getElementById('txtTelefono');
    var contacto = {nombre: txtNombre.value, apellido: txtApellido.value, telefono : txtTelefono.value};
    fetch("http://www.raydelto.org/agenda.php",
        {
          method: 'POST',
          body: JSON.stringify(contacto)
        }
    ).then(function(respuesta){
        return respuesta.json()
    }).then(function(respuesta){
        if(respuesta.exito === true){
            mostrar(txtNombre.value, txtApellido.value, txtTelefono.value);
        }
    })    
    
}
function mostrar(nombre, apellido, telefono){
    var divContactos = document.getElementById('divContactos');  
    divContactos.innerHTML += "<table class=` fuente` id=`table`> <tr> <th>" +nombre + "</th> <th>" +apellido+ "</th> <th>"+telefono+"</th></tr></table>";
}
