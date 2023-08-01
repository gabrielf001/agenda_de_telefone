const form = document.getElementById('formulario')
let linhas=''
const nomes=[]
const numeros=[]
form.addEventListener('submit', function(e){
    e.preventDefault()

    const nomeContato = document.getElementById('nome-contato')
    const numeroContato = document.getElementById('numero-contato')
    const obsContato = document.getElementById('obs-contato')

    if(nomes.includes(nomeContato.value)){
        alert(`O nome "${nomeContato.value}" ja esta sendo utilizado.`)
    }else if(numeros.includes(numeroContato.value)){
        alert(`O numero "${numeroContato.value}" ja foi adicionado.`)

    }else{
        nomes.push(nomeContato.value)
        numeros.push(numeroContato.value)
        
        let linha= '<tr>'
        linha+=`<td>${nomeContato.value}</td>`
        linha+=`<td>${numeroContato.value}</td>`
        linha+=`<td>${obsContato.value}</td>`
        linha+=`</tr>`
        linhas+=linha
        const corpotabela=document.querySelector('tbody')
        corpotabela.innerHTML= linhas

    }
    nomeContato.value=''
    numeroContato.value=''
    obsContato.value=''
})