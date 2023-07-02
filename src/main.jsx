import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Auth0Provider } from "@auth0/auth0-react";
import "./index.css"

const domain = import.meta.env.VITE_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      //* Dominio de Auth0
      domain={domain}
      //* ClientID de Auth0
      clientId={clientId}
      //* URL a la que nos redireccionaremos al loguearse
      authorizationParams={{
        redirect_uri: location.origin,
      }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
