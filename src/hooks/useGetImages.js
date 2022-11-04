const BASE_URL = 'https://api.pexels.com/v1/search';

const getRandomPage = () => Math.round(Math.random() * (10 - 1) + 1);

const useGetImages = () => {
  const buildUrl = () => {
    let url = new URL('https://api.pexels.com/v1/search');

    url.search = new URLSearchParams({
      query: 'nature', // TODO: change to a variable
      orientation: 'square',
      size: 'small',
      per_page: 2, // TODO: change to a variable
      page: getRandomPage()
    });

    return url;
  };

  fetch(buildUrl(), {
    headers: {
      Authorization: process.env.REACT_APP_AUTH_KEY
    }
  });
};

export default useGetImages;
