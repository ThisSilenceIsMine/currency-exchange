import axios from 'axios';

const api = axios.create({ baseURL: 'https://api.exchangeratesapi.io' });

export const getRate = async (base: string, to: string) => {
  const { data } = await api.get(`/latest?base=${base}&symbols=${to}`);

  if (!data) {
    throw new Error('Request error! Body not defined');
  }
  return data.rates[to];
};
