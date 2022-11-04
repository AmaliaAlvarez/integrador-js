const datos= [
    cantidadTicket ="",
    opciones ="",
    total ="",
    ticket =  200,
    ticketEstudiante = 200 - (200 * 80) / 100,
    ticketTrainee = 200 - (200 * 50) / 100,
    ticketJunior = 200 - (200 * 15) / 100,
]


function mostrarDatos() {
    let nombre = document.getElementById('ref1').value;
    let apellido = document.getElementById('ref2').value;
    let email = document.getElementById('ref3').value;
    let cantidad = document.getElementById('ref4').value;
    let selector = document.getElementById('seleccion').value;

    

    if (cantidad > 0 &&  !isNaN(cantidad) && cantidad % 1 == 0) {
        if (selector == '1') {
            cantidadTicket = cantidad * ticketEstudiante;
            totalCompra = cantidadTicket;
            document.getElementById('totalCompra').innerHTML = 'Total a pagar $ ' + totalCompra;
        console.log('valor de tu compra : ' + cantidadTicket);
            
        }else if(selector == '2') {
                cantidadTicket = cantidad * ticketTrainee;
                totalCompra = cantidadTicket;
                document.getElementById('totalCompra').innerHTML = 'Total a pagar $ ' + totalCompra;
            console.log('Deberás abonar: $ ' + cantidadTicket);
            }
        else{
            if(selector == '3') {
                cantidadTicket = cantidad * ticketJunior;
                totalCompra = cantidadTicket;
                document.getElementById('totalCompra').innerHTML = 'Total a pagar $ ' + totalCompra;
            console.log('Deberás abonar: $ ' + cantidadTicket);
            }
        }
    
    console.log(' Nombre:  ' + nombre + '  Apellido:  '+ apellido + '  email :  ' + email + '  Cantidad: ' + cantidad + '  Seleccion :   ' + selector )
    }else{
        window.alert('Debe ingresar un número entero. Vuelva a intentarlo');
        
    } 
    
}