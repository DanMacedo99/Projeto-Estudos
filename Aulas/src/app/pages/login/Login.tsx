import { useState } from "react";
import { useNavigate } from "react-router-dom"
//pela atualização do react-dom invés de useHistory utilizamos useNavigate
export const Login = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const navigate = useNavigate();
    //const history = useHistory();

    const handleEntrar = () => {
        console.log(email)
        console.log(senha)
    }
    const handleClick = () => {
        navigate("/pagina-inicial")
    // history.push("/pagina-inicial")
    }
    return (
        <body>
            <div>
            <button onClick={handleClick}>Página inicial</button>
            </div>

            <div>
                <form>
                    <label>
                        <span>Email</span>
                        <input value={email} onChange={evento => setEmail(evento.target.value)}/>
                    </label>


                    <label>
                        <span>Senha</span>
                        <input type="password" value={senha} onChange={evento => setSenha(evento.target.value)} />
                    </label>


                    <button type="button" onClick={handleEntrar}>
                        <p>Entrar</p>
                    </button>
                </form>
            </div>
        </body>
     
)}