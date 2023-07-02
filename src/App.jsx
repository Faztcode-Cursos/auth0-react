import { LoginButton } from "./components/LoginButton";
import { Profile } from "./components/Profile";
import { LogoutButton } from "./components/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";
import "./App.css";

function App() {
  //* "isLoading" es un boolean que si es true significa que está cargando el usuario sino es false 
  const { isAuthenticated, isLoading } = useAuth0();
  
  return (
    <div className="App">
      {isLoading && <h1>Loading...</h1>}

      <h1>Application</h1>

      {isAuthenticated ? <LogoutButton /> : <LoginButton />}

      <Profile />
    </div>
  );
}

export default App;
