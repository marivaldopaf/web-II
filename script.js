fetch('https://viacep.com.br/ws/48603004/json/')
.then( response => response.json())
.then( data => patati(data))
.then( erro => console.error(" Deu ruim aqui...",erro))

function patati(cep){
    const tabela = document.querySelector("#tabela-turma")
    
    tabela.innerHTML += `
       <tr>
        <td>${cep.logradouro}</td>
        <td>${cep.bairro}</td>
        <td>${cep.localidade}</td>
       <tr>
    
    
    
    `
}