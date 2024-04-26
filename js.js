// ma variable  <icon> pour mon icone burger 
// et ma variable  <link> pour tout mes liens 

let menu_burger_icon = document.querySelector('.menu_burger_icon')
let menu_burger_link = document.querySelector('.menu_burger_link')

menu_burger_icon.addEventListener('click', function()
{
    // le toogle verifie si il y a la classe <hiddendiv> 
    // Si la classe est présente, elle la supprime, et si elle n'est pas présente, elle l'ajoute.

    menu_burger_link.classList.toggle('hiddendiv')
}
)

