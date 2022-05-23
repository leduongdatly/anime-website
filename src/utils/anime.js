export const getAnimes = (animes, count) => {
  //   const max = animes.length - count;
  //   const min = 0;
  //   const start = Math.floor(Math.random() * (max - min) + min);
  const start = 0;
  return animes.slice(start, start + count);
};
