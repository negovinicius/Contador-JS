function contar() {
    let start = document.getElementById('txts')
    let end = document.getElementById('txte') 
    let step = document.getElementById('txtst')
    let res = document.getElementById('res')
    
    if (start.value.length == 0 || end.value.length == 0 || step.value.length == 0 ) {

        res.innerHTML = `Impossivel contar!`

    } else {
        res.innerHTML = 'Contando:  '
        let s = Number(start.value)
        let e = Number(end.value)
        let st = Number(step.value)
        if (st <= 0 ) {
            window.alert('Passo invalido! Considerando passo 1')
            st = 1
        }


        if (s < e )   {
            //contagem crescente
        for(let c = s; c <= e; c += st) {
    res.innerHTML += `${c} 👉🏿`
    }
    
        }else {
            //contangem decrescente
            for(let c = s; c >= e; c-= st) {
                res.innerHTML += `${c} 👉🏿 `
            }
            
        }
        res.innerHTML += `🏁`

    }

}