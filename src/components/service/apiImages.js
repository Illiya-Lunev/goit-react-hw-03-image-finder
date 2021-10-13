
  const BASE_URL = 'https://pixabay.com/api/';
  const API_KEY = '22951340-683a641f2fde08e18261bbe3d';
  
  function fetchImages(query,  page = 1) {
    return fetch(
      `${BASE_URL}/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    ).then((response) => {
      if (response.ok) {
        return response.json();
      }
  
      return Promise.reject(new Error("Oops, something went wrong!"));
    });
  }
  
  const api = { fetchImages };
  
  export default api;

