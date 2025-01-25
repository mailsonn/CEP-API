let city = document.querySelector('#city');
let info = document.querySelector('.info');
let source = document.querySelector('.source');



let button = document.querySelector('#buscarCep');

const url = "https://brasilapi.com.br/api/cep/v1/"

button.addEventListener('click', async function(){
    let cep = document.querySelector('#cep').value;

    if(cep.length!==8){
        city.innerHTML='Não encontrado';
        info.textContent="Digite os 8 digitos sem usar hífem"
        source.textContent="";
    }
    
    try{
        let response = await fetch(url+cep);
        let data = await response.json();
        
        console.log(data)

        city.textContent=data.city;
        info.textContent="CEP pertecente a rua " + data.street + " no bairro " + data.neighborhood + ", " + data.state;
        source.textContent='Fonte dos dados: ' + data.service;
    }catch(error){
        console.error('ocorreu um erro', error);
    }



})

