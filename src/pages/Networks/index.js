import './networks.css'
import { useState, useEffect } from 'react'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { MdAddLink} from 'react-icons/md'
import { db } from '../../services/firebase'
import { setDoc, doc, getDoc } from 'firebase/firestore'
import { toast } from 'react-toastify'

export default function Networks(){
    const [Facebook, setFacebook] = useState("");
    const [Instagram, setInstagram] = useState("");
    const [Youtube, setYoutube] = useState("");

    useEffect(() => {
        function loadLinks(){
            const docRef = doc(db, "social", "link")
            getDoc(docRef)
            .then((snapshot) => {
                if(snapshot.data() !== undefined){
                    setFacebook(snapshot.data().Facebook)
                    setInstagram(snapshot.data().Instagram)
                    setYoutube(snapshot.data().Youtube)
                }
            })
        }
        loadLinks();

    }, [])

    function handleSave(e){
        e.preventDefault();
        
        setDoc(doc(db, "social", "link"),{
            Facebook: Facebook,
            Youtube: Youtube,
            Instagram: Instagram
        })
        .then(() => {
            console.log("url salvas com sucesso!!")
            toast.success("url salvas com sucesso!!")
        })
        .catch((error) => {
            console.log("ERRO AO SALVAR" + error)
            toast.error("ERRO AO SALVAR")
        })
    }

    return(
        <div className="admin-container">
            <Header/>
           <h1 className="title-social">Suas redes sociais</h1>

           <form className="form" onSubmit={handleSave}>

                <label className="label">Link do Facebook</label>
                <Input
                value = {Facebook}
                onChange = {(e) => setFacebook(e.target.value)}
                placeholder = "Digite aqui a url"
                />
                <label className="label">Link do Instagram</label>
                <Input
                value = {Instagram}
                onChange = {(e) => setInstagram(e.target.value)}
                placeholder = "Digite aqui a url"
                />
                <label className="label">Link do Youtube</label>
                <Input
                value = {Youtube}
                onChange = {(e) => setYoutube(e.target.value)}
                placeholder = "Digite aqui a url"
                />

                <button type="submit" className="btn-register">
                    Salvar Links <MdAddLink siza={24} color="white"/>
                </button>

           </form>
        </div>
    )
}