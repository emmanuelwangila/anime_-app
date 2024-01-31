"use server";

export const fetchAnimation = async () => {
  const response = await fetch("https:shikimori/.one/apis/animes");

  const data = await response.json();

  console.log(data);
  return data;
};
