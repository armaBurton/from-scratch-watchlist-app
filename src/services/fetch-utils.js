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

export async function addToOwnage(card){
  const response = await client
    .from(`hearthstone`)
    .insert(card);

  return checkError(response);
}

export async function getWant(){
  const response = await client
    .from(`hearthstone`)
    .select()
    .order('id');
  
  return checkError(response);
}

export async function getOwnage(){
  const response = await client
    .from(`hearthstone`)
    .select()
    .order(`id`);

  return checkError(response);
}

export async function updateOwnage(dbfId){
  const response = await client
    .from(`hearthstone`)
    .update({ 
      is_owned: true,
      class_name : 'is-owned'
    })
    .match({ dbfId })
    .order(`id`);

  return checkError(response);
} 