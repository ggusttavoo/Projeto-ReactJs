import './logo.css'
import { Link } from 'react-router-dom'

export function Logo(){
    return(
        <Link to="/">    
        <h1 className="Logo">Somen<span className="LogoText">sari</span></h1>
        </Link>
        )
} 