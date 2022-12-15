Swal.fire({
    title: 'Compra exitosa! ',
    confirmButtonText: 'Aceptar',
    icon: 'success',
    width: '70%',
    padding: '3rem',
    backdrop: true,
    allowOutsideClick: false,   
})

let form = sessionStorage.getItem('formulario')
form = JSON.parse(form)

console.log(form)

const ref1 = document.getElementById('ref1')
ref1.innerText = "Nombre: " + form.nombre

const ref2 = document.getElementById('ref2')
ref2.innerText = "Apellido: "+ form.apellido

const ref3 = document.getElementById('ref3')
ref3.innerText = "Email: " + form.email

const ref4 = document.getElementById('ref4')
ref4.innerText = "Cantidad de tickets comprados: " + form.cantidad

//const totalCompra = document.get('totalCompra')
//totalCompra.innerText = form.totalCompra

const seleccion = document.getElementById('seleccion')
seleccion.innerHTML = "Categoría: " + form.categoria

const totalCompra = document.getElementById('totalCompra')
totalCompra.innerHTML = "Total de la compra: $ " + form.total  

/*const total = document.getElementById('totalCompra')
total.innerHTML = form.total*/

//const valor3 = document.getElementById(valor3)
//document.getElementById('ref1').innerText = form.nombre
//document.getElementById('ref2').innerText = form.apellido
//document.getElementById('ref3').innerText = form.email
//document.getElementById('total').innerHTML = form.totalCompra

//valor3.innerText = form.valor3
//valor3.addEventListener('click',() => { location.href = 'index.html'})






setTimeout( function() { window.location.href = "index.html"; }, 15000 );