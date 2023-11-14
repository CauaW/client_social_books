const githubId = document.querySelector('input[type=text]')
const btnBuscar = document.querySelector('input[type=button]')
btnBuscar.onclick = function(){
    //Fazendo a conexão com a API
    fetch('https://github.com/CauaW/Social_Books_Api.git' + githubId.value)
    .then(response => {
        if(response.ok){
            return response.json()
        }
        else {
            throw new Error('Erro na requisição.')
        }
    })
    .then(data => {
        document.querySelector('#id').textContent = data.id
        document.querySelector('#nome').textContent = data.nome
        document.querySelector('#editora').textContent = data.editora
        document.querySelector('#resumo').textContent = data.resumo
        document.querySelector('#autor').textContent = data.autor
        //E outros atributos que você desejar
    })
    .catch(error => {
        console.log('Erro: '+ error)
    })
}