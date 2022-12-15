const data = [
    cantidadTicket = "",
    opciones = "",
    total = "",
    ticket = 200,
    ticketEstudiante = 200 - (200 * 80) / 100,
    ticketTrainee = 200 - (200 * 50) / 100,
    ticketJunior = 200 - (200 * 15) / 100,
]


function showData() {
    let nombre = document.getElementById('ref1').value;
    let apellido = document.getElementById('ref2').value;
    let email = document.getElementById('ref3').value;
    let cantidad = document.getElementById('ref4').value;
    let selector = document.getElementById('seleccion').value;
    
    
    
    if (nombre !== '' && apellido !== '' && email !== '') {
        
        if (cantidad > 0 && !isNaN(cantidad) && cantidad % 1 == 0) {
            
            if (selector == '0') {
                window.alert('Por favor, seleccione una categoria')
            }
            
            if (selector == '1') {
                cantidadTicket = cantidad * ticketEstudiante;
                totalCompra = cantidadTicket;
                document.getElementById('totalCompra').innerHTML = 'Total a pagar $ ' + totalCompra;
                console.log('valor de tu compra : ' + cantidadTicket);
                console.log('Nombre y apellido: \n' + nombre +" "+  apellido + '\n Email :  ' + email + '\n Cantidad de tickets: ' + cantidad + '\nTotal a pagar: $' + totalCompra )
                //newPage()

            } if (selector == '2') {
                cantidadTicket = cantidad * ticketTrainee;
                totalCompra = cantidadTicket;
                document.getElementById('totalCompra').innerHTML = 'Total a pagar $ ' + totalCompra;
                console.log('Deberás abonar: $ ' + cantidadTicket);
                console.log('Nombre y apellido: \n' + nombre +" "+  apellido + '\n Email :  ' + email + '\n Cantidad de tickets: ' + cantidad + '\nTotal a pagar: $' + totalCompra )
                //newPage()
            }
            else {
                if (selector == '3') {
                    cantidadTicket = cantidad * ticketJunior;
                    totalCompra = cantidadTicket;
                    document.getElementById('totalCompra').innerHTML = 'Total a pagar $ ' + totalCompra;
                    console.log('Deberás abonar: $ ' + cantidadTicket);
                    console.log('Nombre y apellido: \n' + nombre +" "+  apellido + '\n Email :  ' + email + '\n Cantidad de tickets: ' + cantidad + '\nTotal a pagar: $' + totalCompra )
                    //newPage()
                }
            }
            /*Swal.fire({
                title: 'Compra exitosa! ',
                text: ('Nombre y apellido: \n' + nombre +" "+  apellido + '\n Email :  ' + email + '\n Cantidad de tickets: ' + cantidad + '\nTotal a pagar: $' +  totalCompra),
                confirmButtonText: 'Inicio',
                icon: 'success',
                width: '90%',
                padding: '5rem',
                backdrop: true,
                allowOutsideClick: false,   
            })*/
        //console.log('Nombre y apellido: \n' + nombre +" "+  apellido + '\n Email :  ' + email + '\n Cantidad de tickets: ' + cantidad + '\nTotal a pagar: $'  )
        //newPage()
            
        } else {
            window.alert('La cantidad de tickets a comprar es incorrecta. Vuelva a intentarlo');
            
        }
    }else {
        window.alert('Por favor, Complete todos los campos')
        
    }
    /*setTimeout( function() { window.location.href = "index.html"; }, 5000 );*/
    //console.logg("Nombre y apellido: \n" + nombre + apellido + cantidadTickets + email)
    
}
