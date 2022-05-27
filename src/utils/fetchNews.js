import { API_KEY } from '../config/env';

const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${API_KEY}`;

// export async function getIndiaNews() {
// 	let result = await fetch(url).then(response => response.json());

// 	return result.articles;
// }

export const getIndiaNews = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log('getIndiaNews',data)
      return data;
    } catch (e) {
      console.log(e);
    }
  };