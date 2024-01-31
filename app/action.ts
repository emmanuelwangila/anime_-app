"use server";

export const fetchAnimation = async (page: number) => {
  const response = await fetch(
    `https://shikimori.one/api/animes?page=1${page}&limit=8&order=popularity`
  );

  const data = await response.json();

  console.log(data);
  return data;
};
