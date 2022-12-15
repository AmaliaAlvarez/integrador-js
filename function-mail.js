function valid_email( email ) {
    let regex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    let valid = regex.test(email);
    if (valid==true) {
        console.log("Correo válido");
    }else {
        alert('El correo ingresado es incorrecto');
    }
    
}