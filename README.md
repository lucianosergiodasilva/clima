# 🌤️ Weather App - Estudo de Caso de API

Este projeto foi desenvolvido como um caso de estudo prático para o consumo de APIs no ecossistema do desenvolvimento frontend, com foco em manipulação de requisições assíncronas e atualização dinâmica da interface de usuário (DOM).

## 📌 Sobre o Projeto

O objetivo principal deste projeto é aplicar e consolidar conhecimentos sobre o consumo de APIs REST. A aplicação realiza a busca de informações climáticas em tempo real para uma cidade informada pelo usuário e adapta a interface visual de forma dinâmica com base nos dados retornados.

## ⚙️ Como o Projeto Funciona

O funcionamento da aplicação baseia-se no fluxo simples de entrada e resposta:
1. O usuário digita o nome de uma cidade no campo de busca.
2. A aplicação realiza uma requisição para a API do **OpenWeather** para obter os dados meteorológicos atuais (temperatura, umidade, vento, condições climáticas, etc.).
3. Em paralelo, é feita uma requisição para a API do **Unsplash** utilizando o nome da cidade como palavra-chave para buscar uma imagem de fundo correspondente à localidade.
4. A interface é atualizada dinamicamente: o background da página muda para a foto da cidade e uma mensagem personalizada/simpática é exibida na parte inferior da tela, variando de acordo com a temperatura atual do local.
5. Quando a página é carregada, o navegador pedirá sua permissão para acessar sua localização e informar os dados climáticos de forma precisa.

---

## 📸 Demonstração

Aqui está o visual atual da aplicação com base nos resultados obtidos:

<img width="1895" height="926" alt="clima" src="https://github.com/user-attachments/assets/02914788-0cf1-4784-ac92-b43e41a41178" />


---

## 🛠️ Tecnologias Utilizadas

O projeto foi construído utilizando tecnologias web fundamentais, sem dependência de frameworks complexos, focando na solidez do código nativo:

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black)

**APIs Consumidas:**
* [OpenWeather API](https://openweathermap.org/) - Para consulta de dados meteorológicos.
* [Unsplash API](https://unsplash.com/developers) - Para obtenção de imagens de fundo dinâmicas.

---

## 🔗 Link do Projeto

* 🚀 **Visualizar o projeto online:** https://lucianosergiodasilva.github.io/clima.
