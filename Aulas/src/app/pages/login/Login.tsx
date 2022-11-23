import { useNavigate } from "react-router-dom"
//pela atualização do react-dom invés de useHistory utilizamos useNavigate
export const Login = () => {

    const navigate = useNavigate();
    //const history = useHistory();
    const handleClick = () => {
        navigate("/pagina-inicial")
    // history.push("/pagina-inicial")
    }
    return (
        <div>
            <button onClick={handleClick}>Página inicial</button>
            <p>Login</p>
        </div>
    )
}