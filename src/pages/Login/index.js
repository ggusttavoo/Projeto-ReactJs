import './login.css'
import { useState } from 'react'
import { auth } from '../../services/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

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
            toast.success("Bem-vindo de Volta!")
            navigate("/admin", { replace: true })
        })
        .catch(() => {
            toast.error("Erro ao tentar o Login!")
            console.log("ERRO AO FAZER LOGIN")
        })

    }
    return(
        <div className='corpo'>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
        <div className='login'>
            <div className='avatar'>
                <img src='https://relvado.rs.gov.br/site/custom/default/img/no-avatar.png' alt=""/>
            </div>
            <h2>Login</h2>
            <h3>Bem-vindo de Volta!</h3>
                <form className="login-form" onSubmit={handleLogin}>
                    <div className='textbox'>
                        <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                        <span className='material-symbols-outlined'>account_circle</span>
                    </div>
                    <div className='textbox'>
                        <input type="password" placeholder="Senha" autoComplete="on" value={password} onChange={(e)=> setPassword(e.target.value)}/>
                        <span className='material-symbols-outlined'>lock</span>
                    </div>
                    <button type="submit">Acessar</button>
                    <p className='cadastro'>Ainda não possui cadastro? <a href='https://www.linkedin.com/login/pt' target="blank">Cadastrar-se</a></p>
                </form>
        </div>
        </div>
    )
}