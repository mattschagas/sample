// Quando você quiser contar caracteres de um determinado elemento
let charcount = function(){
    let counterchar = document.getElementById("countChar")
    let target = document.getElementById("countTarget")
    let charcount = counterchar.value.length

    target.innerHTML = `${charcount}/160`
}

charcount()
document.getElementById("countChar").addEventListener("input", charcount)