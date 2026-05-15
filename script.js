import { KEY_API_OPENWEATHER } from "./config.js";

const cidade = "Rio de Janeiro";
const urlApi = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(cidade)}&appid=${KEY_API_OPENWEATHER}`;

const respostaApi = fetch(urlApi)
  .then((res) => res.json())
  .then((dados) =>
    console.log({
      temp: dados.main.temp,
      max: dados.main.temp_max,
      min: dados.main.temp_min,
      umidity: dados.main.humidity,
      name: dados.name,
      dt: dados,
    }),
  )
  .catch((err) => console.error("Erro: ", err));

console.log(respostaApi);

// Obtém o valor do input
function obterInputValue() {}

// Evento que busca a cidade
function buscarCidadeSubmit() {}

// Acessa API
function getApiOpenWeather() {}

// Exibe um alerta na tela
function mostrarMensagem(mensagem) {}

// Renderiza os dados da API na tela
function renderizarDados(json) {}

/*

    [ ] Acessar api
    [ ] Obter a localização (cidade) do dispositivo.
    [ ] Converter valores decimais para uma casa decimal.
    [ ] Transformar "." em ","

*/
