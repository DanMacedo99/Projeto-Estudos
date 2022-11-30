import { useRef } from "react"
import { Link } from "react-router-dom"

export const Dashboard = () => {
    const counterRef = useRef({ counter: 0 })
    return (
        <div>
            <p>contador: {counterRef.current.counter}.</p>
            <p>Dê um click, e veja no console</p>
            <button onClick={() => counterRef.current.counter + 2}>
                Log UseRef
            </button>
            <button onClick={() => console.log(counterRef.current.counter)}>
                soma
            </button><br></br>

            
            

            <Link to="/entrar">Login</Link>
            <p>Dashboard</p>
        </div>
    )
}