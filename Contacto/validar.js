function validar(){
    var nombre, apellidos, correo, usuario, telefono, clave;
    nombre = document.getElementById("nombre").value;
    apellidos = document.getElementById("apellidos").value;
    correo = document.getElementById("correo").value;
    usuario = document.getElementById("usuario").value;
    telefono = document.getElementById("telefono").value;
    clave = document.getElementById("clave").value;
    erCorreo = /\w+@[a-zA-z]+\.[a-z]{2,3}/;
    erNomApe = /[A-ZÑa-zñáéíóúÁÉÍÓÚ ]+/;
    erUsua = /[a-zA-Z0-9]{5,20}/;
    erCLa = /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{5,10}/;


    if(nombre==="" || apellidos==="" || correo==="" || usuario==="" || telefono==="" || clave===""){
        alert("Algunos campos estan vacios, rellenar correctamente los campos");
        return false;
    }
    else if(nombre.lenght>10){
        alert("El nombre es muy largo, ingresa uno más corto");
        return false;
    }
    else if(apellidos.lenght>10){
        alert("El apellido es muy largo, ingresa uno más corto");
        return false;
    }
    else if(correo.lenght>20){
        alert("El correo es muy largo, ingresa uno más corto");
        return false;
    }
    else if(usuario.lenght>10){
        alert("El usuario es muy largo, ingresa uno más corto");
        return false;
    }
    else if(clave.lenght>10){
        alert("La clave es muy larga, ingresa una más corta");
        return false;
    }
    else if(telefono.lenght>10){
        alert("El telefono es muy largo, ingresa uno de 8 dígitos");
        return false;
    }
  
    if(isNaN(telefono)){
        alert("El telefono solo admite números, ingresa un número válido");
        return false;
    }
    // Si no es igual la expresion al correo entra en este if, el .test es un comparador de la variable que tenga dentro
    if(!erNomApe.test(nombre)){
        alert("Ingresa un nombre válido, no ingreses números o carácteres especiales");
        return false;
    }
    if(!erNomApe.test(apellidos)){
        alert("Ingresa un apellido válido, no ingreses números o carácteres especiales");
        return false;
    }
    if(!erCorreo.test(correo)){
        alert("Ingresa un correo electrónico válido");
        return false;
    }
    if(!erUsua.test(usuario)){
        alert("Ingresa un usuario válido, carácteres especiales");
        return false;
    }
    if(!erCLa.test(clave)){
        alert("La clave mínima de 5 carácteres, 1 mayúscula, 1 minúscula, 1 carácter especial y 1 número");
        return false;
    }
}

/* document.getElementById("inicio").onclick = function () {
    location.href = "index.html";
 };
*/