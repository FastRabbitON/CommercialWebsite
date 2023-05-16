import { Link } from "react-router-dom";
import "./ProductionPageStyle.css"

const ProductionPage = () => {

    return (

        <div>
            <div className="ProductionBackground">
                <div className="Background"></div>
            </div>

            <div className="ProductionContainer">
                <div className="ProductionContentBox">
                    <div className="ProductionContent">
                        <p>Szukasz profesjonalnej firmy stolarskiej, która zaprojektuje i wykonana dla Ciebie idealne meble na wymiar?</p>
                        <p> Mamy dla Ciebie dobrą wiadomość - Nasza firma specjalizuje się w tworzeniu kuchni, szaf i wszelkiego rodzaju mebli,
                            z wykorzystaniem materiałów najwyższej jakości i precyzyjnych maszyn.
                            Aby nasza oferta była jak najbardziej atrakcyjna dla Ciebie oferujemy <b>bezpłatne pomiary i wycenę</b>.</p>
                        <p>Działamy na terenie Poznania i okolic, więc nie zwlekaj -
                            <button className="LinkButton"> <Link className="Link" to="/kontakt"><b>skontaktuj się z nami</b></Link></button>i ciesz się wymarzonymi meblami już wkrótce!</p>
                    </div>

                </div>
            </div>

        </div>

    );


};

export default ProductionPage