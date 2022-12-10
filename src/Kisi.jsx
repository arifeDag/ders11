import React from "react";

function Kisi(ozellikler) {
    const [bilgi ,bilgiGuncelle]=React.useState(null)

    React.useEffect(() => {
        const fetchData = async () => {
          const response = await fetch(`https://swapi.dev/api/people/${ozellikler.id}/`);
          const newData = await response.json();
          bilgiGuncelle(newData);
        };
    
        fetchData();
      }, [ozellikler.id]);








    if (bilgi) {
        return <div>{bilgi.name}</div>;
      } else {
        return null;
      }
}
export default Kisi;