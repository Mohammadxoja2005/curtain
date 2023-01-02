// import { FC } from 'react'
// import { GoogleMap as Map, useLoadScript, Marker } from '@react-google-maps/api';

// const GOOGLEMAPS: FC = () => {
//     const mapContainerStyle = {
//         height: "500px",
//     }

//     const center = {
//         lat: 41.260808,
//         lng: 69.252697
//     }

//     const positionMarker = {
//         lat: 41.260808,
//         lng: 69.252697
//     }

//     const libraries: any = ["places"]

//     const { isLoaded, loadError } = useLoadScript({
//         googleMapsApiKey: "AIzaSyAKEB6ygEDvfncdSbDsOH-Q_T4vzhL2deY",
//         libraries,
//     })

//     if (loadError) return "there is problem with google api";
//     if (!isLoaded) return "google maps is loading";

//     return (
//         <Map
//             mapContainerStyle={mapContainerStyle}
//             zoom={18}
//             center={center}
//         >

//             <Marker position={positionMarker} />

//         </Map>
//     )
// }

// export default GOOGLEMAPS;

const GOOGLEMAPS = () => {
  return(
    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5991.092795594793!2d69.24864!3d41.340476!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf4ec663a6a89568a!2zNDHCsDIwJzI1LjciTiA2OcKwMTQnNTUuMSJF!5e0!3m2!1sru!2s!4v1672683557229!5m2!1sru!2s" style={{width: "100%", height: "500px", boxSizing: "border-box"}}></iframe>
  )
} 

export default GOOGLEMAPS; 
