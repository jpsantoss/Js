let num = document.getElementById('fnum')
let lesta = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <=100) {
        return true 
    } else {
        return false
    }
}

function inlista(n, l) {
    if (l.indexOF(Number(n)) != -1) {
        return true 
    } else {
        return false 
    }

}
 
function adicionar() {
    if(isNumero(num.value) && !inlista(num.value)){
        let item = document.createElement('option')
        item.text = `valor ${num.value} adicionado.`
        lista.appendCgild(item)
    } else {
        window.alert(`valor inválido ou já encontrado na lista.`)
    }
    num.value = ''
    num.focus()
}