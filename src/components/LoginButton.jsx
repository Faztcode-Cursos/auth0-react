import { useAuth0 } from "@auth0/auth0-react";

export const LoginButton = () => {
  //* loginWithRedirect() nos permite redireccionar al Login que genera Auth0
  const { loginWithRedirect } = useAuth0();

  return <button onClick={() => loginWithRedirect()}>Login</button>;
};
