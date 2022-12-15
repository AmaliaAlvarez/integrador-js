function selectedItem() {
    select.value === `1` && cardClick(tarjeta1)
    select.value === `2` && cardClick(tarjeta2)
    select.value === `3` && cardClick(tarjeta3)
}
select.addEventListener(`change`, selectedItem)