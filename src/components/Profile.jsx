import { useAuth0 } from "@auth0/auth0-react";

export const Profile = () => {
  //* "user" guarda toda la info del usuario autenticado.
  //* "isAuthenticated" es un boolean que nos dice si está autenticado o no el usuario.
  const { user, isAuthenticated } = useAuth0();

  return (
    <div>
      {isAuthenticated && (
        <div>
          <img src={user.picture} alt={user.name} />
          <h2>{user.name}</h2>
          <p>{user.email}</p>

          <pre>{JSON.stringify(user, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};
