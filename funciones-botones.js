function borrar(event) {
    event.preventDefault()
    formulario.ref1.value =  ''
    formulario.ref2.value = ''
    formulario.ref3.value = ''
    formulario.ref4.value = ''
    formulario.totalCompra = ''
    document.getElementById('totalCompra').innerHTML = 'Total a pagar $ '
    console.log("Borrado");
   
}

function chekError() {
    let info = false
    const valor3 = 
        formulario.opciones.value == `1` && `Estudiante` ||
        formulario.opciones.value == `2` && `Trainee` ||
        formulario.opciones.value == `3` && `Junior`
    
}

function enviar(event){
    event.preventDefault()
    chekError()
    console.log('Hiciste click')
    mostrarDatos()
    
}


boton1.onclick = (event) => { borrar(event) }
boton2.onclick = (event) => { enviar(event) } 


