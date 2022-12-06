import { useRef } from "react"
import { Link } from "react-router-dom"
import { useUsuarioLogado } from "../../shared/hooks"

export const Dashboard = () => {

    const counterRef = useRef({ counter: 0 })

    const  {nomeDoUsuario, logout} = useUsuarioLogado();

    return (
        <div>
            <Link to="/entrar">Login</Link>
            <p>Dashboard</p>
            <p>{nomeDoUsuario}</p>

            <p>contador: {counterRef.current.counter}.</p>
            
            <p>Dê um click, e veja no console</p>

            <button onClick={logout}>log</button>
            {/* <button onClick={() => counterRef.current.counter + 2}>
                Log UseRef
            </button> */}
            
            {/* <button onClick={() => console.log(counterRef.current.counter)}>
                soma
            </button> */}

            
            

        </div>
    )
}