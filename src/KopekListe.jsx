import React from "react";

function KopekListe({fotoSayisi}) {
  const [kopekFotolari, kopekFotoGuncelle] = React.useState(null);

  React.useEffect(() => {
    fetch(`https://dog.ceo/api/breeds/image/random/${fotoSayisi}`)
      .then((sonuc) => sonuc.json())
      // 4. Setting *dogImage* to the image url that we received from the response above
      .then((veri) => kopekFotoGuncelle(veri.message));
  }, [fotoSayisi]);
  return (
    <>
      <div>
        {kopekFotolari &&
          kopekFotolari.map((gorselUrl) => 
            <img
              key={gorselUrl}
              width={"200px"}
              height={"200px"}
              src={gorselUrl}
              alt=""
            ></img>
          )}
      </div>
    </>
  );
}
export default KopekListe;
