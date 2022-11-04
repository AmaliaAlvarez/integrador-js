function elemSeleccionado() {
    select.value === `1` && tarjetaClick(tarjeta1)
    select.value === `2` && tarjetaClick(tarjeta2)
    select.value === `3` && tarjetaClick(tarjeta3)
}
select.addEventListener(`change`, elemSeleccionado)