import './logo.css'
import { Link } from 'react-router-dom'

export function Logo(){
    return(
        <Link to="/">    
        <h1 className="Logo">MuriloG<span className="LogoText">Somensari</span></h1>
        </Link>
        )
} 