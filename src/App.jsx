import React from "react";
import KopekListe from "./KopekListe";

function App() {
  const[adet, adetGuncelle] = React.useState(3)
  const metinKutusu =React.useRef()
   const fotoGetir=()=>{
    adetGuncelle(metinKutusu.current.value)
    
   }
  return (
    <>
      <div>
        <input ref={metinKutusu} type="text" />
        <button onClick={fotoGetir}>Foto Getir</button>
      </div>
      <KopekListe fotoSayisi={adet} />
    </>
  );
}

export default App;
