import { useRef, useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom"
//pela atualização do react-dom invés de useHistory utilizamos useNavigate

export const Login = () => {
    const inputPasswordRef = useRef<HTMLInputElement>(null);

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const navigate = useNavigate();
    //const history = useHistory();

    // useEffect(() => {
    //     console.log(email)
    // }, [email]);
    
    // useEffect(() => {
    //     console.log(senha)
    // }, [senha]);

    // const emailLength = useMemo(() => {
    //     console.log("EXECUTOU")
    //     return email.length * 1000;
    // }, [email.length]);

    const handleEntrar = useCallback(() => {
        console.log(email)
        console.log(senha)
    }, [email, senha]);

    const handleClick = () => {
        navigate("/pagina-inicial")
    // history.push("/pagina-inicial")
    }
    return (
        <div>
            {/* <p>Quantidade de digitações x 1.000: {emailLength}</p> */}
            
            <div>
            <button onClick={handleClick}>Página inicial</button>
            </div>

            <div>
                <form>
                    <label>
                        <span>Email</span>
                        <input 
                        value={email}
                        onChange={evento => 
                        setEmail(evento.target.value)} 
                        onKeyDown={evento => evento.key === 'Enter' ? inputPasswordRef.current?.focus() : undefined} />
                    </label>


                    <label>
                        <span>Senha</span>
                        <input 
                        type="password" 
                        ref={inputPasswordRef} 
                        value={senha} 
                        onChange={evento => setSenha(evento.target.value)} />
                    </label>


                    <button type="button" onClick={handleEntrar}>
                        <p>Entrar</p>
                    </button>
                </form>
            </div>
        </div>
     
)}