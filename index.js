function add() {

    var a = document.querySelectorAll("input")[0].value
    var b = document.querySelectorAll("input")[1].value

    var c = Number(a) + Number(b)

    document.querySelectorAll("input")[2].value = c
    
    setTimeout(function(){
        location.reload()
    },5000)
}

function sub() {
    var a = document.querySelectorAll("input")[0].value
    var b = document.querySelectorAll("input")[1].value

    var c = Number(a) - Number(b)

    document.querySelectorAll("input")[2].value = c

    setTimeout(function(){
        location.reload()
    },5000)
}

function mul() {
    var a = document.querySelectorAll("input")[0].value
    var b = document.querySelectorAll("input")[1].value

    var c = Number(a) * Number(b)

    document.querySelectorAll("input")[2].value = c

    setTimeout(function(){
        location.reload()
    },5000)
}

function div(){
    var a = document.querySelectorAll("input")[0].value
    var b = document.querySelectorAll("input")[1].value

    var c = Number(a) / Number(b)

    document.querySelectorAll("input")[2].value = c
    
    setTimeout(function(){
        location.reload()
    },5000)
}


