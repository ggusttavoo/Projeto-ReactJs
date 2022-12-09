import { useState } from 'react'
import './login.css'
import { Logo } from '../../components/Logo'
import { auth } from '../../services/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import { Input } from '../../components/Input'

export default function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    function handleLogin(e){
        e.preventDefault();

        if(email === '' || password === ''){
            alert("Preencha todos os campos!")
            return;
        }
        signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            toast.success("Acesso Concedido")
            navigate("/admin", { replace: true })
        })
        .catch(() => {
            toast.error("Erro ao tentar o Login!")
            console.log("ERRO AO FAZER LOGIN")
        })

    }
    return(
        <div className="login-container" onSubmit={handleLogin}>
            <Logo/>

            <form className="form">
                <Input type="email" placeholder="Digite seu E-mail" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <Input type="password" placeholder="Senha" autoComplete="on" value={password} onChange={(e)=> setPassword(e.target.value)}/>
                <button type="submit">Acessar</button>
            </form>
        </div>
    )
}