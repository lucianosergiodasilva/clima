import { KEY_API_OPENWEATHER, KEY_API_UNSPLASH, URL_API_OPENWEATHER } from "./config.js";

const key_openweather = KEY_API_OPENWEATHER;
const key_unsplash = KEY_API_UNSPLASH;
const url_openweather = URL_API_OPENWEATHER;

// INSERE UMA FOTO DE FUNDO
// Acessa a api e obtém os dados
async function getApiUnsplash(cidade) {
  const urlApi = `https://api.unsplash.com/search/photos?page=1&query=${encodeURI(cidade)}&client_id=${key_unsplash}`;
  // Controle de erro
  try {
    // Acessa a api
    const resposta = await fetch(urlApi);
    // Verifica e informa o status code
    if (!resposta.ok) {
      throw new Error(`HTTP error! status: ${resposta.status}`);
    }
    // Obtém os dados da api
    const dados = await resposta.json();

    // Renderizar dados
    const url = dados.results[0].urls.regular;
    document.querySelector(".fundo").style.backgroundImage = `url('${url}')`;
    document.querySelector(".fundo").style.backgroundSize = `cover`;
  } catch (error) {
    console.error("Erro ao obter dados:", error);
  }
}

// Acessa a api Open Weather quando clica em buscar
async function getApiOpenWeather(cidade) {
  const urlApi = `${url_openweather}?q=${encodeURI(cidade)}&appid=${key_openweather}&units=metric&lang=pt_br`;
  // Controle de erro
  try {
    // Acessa a api
    const resposta = await fetch(urlApi);
    // Verifica e informa o status code
    if (!resposta.ok) {
      throw new Error(`HTTP error! status: ${resposta.status}`);
    }
    // Obtém os dados da api
    const dados = await resposta.json();

    // Renderizar dados
    renderizarDados(dados);
  } catch (error) {
    console.error("Erro ao obter dados:", error);
  }
}

// Acessa a api Open Weather quando a página carrega
// Pega a latitude e longitudo do navegador
async function getApiReverseGeocoding(lat, lon) {
  const urlApi = `${url_openweather}?lat=${lat}&lon=${lon}&appid=${key_openweather}&units=metric&lang=pt_br`;
  // Controle de erro
  try {
    // Acessa a api
    const resposta = await fetch(urlApi);
    // Verifica e informa o status code
    if (!resposta.ok) {
      throw new Error(`HTTP error! status: ${resposta.status}`);
    }
    // Obtém os dados da api
    const dados = await resposta.json();

    // Renderizar dados
    renderizarDados(dados);
    getApiUnsplash(dados.name);
  } catch (error) {
    console.error("Erro ao obter dados:", error);
  }
}

// Obter localização do navegador
function getLocationCurrent() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      getApiReverseGeocoding(lat, lon);
    });
  } else {
    console.log("Alguma coisa não deu certo...");
  }
}

// Evento que busca a cidade
function buscarCidadeSubmit() {
  const cidade = getInputValue();
  getApiUnsplash(cidade);
  getApiOpenWeather(cidade);
}

// Obtém o valor do input
function getInputValue() {
  const formInputValue = document.querySelector(".form__input").value;
  return formInputValue;
}

// Exibe uma mensagem na tela
function mostrarMensagem(valor) {
  const resultado = valor >= 25 ? "Uma praia cairia bem." : valor >= 20 ? "Está esquentando, não acha?" : valor >= 15 ? "Está bem agradável." : valor >= 10 ? "Que geeelo! Que frio!" : valor >= 5 ? "Extremamente frio" : "Como está a temperatura?";
  document.querySelector(".dica h4").innerText = resultado;
}

// Renderiza os dados da API na tela
function renderizarDados(dados) {
  // Dados da api
  const dadosApi = {
    temperatura: dados.main.temp,
    temperaturaMax: dados.main.temp_max,
    temperaturaMin: dados.main.temp_min,
    umidade: dados.main.humidity,
    cidade: dados.name,
    pais: dados.sys.country,
    sensacaoTermica: dados.main.feels_like,
    vento: dados.wind.speed,
    descricao: dados.weather[0].description,
    icone: dados.weather[0].icon,
  };

  // Elementos HTML
  document.querySelector(".cidade h1").innerHTML = `<i class="fa-solid fa-location-dot"></i> ${dadosApi.cidade}, ${dadosApi.pais}`;
  document.querySelector(".icone-maior").src = `https://openweathermap.org/payload/api/media/file/${dadosApi.icone}.png`;
  document.querySelector(".temperatura-destaque h2").innerHTML = `${Math.trunc(dadosApi.temperatura)} ºC`;
  document.querySelector(".temperatura-destaque p").innerHTML = `${dadosApi.descricao}`;
  document.querySelector(".temperatura__maxima div h3").innerHTML = `${Math.trunc(dadosApi.temperaturaMax)} ºC`;
  document.querySelector(".temperatura__minima div h3").innerHTML = `${Math.trunc(dadosApi.temperaturaMin)} ºC`;
  document.querySelector(".umidade .titulo").innerHTML = `${dadosApi.umidade} %`;
  document.querySelector(".vento .titulo").innerHTML = `${dadosApi.vento} km/h`;
  document.querySelector(".sensacao .titulo").innerHTML = `${Math.trunc(dadosApi.sensacaoTermica)} ºC`;

  // Mostrar mensagem na tela
  mostrarMensagem(Math.trunc(dadosApi.temperatura));
}

document.addEventListener("DOMContentLoaded", getLocationCurrent);
document.querySelector(".form__botao").addEventListener("click", buscarCidadeSubmit);
