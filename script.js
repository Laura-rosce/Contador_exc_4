function contador(){
    var nI = Number (document.getElementById('numIni').value)
    var nF = Number (document.getElementById('numFim').value)
    var incremento = Number(document.getElementById('inc').value)
    var res = document.getElementById('res')

    res.innerHTML = ' '
    
    for (var i=nI; i<=nF; i+=incremento){
        res.innerHTML += `👉 ${i} `
    }
   
    
}