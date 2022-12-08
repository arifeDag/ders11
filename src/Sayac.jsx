import React from "react";


function Sayac(ozellikler) {
  const [sayac, sayacGuncelle] = React.useState(ozellikler.baslangic);
  return (
    <>
      <div>
        {sayac}
        <button
          onClick={() => {
            sayacGuncelle(sayac + ozellikler.artim);
          }}
        >
          Artır
        </button>
      </div>
    </>
  );
}
export default Sayac;
