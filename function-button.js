
//boton cancelar
function remove(event) {
    event.preventDefault()
    formulario.ref1.value =  ''
    formulario.ref2.value = ''
    formulario.ref3.value = ''
    formulario.ref4.value = ''
    formulario.totalCompra = ''
    formulario.opciones.value = '0'
    console.log(tarjetas)
    /*tarjetas.tarjeta1.value = 'border-muted'*/
    
    
    
    
    

    document.getElementById('totalCompra').innerHTML = 'Total a pagar $ '
    console.log("Borrado");
}

function chekError() {
    let info = false
    const valor3 = 
        formulario.opciones.value == `1` && `Estudiante` ||
        formulario.opciones.value == `2` && `Trainee` ||
        formulario.opciones.value == `3` && `Junior`

    if(valor3 && formulario.ref1.value && formulario.ref2.value /*&& formulario.ref4.value*/){
        info = {
            nombre: formulario.ref1.value,
            apellido: formulario.ref2.value,
            cantidad: formulario.cantidad.value,
            total: totalCompra,
            email : formulario.ref3.value,
            categoria: valor3
        }
    } 
    return info
    console.log(info)
    
}
//boton comprar
function send(event){
    event.preventDefault()
    chekError()
    console.log('Hiciste click')
    showData()
    valid_email(formulario.ref3.value) 
    const completeForm  = chekError()
    completeForm && sessionStorage.setItem('formulario', JSON.stringify(completeForm))
    completeForm && newPage()
    console.log(completeForm)
    
    
    
}
function newPage() {
    location.href = 'newPage.html'
}

boton1.onclick = (event) => { remove(event) }
boton2.onclick = (event) => { send(event) } 


