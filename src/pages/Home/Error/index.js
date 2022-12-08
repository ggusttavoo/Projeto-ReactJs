import './error.css'
import { Link } from 'react-router-dom'
import { Logo } from '../../../components/Logo'

export default function Error(){
    return(
        <div className="error">
            <Logo/>
            <h1>Página não encontrada!</h1>
            <p>Está página que está procurando não existe</p>
        
        <Link className="Link" to="/">
        Voltar para Home
        </Link>
        </div>
    )
}