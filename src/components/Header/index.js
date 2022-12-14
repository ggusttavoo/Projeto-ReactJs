import './header.css'
import { BiLogOut } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { auth } from '../../services/firebase'
import { signOut } from 'firebase/auth'

export function Header(){
    async function handleLogout(){
        await signOut(auth)
    }

    return(
        <header className="admin-header">
            <nav className="nav-header">
                <Link to = "/"> <button onClick={handleLogout}><BiLogOut size={28} color="#D82629"/></button> </Link>
                <Link to="/admin"> Links </Link>
                <Link to="/admin/social"> Redes Sociais </Link>
                <Link to="/admin/user"> Usuários </Link>
            </nav>

        </header>
    )
}