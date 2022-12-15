function cardOver(tarjeta) {
    tarjeta.classList.replace(`border-muted`, `border-primary`)
}


function cardLeave(tarjeta) {
    tarjeta.classList.replace(`border-primary`, `border-muted`)
}


function cardClick(tarjeta) {
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


function event(tarjeta) {
    tarjeta.addEventListener('mouseover', () => cardOver(tarjeta))
    tarjeta.addEventListener('mouseleave', () => cardLeave(tarjeta))
    tarjeta.addEventListener('click', () => cardClick(tarjeta))

}


event(tarjeta1)
event(tarjeta2)
event(tarjeta3)

