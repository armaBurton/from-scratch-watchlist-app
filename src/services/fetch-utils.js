import { client, checkError } from './client';


export async function getUser(){
  return client.auth.session() && client.auth.session().user;
}

export async function signUp(email, password){
  const response = await client.auth.signUp({ email, password });

  return response.user;
}

export async function signIn(email, password){
  console.log(`|| email, password >`, email, password);
  const response = await client.auth.signIn({ email, password });
  console.log(`|| response >`, response);
  return response.user;
}

export async function logout() {
  await client.auth.signOut();

  return window.location = '../';
}