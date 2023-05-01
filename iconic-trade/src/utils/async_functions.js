import { endPoints } from "./urls";
import Router from "next/router";

const authenticateUser = async (url, data, method) => {
  try {
    const request = await fetch(url, {
      method: method,
      headers: {
      "Content-Type": "application/json",
    },
      body: JSON.stringify(data)
    });
    const user = await request.json();
    localStorage.setItem('user', JSON.stringify({ 'token': user.authToken, loggedIn: true }));
    Router.push("/dashboard")
  } catch (error) {
    console.log(error);
  }
}

const { createAccount, login, googleLogin } = endPoints;


export const logOut = () => {
  localStorage.removeItem('user');
  Router.push("/sign-in");
}

export const auth = (type, data) => {
  let url;
  switch (type) { 
    case 'create_account':
      url = createAccount.link
      authenticateUser(url, data, createAccount.method);
      break;
    
    case 'login':
      url = login.link
      authenticateUser(url, data, login.method);
      break;
    
    // case 'google_login':
    //   url = ''
    //   authenticateUser(url, data);
    //   break;
    
    // default:
    //   url = ''
    //   authenticateUser(url, data);
    //   break;
  }
}

export const makeRequest = async (url, data = {}, method) => {
  try {
    const token = JSON.parse(localStorage.getItem('user')).token;
    if (!token) {
      Router.push("/sign-in")
      return;
    }
    const temp = method.toLowerCase() === 'get' ? {
      method: method,
      headers: {
        "Content-Type": "application/json",
        "x-access-token": JSON.parse(localStorage.getItem('user')).token
      }
    } : {
      method: method,
      headers: {
        "Content-Type": "application/json",
        "x-access-token": JSON.parse(localStorage.getItem('user')).token
      },
      body: JSON.stringify(data)
    };
    const request = await fetch(url, temp );
    const dt = await request.json();
    if (dt.status === 401) {
      Router.push("/sign-in")
      return;
    }
    return data;
  } catch (error) {
    console.log(error);
  }
}