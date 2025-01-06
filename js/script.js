let key = "16e4406642778aa7d373213a89646453"
const botao_buscar = document.querySelector('.botao-buscar')

/*esse função mostra as informações sobre o clima da cidade, mostrando o nome, temperatura, descrição (nublado, algumas nuves...), Umidade, */
function dataScreen(dados){
    console.log(dados)
    document.querySelector(".cidade").innerHTML = `Tempo em ${dados.name}`
    document.querySelector(".temp").innerHTML = `Temperatura: ${Math.floor(dados.main.temp)}°C`
    document.querySelector(".texto-previsao").innerHTML = `${dados.weather[0].description}`
    document.querySelector(".umidade").innerHTML = `Umidade: ${dados.main.humidity}%`
    document.querySelector('.img-previsao').src=`https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}

/*
    na variável dados, espera chegar o resultado do servidor a partir do await e o acesso ao servidor através do fetch, acessando o link do API 
*/

// no .then, é transformado a resposta em json (formato padrão do JS)
async function searchCity(cidade){
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resp=>resp.json())
    dataScreen(dados)
}

botao_buscar.addEventListener("click",()=>{
    const cidade = document.querySelector(".input-cidade").value
    searchCity(cidade)
})