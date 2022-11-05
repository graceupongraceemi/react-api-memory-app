import Background from './components/Background';

import useGetImages from './hooks/useGetImages';

function App() {
  const images = useGetImages();

  console.log({ images });

  return (
    <>
      <Background />
      <h1>Memory Game</h1>
    </>
  );
}

export default App;

// const buildUrl = () => {
//   let url = new URL('https://api.pexels.com/v1/search');

//   url.search = new URLSearchParams({
//     query: 'nature', // TODO: change to a variable
//     orientation: 'square',
//     size: 'small',
//     per_page: 2, // TODO: change to a variable
//     page: getRandomPage()
//   });

//   return url;
// };

// fetch(buildUrl(), {
//   headers: {
//     Authorization: process.env.REACT_APP_AUTH_KEY
//   }
