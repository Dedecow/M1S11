import axios from 'axios'; //Biblioteca para fazer requisições

const api = axios.create({ //Serviço criado para tornar a url da api como principal
  baseURL: "https://api.github.com/"
});

export { api };