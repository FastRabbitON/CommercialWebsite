import { MapContainer, TileLayer, Circle, Tooltip } from 'react-leaflet'

import "./ContactPageStyle.css"

const ContactPage = () => {

    const phone = () => {
        window.location = 'tel:601763761';
    }

    const mail = () => {
        window.location = "mailto:pawelbiurokraft@gmail.com";
    }

    const fixly = () => {
        window.open("https://fixly.pl/profil/SuOEKFz8", '_blank').focus();
    }

    const facebook = () => {
        window.open("https://www.facebook.com/MebleKraft", '_blank').focus();
    }



    return (

        <div>

            <div className="ContactBackground">
                <div className="Background"></div>
            </div>

            <div className="ContactContainer">

                <div className="ContactLeft">

                    <MapContainer className="Map" center={[52.40, 16.91]} zoom={9} scrollWheelZoom={true} >
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Circle
                            center={[52.40, 16.91]} pathOptions={{ color: "green", fillColor: 'green' }} radius={25000} >
                            <Tooltip className="MapDescription">TU DZIAŁAMY !</Tooltip>
                        </Circle>
                    </MapContainer>

                </div>



                <div className="ContactRight">

                    <div className="RightTitle"> Zapraszamy do kontaktu:</div>
                    <div className="RightList">

                        <p onClick={() => phone()}> <img src={require("./Images/ico-phone.png")} alt='ico-phone' /> 601 763 761</p>
                        <p onClick={() => mail()}> <img src={require("./Images/ico-gmail.png")} alt='ico-gmail' /> pawelbiurokraft@gmail.com</p>
                        <p onClick={() => facebook()}> <img src={require("./Images/ico-fb.png")} alt='ico-fb' /> www.facebook.com/MebleKraft</p>
                        <p onClick={() => fixly()}> <img src={require("./Images/ico-fixly.png")} alt='ico-fixly' /> www.fixly.pl/profil/meblekraft</p>

                    </div>

                </div>

            </div>





        </div>
    );
};

export default ContactPage