// Inicialización de variables
var topbarMenu = document.querySelector(".top-bar_menu")

// Caundo el menu esta hover se activa la función
topbarMenu.addEventListener('mouseover', function(e) {
    var nodes = Array.from(topbarMenu.children)
    var li = e.target.closest('li')
    var index = nodes.indexOf(li)

    if (index > -1) {
        var menuCnt = li.querySelector(".tb_menu_container")
        li.onmouseover = function() {
            console.log(true)
            menuCnt.classList.add("tb_menu_container-hover")
        }
        li.onmouseout = function() {
            menuCnt.classList.remove("tb_menu_container-hover")
        }
    }
})
