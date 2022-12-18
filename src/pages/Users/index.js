import './users.css'
import { Header } from '../../components/Header'
import { Logo } from '../../components/Logo'

export default function User(){
    return(
    <div className="admin-container">
        <Header/>
        <Logo/>
        <h3>página de usuários</h3>
    </div>
    )
}