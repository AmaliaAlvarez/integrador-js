function tarjetaOver(tarjeta) {
    tarjeta.classList.replace(`border-muted`, `border-primary`)
}


function tarjetaLeave(tarjeta) {
    tarjeta.classList.replace(`border-primary`, `border-muted`)
}


function tarjetaClick(tarjeta) {
    tarjeta.ariaChecked = true
    tarjeta.classList.replace(`border-primary`, `border-success`)
    tarjeta.classList.replace(`border-muted`, `border-success`)

    select.value = 
        tarjeta.id === `tarjeta1` && `1` ||
        tarjeta.id === `tarjeta2` && `2` ||
        tarjeta.id === `tarjeta3` && `3` 


    for (let item of tarjetas) {
        if(item.id !== tarjeta.id){
            item.classList.replace(`border-success`, `border-muted`)
            ariaChecked = false
        }
    }
}


function eventos(tarjeta) {
    tarjeta.addEventListener('mouseover', () => tarjetaOver(tarjeta))
    tarjeta.addEventListener('mouseleave', () => tarjetaLeave(tarjeta))
    tarjeta.addEventListener('click', () => tarjetaClick(tarjeta))

}


eventos(tarjeta1)
eventos(tarjeta2)
eventos(tarjeta3)