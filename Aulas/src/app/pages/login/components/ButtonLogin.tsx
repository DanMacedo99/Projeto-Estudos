
import { useUsuarioLogado } from "../../../shared/hooks";

interface IButtonLoginProps {
    onClick: () => void;
    type?: "button" | "submit" | "reset"
    children: React.ReactNode;
//na nova atualização do react 18 temos que declarar o children como props
}

export const ButtonLogin: React.FC<IButtonLoginProps> = ({type, onClick, children}) => {
    
    // const  {nomeDoUsuario} = useUsuarioLogado();
    
    return(
    <button type={type} onClick={onClick}>
       {children}
    </button>
    )
}