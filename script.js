import { KEY_API_OPENWEATHER } from "./config.js";

const cidade = "Rio de Janeiro";

// Acessa a api e obtém os dados
const getApiOpenWeather = async () => {
  const urlApi = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(cidade)}&appid=${KEY_API_OPENWEATHER}&units=metric&lang=pt_br`;
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
};

// const respostaApi = fetch(urlApi)
//   .then((res) => res.json())
//   .then((dados) =>
//     console.log({
//       temperatura: dados.main.temp,
//       temperaturaMax: dados.main.temp_max,
//       temperaturaMin: dados.main.temp_min,
//       umidade: dados.main.humidity,
//       cidade: dados.name,
//       sensacaoTermica: dados.main.feels_like,
//       vento: dados.wind.speed,
//       clima: {
//         tempo: dados.weather[0].main,
//         descricao: dados.weather[0].description,
//       },
//     }),
//   )
//   .catch((err) => console.error("Erro: ", err));

console.log(getApiOpenWeather());

// Obtém o valor do input
function obterInputValue() {}

// Evento que busca a cidade
function buscarCidadeSubmit() {}

// Exibe um alerta na tela
function mostrarMensagem(mensagem) {}

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
  document.querySelector(".icone-maior").src = `https://openweathermap.org${dadosApi.icone}@2x.png`;
  document.querySelector(".temperatura-destaque h2").innerHTML = `${Math.trunc(dadosApi.temperatura)} ºC`;
  document.querySelector(".temperatura-destaque p").innerHTML = `${dadosApi.descricao}`;
  document.querySelector(".temperatura__maxima div h3").innerHTML = `${Math.trunc(dadosApi.temperaturaMax)} ºC`;
  document.querySelector(".temperatura__minima div h3").innerHTML = `${Math.trunc(dadosApi.temperaturaMin)} ºC`;
  document.querySelector(".umidade h3").innerHTML = `${dadosApi.umidade}%`;
  document.querySelector(".vento h3").innerHTML = `${dadosApi.vento}km/h`;
  document.querySelector(".nuvem h4").innerHTML = `${Math.trunc(dadosApi.sensacaoTermica)} ºC`;
}

/*

  NÃO ESTOU CONSEGUINDO PEGAR O ÍCONE DA API


    [x] Acessar api
    [ ] Obter a localização (cidade) do dispositivo.
    [x] Converter valores decimais para uma casa decimal.
    [ ] Pegar o ícone da api
    [ ] Criar uma verificação para a dica, baseado no horário e clima
    [ ] Inserir as temperaturas para diferentes horarios do dia (6h, 18h e 00h)


*/
