import { client, checkError } from './client';


export async function getUser(){
  return client.auth.session() && client.auth.session().user;
}

export async function signUp(email, password){
  const response = await client.auth.signUp({ email, password });

  return response.user;
}

export async function signIn(email, password){
  const response = await client.auth.signIn({ email, password });

  return response.user;
}

export async function logout() {
  await client.auth.signOut();

  return window.location = '../';
}

export async function searchCards(search){
  const response = await fetch(`/.netlify/functions/hearthstone/?search=${search.toLowerCase()}`);

  const json = await response.json();

  return json;
}