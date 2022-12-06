import { UsuarioLogadoProvider } from "./shared/contexts";
import { RoutesPath } from "./routes";

export const App = () => {
  return (
    <UsuarioLogadoProvider>
      <RoutesPath />
    </UsuarioLogadoProvider>
  );
}