import { useEffect, useState } from 'react';

// const BASE_URL = 'https://api.pexels.com/v1/search';

const getRandomPage = () => Math.round(Math.random() * (10 - 1) + 1);

const useGetImages = (gameOptions) => {
  const [images, setImages] = useState([]);

  const buildUrl = () => {
    let url = new URL('https://api.pexels.com/v1/search');

    url.search = new URLSearchParams({
      query: gameOptions.category,
      size: 'small',
      per_page: gameOptions.cardsCount / 2,
      page: getRandomPage()
    });

    return url;
  };

  const fetchPics = () => {
    fetch(buildUrl(), {
      headers: {
        Authorization: process.env.REACT_APP_AUTH_KEY
      }
    })
      .then((data) => data.json())
      .then((data) => setImages(data.photos)); // Give data which is photo
  };

  useEffect(() => {
    if (!gameOptions) return;
    fetchPics();
  }, [gameOptions]);

  return images;
};

export default useGetImages;
