import './home.css'
import { Link } from 'react-router-dom'
import { Logo } from '../../components/Logo'
import { Social } from '../../components/Social'
import { FaFacebook, FaInstagram, FaYoutube} from 'react-icons/fa'
import { useState, useEffect } from 'react'
import { getDocs, collection, orderBy, query, doc, getDoc } from 'firebase/firestore'
import { db } from '../../services/firebase'

export default function Home(){
    const [links, setLinks] = useState([]);
    const [socialLinks, setSocialLinks] = useState({});

    useEffect(() => {
        function loadLinks(){
            const linksRef = collection(db, "links")
            const queryRef = query(linksRef, orderBy("created", "asc"))
            
            getDocs(queryRef)
            .then((snapshot) => {
                let lista = [];
                snapshot.forEach((doc) => {
                    lista.push({
                        id: doc.id,
                        name: doc.data().name,
                        url: doc.data().url,
                        bg: doc.data().bg,
                        color: doc.data().color
                    })
                })
                setLinks(lista);
            })
        }
        loadLinks();

    }, [])

    useEffect(() => {
        function loadSocialLinks(){
            const docRef = doc(db, "social", "link")

            getDoc(docRef)
            .then((snapshot) => {
                if(snapshot.data() !== undefined){
                    setSocialLinks({
                        Facebook: snapshot.data().Facebook,
                        Instagram: snapshot.data().Instagram,
                        Youtube: snapshot.data().Youtube,
                    })
                }
            })

        }
        loadSocialLinks();

    }, [])

    return(
        <div className="home-container">
            <Link to = "/login"><button className='button-login'>Login</button></Link>
            <Logo/>
            <span>Veja meus links 👇</span>

            <main className="links">
                
                {links.map((item) => (
                <section key={item.id} className="link-area" style={{backgroundColor: item.bg}}>
                     <a target="blank" href={item.url}>
                         <p style={{color: item.color}} className="link-text">{item.name}</p>
                     </a>
                 </section>
                ))}

           {links.length !== 0 && Object.keys(socialLinks).length > 0 && (
             <footer>  
             <Social url={socialLinks?.Facebook}>
                 <FaFacebook size={35} color="#FFF"/>
             </Social>

             <Social url={socialLinks?.Youtube}>
                 <FaYoutube size={35} color="#FFF"/>
             </Social>

             <Social url={socialLinks?.Instagram}>
                 <FaInstagram size={35} color="#FFF"/>
             </Social>
         </footer>
           )}

            </main>
        </div>
    )
}