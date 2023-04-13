import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Painting.css";

export default function Painting() {
    const [paintingData, setPaintingData] = useState(null);
    const [nextPath, setNextPath] = useState(null);
    const [prevPath, setPrevPath] = useState(null);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [progressWidth, setProgressWidth] = useState(null);
    const { paintingPath } = useParams();

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    }

    const handleModalClose = (event) => {
        if (event.target.className) {
            document.getElementById("modal").style.display = "none";
            document.querySelector("body").style.overflow = "auto";
            document.querySelector("body").style.position = "relative";
        }
    }

    const handleModalOpen = () => {
        document.getElementById("modal").style.display = "block";
        document.querySelector("body").style.overflow = "hidden";
        document.querySelector("body").style.position = "fixed";
    }

    useEffect(() => {
        async function getPainting() {
            const paintingRequest = await fetch(`/paintings/${paintingPath}`, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                }
            })

            const { painitngData, nextPath, prevPath, dataLength, progress } = await paintingRequest.json();

            setPaintingData(painitngData);
            setNextPath(nextPath);
            setPrevPath(prevPath);
            setProgressWidth(Math.floor((progress / dataLength) * 100))
        }

        getPainting();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [paintingPath])

    
    if(!paintingData) {
        return (
            <div>
                Loading...
            </div>
        )
    }

    return (
        <>
            <main className="container paintingContainer">
                <section className="painting">
                    <div className="painting__image">
                        <img src={windowWidth < 768 ? paintingData.images.hero.small : paintingData.images.hero.large} alt={paintingData.name} />
                    </div>
                    <div className="painting__info">
                        <h1 className="painting__name">
                            {paintingData.name}
                        </h1>
                        <h2 className="painting__authorName">
                            {paintingData.artist.name}
                        </h2>
                        <div className="painiting_authorImage">
                            <img src={paintingData.artist.image} alt={paintingData.artist.name} />
                        </div>
                    </div>
                    <div className="painting__modalButton">
                        <div className="painting__modalIcon">
                            <img src="./assets/shared/icon-view-image.svg" alt="expand image arrows" />
                        </div>
                        <p className="painting__modalText" onClick={handleModalOpen}>
                            view image
                        </p>
                    </div>
                </section>
                <section className="description">
                    <p className="description__year">
                        {paintingData.year}
                    </p>
                    <p className="description__text">
                        {paintingData.description}
                    </p>
                    <a href={paintingData.source} target="blank">
                        go to source
                    </a>
                </section>
            </main>
            <section className="modal" onClick={handleModalClose} id="modal">
                <div className="modal__container">
                    <p className="modal__close">
                        close
                    </p>
                    <div className="modal__picture">
                        <img src={paintingData.images.gallery} alt="" />
                    </div>
                </div>
            </section>
            <footer>
                <div className="footer__progress" style={{"--width": progressWidth}}></div>
                <div className="footerInfo">
                    <h3 className="footer__name">
                        {paintingData.name}
                    </h3>
                    <h4 className="footer__author">
                        {paintingData.artist.name}
                    </h4>
                </div>
                <div className="footerButtons">
                    <div className={`footerButtons__button${prevPath ? " footerButtons__active" : ""}`}>
                        {
                            prevPath &&
                            <Link to={`/${prevPath}`}>
                                <img src="./assets/shared/icon-back-button.svg" alt="back button" />
                            </Link> ||
                            <img src="./assets/shared/icon-back-button.svg" alt="back button" />
                        }
                    </div>
                    <div className={`footerButtons__button${nextPath ? " footerButtons__active" : ""}`}>
                        {
                            nextPath &&
                            <Link to={`/${nextPath}`}>
                                <img src="./assets/shared/icon-next-button.svg" alt="next button" />
                            </Link> ||
                            <img src="./assets/shared/icon-next-button.svg" alt="next button" />
                        }
                    </div>
                </div>
            </footer>
        </>
    )
}