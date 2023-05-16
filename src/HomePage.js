import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./HomePageStyle.css"


const HomePage = () => {

    const [ArrowNum, setArrowNum] = useState(1);
    const [hideImage, setHideImage] = useState(false);

    const DownCount = () => {
        setHideImage(true);
        setTimeout(() => {
            if (ArrowNum <= 1) {
                setArrowNum(16)
            }
            else {
                setArrowNum(ArrowNum - 1)
            }
            setHideImage(false);
        }, 300);
    };

    const UpCount = () => {
        setHideImage(true);
        setTimeout(() => {
            if (ArrowNum >= 16) {
                setArrowNum(1)
            }
            else {
                setArrowNum(ArrowNum + 1)
            }
            setHideImage(false);
        }, 300);
    };


    const [scrollPosition, setScrollPosition] = useState(0);

    window.addEventListener('scroll', () => {
        setScrollPosition(window.scrollY);
    });

    const AnchorUp = () => {
        window.location = `#Home`
    }
    const AnchorKuchnie = () => {
        window.location = `#Kuchnie`
    }
    const AnchorSzafy = () => {
        window.location = `#Szafy`
    }
    const AnchorŁazienki = () => {
        window.location = `#Lazienki`
    }
    const AnchorPoddasza = () => {
        window.location = `#Skosy`
    }




    const Best = [
        { id: "Besty1", src: require("./Images/Besty1.jpg"), alt: "Besty1" },
        { id: "Besty2", src: require("./Images/Besty2.jpg"), alt: "Besty2" },
        { id: "Besty3", src: require("./Images/Besty3.jpg"), alt: "Besty3" },
        { id: "Besty4", src: require("./Images/Besty4.jpg"), alt: "Besty4" },
        { id: "Besty5", src: require("./Images/Besty5.jpg"), alt: "Besty5" },
        { id: "Besty6", src: require("./Images/Besty6.jpg"), alt: "Besty6" },
        { id: "Besty7", src: require("./Images/Besty7.jpg"), alt: "Besty7" },
        { id: "Besty8", src: require("./Images/Besty8.jpg"), alt: "Besty8" },
        { id: "Bestyy9", src: require("./Images/Besty9.jpg"), alt: "Besty9" },
        { id: "Besty10", src: require("./Images/Besty10.jpg"), alt: "Besty10" },
        { id: "Besty11", src: require("./Images/Besty11.jpg"), alt: "Besty11" },
        { id: "Besty12", src: require("./Images/Besty12.jpg"), alt: "Besty12" },
        { id: "Besty13", src: require("./Images/Besty13.jpg"), alt: "Besty13" },
        { id: "Besty14", src: require("./Images/Besty14.jpg"), alt: "Besty14" },
        { id: "Besty15", src: require("./Images/Besty15.jpg"), alt: "Besty15" },
        { id: "Besty16", src: require("./Images/Besty16.jpg"), alt: "Besty16" }
    ];


    const Kuchnie = [
        { id: "Kuchnia1", src: require("./Images/Kuchnia1.jpg"), alt: "Kuchnia1" },
        { id: "Kuchnia2", src: require("./Images/Kuchnia2.jpg"), alt: "Kuchnia2" },
        { id: "Kuchnia3", src: require("./Images/Kuchnia3.jpg"), alt: "Kuchnia3" },
        { id: "Kuchnia4", src: require("./Images/Kuchnia4.jpg"), alt: "Kuchnia4" },
        { id: "Kuchnia5", src: require("./Images/Kuchnia5.jpg"), alt: "Kuchnia5" },
        { id: "Kuchnia6", src: require("./Images/Kuchnia6.jpg"), alt: "Kuchnia6" },
        { id: "Kuchnia7", src: require("./Images/Kuchnia7.jpg"), alt: "Kuchnia7" },
        { id: "Kuchnia8", src: require("./Images/Kuchnia8.jpg"), alt: "Kuchnia8" },
        { id: "Kuchnia9", src: require("./Images/Kuchnia9.jpg"), alt: "Kuchnia9" },
        { id: "Kuchnia10", src: require("./Images/Kuchnia10.jpg"), alt: "Kuchnia10" },
        { id: "Kuchnia11", src: require("./Images/Kuchnia11.jpg"), alt: "Kuchnia11" },
        { id: "Kuchnia12", src: require("./Images/Kuchnia12.jpg"), alt: "Kuchnia12" },
        { id: "Kuchnia13", src: require("./Images/Kuchnia13.jpg"), alt: "Kuchnia13" },
        { id: "Kuchnia14", src: require("./Images/Kuchnia14.jpg"), alt: "Kuchnia14" },
        { id: "Kuchnia15", src: require("./Images/Kuchnia15.jpg"), alt: "Kuchnia15" },
        { id: "Kuchnia16", src: require("./Images/Kuchnia16.jpg"), alt: "Kuchnia16" },
        { id: "Kuchnia17", src: require("./Images/Kuchnia17.jpg"), alt: "Kuchnia17" },
        { id: "Kuchnia18", src: require("./Images/Kuchnia18.jpg"), alt: "Kuchnia18" },
        { id: "Kuchnia19", src: require("./Images/Kuchnia19.jpg"), alt: "Kuchnia19" },
        { id: "Kuchnia20", src: require("./Images/Kuchnia20.jpg"), alt: "Kuchnia20" },
        { id: "Kuchnia21", src: require("./Images/Kuchnia21.jpg"), alt: "Kuchnia21" },
        { id: "Kuchnia22", src: require("./Images/Kuchnia22.jpg"), alt: "Kuchnia22" },
        { id: "Kuchnia23", src: require("./Images/Kuchnia23.jpg"), alt: "Kuchnia23" },
        { id: "Kuchnia24", src: require("./Images/Kuchnia24.jpg"), alt: "Kuchnia24" },
        { id: "Kuchnia25", src: require("./Images/Kuchnia25.jpg"), alt: "Kuchnia25" },
        { id: "Kuchnia26", src: require("./Images/Kuchnia26.jpg"), alt: "Kuchnia26" },
        { id: "Kuchnia27", src: require("./Images/Kuchnia27.jpg"), alt: "Kuchnia27" },
        { id: "Kuchnia28", src: require("./Images/Kuchnia28.jpg"), alt: "Kuchnia28" },
        { id: "Kuchnia29", src: require("./Images/Kuchnia29.jpg"), alt: "Kuchnia29" },
        { id: "Kuchnia30", src: require("./Images/Kuchnia30.jpg"), alt: "Kuchnia30" },
        { id: "Kuchnia31", src: require("./Images/Kuchnia31.jpg"), alt: "Kuchnia31" },
        { id: "Kuchnia32", src: require("./Images/Kuchnia32.jpg"), alt: "Kuchnia32" },
        { id: "Kuchnia33", src: require("./Images/Kuchnia33.jpg"), alt: "Kuchnia33" },
        { id: "Kuchnia34", src: require("./Images/Kuchnia34.jpg"), alt: "Kuchnia34" },
        { id: "Kuchnia35", src: require("./Images/Kuchnia35.jpg"), alt: "Kuchnia35" },
        { id: "Kuchnia36", src: require("./Images/Kuchnia36.jpg"), alt: "Kuchnia36" }
    ];



    const Szafy = [
        { id: "Szafa1", src: require("./Images/Szafa1.jpg"), alt: "Szafa1" },
        { id: "Szafa2", src: require("./Images/Szafa2.jpg"), alt: "Szafa2" },
        { id: "Szafa3", src: require("./Images/Szafa3.jpg"), alt: "Szafa3" },
        { id: "Szafa4", src: require("./Images/Szafa4.jpg"), alt: "Szafa4" },
        { id: "Szafa5", src: require("./Images/Szafa5.jpg"), alt: "Szafa5" },
        { id: "Szafa6", src: require("./Images/Szafa6.jpg"), alt: "Szafa6" },
        { id: "Szafa7", src: require("./Images/Szafa7.jpg"), alt: "Szafa7" },
        { id: "Szafa8", src: require("./Images/Szafa8.jpg"), alt: "Szafa8" },
        { id: "Szafa9", src: require("./Images/Szafa9.jpg"), alt: "Szafa9" },
        { id: "Szafa10", src: require("./Images/Szafa10.jpg"), alt: "Szafa10" },
        { id: "Szafa11", src: require("./Images/Szafa11.jpg"), alt: "Szafa11" },
        { id: "Szafa12", src: require("./Images/Szafa12.jpg"), alt: "Szafa12" },
        { id: "Szafa13", src: require("./Images/Szafa13.jpg"), alt: "Szafa13" },
        { id: "Szafa14", src: require("./Images/Szafa14.jpg"), alt: "Szafa14" },
        { id: "Szafa15", src: require("./Images/Szafa15.jpg"), alt: "Szafa15" },
        { id: "Szafa16", src: require("./Images/Szafa16.jpg"), alt: "Szafa16" },
        { id: "Szafa17", src: require("./Images/Szafa17.jpg"), alt: "Szafa17" },
        { id: "Szafa18", src: require("./Images/Szafa18.jpg"), alt: "Szafa18" },
        { id: "Szafa19", src: require("./Images/Szafa19.jpg"), alt: "Szafa19" },
        { id: "Szafa20", src: require("./Images/Szafa20.jpg"), alt: "Szafa20" },
        { id: "Szafa21", src: require("./Images/Szafa21.jpg"), alt: "Szafa21" },
        { id: "Szafa22", src: require("./Images/Szafa22.jpg"), alt: "Szafa22" },
        { id: "Szafa23", src: require("./Images/Szafa23.jpg"), alt: "Szafa23" },
        { id: "Szafa24", src: require("./Images/Szafa24.jpg"), alt: "Szafa24" },
        { id: "Szafa25", src: require("./Images/Szafa25.jpg"), alt: "Szafa25" },
        { id: "Szafa26", src: require("./Images/Szafa26.jpg"), alt: "Szafa26" },
        { id: "Szafa27", src: require("./Images/Szafa27.jpg"), alt: "Szafa27" },
        { id: "Szafa28", src: require("./Images/Szafa28.jpg"), alt: "Szafa28" },
        { id: "Szafa29", src: require("./Images/Szafa29.jpg"), alt: "Szafa29" },
        { id: "Szafa30", src: require("./Images/Szafa30.jpg"), alt: "Szafa30" },
        { id: "Szafa31", src: require("./Images/Szafa31.jpg"), alt: "Szafa31" },
        { id: "Szafa32", src: require("./Images/Szafa32.jpg"), alt: "Szafa32" },
        { id: "Szafa33", src: require("./Images/Szafa33.jpg"), alt: "Szafa33" },
        { id: "Szafa34", src: require("./Images/Szafa34.jpg"), alt: "Szafa34" },
        { id: "Szafa35", src: require("./Images/Szafa35.jpg"), alt: "Szafa35" },
        { id: "Szafa36", src: require("./Images/Szafa36.jpg"), alt: "Szafa36" },
        { id: "Szafa37", src: require("./Images/Szafa37.jpg"), alt: "Szafa37" },
        { id: "Szafa38", src: require("./Images/Szafa38.jpg"), alt: "Szafa38" },
        { id: "Szafa39", src: require("./Images/Szafa39.jpg"), alt: "Szafa39" },
        { id: "Szafa40", src: require("./Images/Szafa40.jpg"), alt: "Szafa40" },
        { id: "Szafa41", src: require("./Images/Szafa41.jpg"), alt: "Szafa41" },
        { id: "Szafa42", src: require("./Images/Szafa42.jpg"), alt: "Szafa42" },
        { id: "Szafa43", src: require("./Images/Szafa43.jpg"), alt: "Szafa43" },
        { id: "Szafa44", src: require("./Images/Szafa44.jpg"), alt: "Szafa44" }
    ];

    const Lazienki = [
        { id: "Lazienka1", src: require("./Images/Lazienka1.jpg"), alt: "Lazienka1" },
        { id: "Lazienka2", src: require("./Images/Lazienka2.jpg"), alt: "Lazienka2" },
        { id: "Lazienka3", src: require("./Images/Lazienka3.jpg"), alt: "Lazienka3" },
        { id: "Lazienka4", src: require("./Images/Lazienka4.jpg"), alt: "Lazienka4" },
        { id: "Lazienka5", src: require("./Images/Lazienka5.jpg"), alt: "Lazienka5" },
        { id: "Lazienka6", src: require("./Images/Lazienka6.jpg"), alt: "Lazienka6" },
        { id: "Lazienka7", src: require("./Images/Lazienka7.jpg"), alt: "Lazienka7" },
        { id: "Lazienka8", src: require("./Images/Lazienka8.jpg"), alt: "Lazienka8" },
        { id: "Lazienka9", src: require("./Images/Lazienka9.jpg"), alt: "Lazienka9" },
        { id: "Lazienka10", src: require("./Images/Lazienka10.jpg"), alt: "Lazienka10" },
        { id: "Lazienka11", src: require("./Images/Lazienka11.jpg"), alt: "Lazienka11" },
        { id: "Lazienka12", src: require("./Images/Lazienka12.jpg"), alt: "Lazienka12" },
        { id: "Lazienka13", src: require("./Images/Lazienka13.jpg"), alt: "Lazienka13" },
        { id: "Lazienka14", src: require("./Images/Lazienka14.jpg"), alt: "Lazienka14" },
        { id: "Lazienka15", src: require("./Images/Lazienka15.jpg"), alt: "Lazienka15" },
        { id: "Lazienka16", src: require("./Images/Lazienka16.jpg"), alt: "Lazienka16" },
        { id: "Lazienka17", src: require("./Images/Lazienka17.jpg"), alt: "Lazienka17" },
        { id: "Lazienka18", src: require("./Images/Lazienka18.jpg"), alt: "Lazienka18" },
        { id: "Lazienka19", src: require("./Images/Lazienka19.jpg"), alt: "Lazienka19" },
        { id: "Lazienka20", src: require("./Images/Lazienka20.jpg"), alt: "Lazienka20" }
    ];

    const Poddasza = [
        { id: "Poddasze1", src: require("./Images/Poddasze1.jpg"), alt: "Poddasze1" },
        { id: "Poddasze2", src: require("./Images/Poddasze2.jpg"), alt: "Poddasze2" },
        { id: "Poddasze3", src: require("./Images/Poddasze3.jpg"), alt: "Poddasze3" },
        { id: "Poddasze4", src: require("./Images/Poddasze4.jpg"), alt: "Poddasze4" },
        { id: "Poddasze5", src: require("./Images/Poddasze5.jpg"), alt: "Poddasze5" },
        { id: "Poddasze6", src: require("./Images/Poddasze6.jpg"), alt: "Poddasze6" },
        { id: "Poddasze7", src: require("./Images/Poddasze7.jpg"), alt: "Poddasze7" },
        { id: "Poddasze8", src: require("./Images/Poddasze8.jpg"), alt: "Poddasze8" },
        { id: "Poddasze9", src: require("./Images/Poddasze9.jpg"), alt: "Poddasze9" },
        { id: "Poddasze10", src: require("./Images/Poddasze10.jpg"), alt: "Poddasze10" },
        { id: "Poddasze11", src: require("./Images/Poddasze11.jpg"), alt: "Poddasze11" },
        { id: "Poddasze12", src: require("./Images/Poddasze12.jpg"), alt: "Poddasze12" },
        { id: "Poddasze13", src: require("./Images/Poddasze13.jpg"), alt: "Poddasze13" },
        { id: "Poddasze14", src: require("./Images/Poddasze14.jpg"), alt: "Poddasze14" },
        { id: "Poddasze15", src: require("./Images/Poddasze15.jpg"), alt: "Poddasze15" },
        { id: "Poddasze16", src: require("./Images/Poddasze16.jpg"), alt: "Poddasze16" },
        { id: "Poddasze17", src: require("./Images/Poddasze17.jpg"), alt: "Poddasze17" },
        { id: "Poddasze18", src: require("./Images/Poddasze18.jpg"), alt: "Poddasze18" },
        { id: "Poddasze19", src: require("./Images/Poddasze19.jpg"), alt: "Poddasze19" },
        { id: "Poddasze20", src: require("./Images/Poddasze20.jpg"), alt: "Poddasze20" },
        { id: "Poddasze21", src: require("./Images/Poddasze21.jpg"), alt: "Poddasze21" }
    ];

    return (

        <div>

            <div className="BanerContainer">
                <div className="Baner"></div>
                <div className="BanerContent">
                    Szukasz profejonalnej stolarni, aby zagospodarować swoją przestrzeń w niebalny sposób?
                    <button className="LinkButton"> <Link className="Link" to="/kontakt"> Zadzwoń do Nas! </Link></button>
                </div>
            </div>


            <div className="NavBarSubContainer">
                <div className="NavBarSubLogo"
                    onClick={() => AnchorUp()}
                    style={{ display: `${scrollPosition >= 700 ? "flex" : "none"}` }}>Kraft
                </div>

                <div className="NavBarSubBox">
                    <div className="NavBarSubBoxCont">Oferujemy wysokiej jakości:</div>
                    <div className="NavBarSubBoxBtn">
                        |<button onClick={() => AnchorKuchnie()}>Kuchnie</button>|
                        <button onClick={() => AnchorSzafy()}>Szafy</button>|
                        <button onClick={() => AnchorŁazienki()}>Łazienki</button>|
                        <button onClick={() => AnchorPoddasza()}>Skosy</button>|
                    </div>
                </div>

                <div className="NavBarSubBoxMobile">
                    <div className="GridContent">
                        <div className="item-1-1"> <div className="NavBarSubBoxContMobile">Oferujemy wysokiej jakości:</div></div>
                        <div className="item-2-1">|<button onClick={() => AnchorKuchnie()}>Kuchnie</button>|</div>
                        <div className="item-2-2"> |<button onClick={() => AnchorSzafy()}>Szafy</button>|</div>
                        <div className="item-3-1">|<button onClick={() => AnchorŁazienki()}>Łazienki</button>|</div>
                        <div className="item-3-2">|<button onClick={() => AnchorPoddasza()}>Skosy</button>|</div>
                    </div>
                </div>


            </div>


            <div className="Gallery">

                <div className="MainImageContainer">
                    <button className='ButtonLeft' onClick={() => DownCount()}> {"<"} </button>
                    <img
                        src={require(`./Images/Besty${ArrowNum}.jpg`)}
                        alt={`VerGal${ArrowNum}`}
                        className={`MainImageContent ${hideImage ? "hide" : ""}`}
                    />
                    <button className='ButtonRight' onClick={() => UpCount()}> {">"} </button>
                </div>

                <ul>
                    {Best.map((image) => (
                        < li><img className="GalleryImages" key={image.id} src={image.src} alt={image.alt} loading="lazy" /></li>
                    ))}
                    <li ></li>
                </ul>


                <div id="Kuchnie"></div>
                <div className="TitleGalleryContainerRev">
                    <div className="ContentBoxGalleryDR"> Przekonaj się, jak piękne i funkcjonalne kuchnie na wymiar możemy zrealizować - zerknij na nasze projekty!</div>
                    <div className="TitleGallery">Kuchnie</div>
                </div>

                <ul>
                    {Kuchnie.map((image) => (
                        < li><img className="GalleryImages" key={image.id} src={image.src} alt={image.alt} loading="lazy" /></li>
                    ))}
                    <li ></li>
                </ul>



                <div id="Szafy"></div>
                <div className="TitleGalleryContainer">
                    <div className="TitleGallery">Szafy</div>
                    <div className="ContentBoxGalleryDL"> Zobacz, jak nasze szafy na wymiar potrafią zmienić Twoją przestrzeń i maksymalnie wykorzystać jej potencjał!</div>
                </div>

                <ul>
                    {Szafy.map((image) => (
                        < li><img className="GalleryImages" key={image.id} src={image.src} alt={image.alt} loading="lazy" /></li>
                    ))}
                    <li ></li>
                </ul>



                <div id="Lazienki"></div>
                <div className="TitleGalleryContainerRev">
                    <div className="ContentBoxGalleryDR">Zainspiruj się naszymi realizacjami mebli łazienkowych na wymiar, które łączą w sobie funkcjonalność, estetykę i wysoką jakość wykonania.</div>
                    <div className="TitleGallery">Łazienki</div>
                </div>

                <ul>
                    {Lazienki.map((image) => (
                        < li><img className="GalleryImages" key={image.id} src={image.src} alt={image.alt} loading="lazy" /></li>
                    ))}
                    <li ></li>
                </ul>


                <div id="Skosy"></div>
                <div className="TitleGalleryContainer">
                    <div className="TitleGallery">Skosy</div>
                    <div className="ContentBoxGalleryDL"> Myślisz że na poddaszu nie da się zagospodarować przestrzeni? Oto, jak idealnie dopasowane meble pod skosami potrafią zmienić Twoje pomieszczenie i wykorzystać jego potencjał!</div>
                </div>

                <ul>
                    {Poddasza.map((image) => (
                        < li><img className="GalleryImages" key={image.id} src={image.src} alt={image.alt} loading="lazy" /></li>
                    ))}
                    <li ></li>
                </ul>


            </div>



        </div>

    );
};

export default HomePage