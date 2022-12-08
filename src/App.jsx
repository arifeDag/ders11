import React from "react";
import Sayac from "./Sayac";

function App() {
    const [ kullanicilar, kullaniciGuncelle ] = React.useState([])
  


    function kullanicilariCek(){

    fetch("https://jsonplacaholder.typicode.com/users")
    .then(sonuc =>{
        return sonuc.json()
    })
    .then(veri =>{
        kullaniciGuncelle(veri)
    })
}
    React.useEffect( ()=>{
        kullanicilariCek()
    }, [])

    return (
       <>
        <div>
            {
                kullanicilar.length > 0 ?(
                    <ul>
                        {kullanicilar.map(kullanici =>{
                            return <li key={kullanici.id}>{kullanici.name}</li>
                        } )}
                    </ul>
                ):
                (
                    <p>Kayıt yok...</p>
                )
            }
            <Sayac artim ={1} baslangic={0}/>
            <Sayac artim ={10} baslangic={0}/>
            
        </div>
       
       </>
    )
    
} 

export default App;