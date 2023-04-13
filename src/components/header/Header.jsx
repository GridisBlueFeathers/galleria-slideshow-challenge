import { useEffect, useState } from "react";
import "./Header.css";
import { Link, useParams } from "react-router-dom";

export default function Header() {
    const [galleryMode, setGallerymode] = useState(false);
    const { paintingPath } = useParams();

    useEffect(() => {
        setGallerymode(!!paintingPath)
    }, [paintingPath])
    
    return (
        <header>
            <div className="container header__container">
                <div className="header__logo">
                    <Link to={"/"}>
                        <img src={"./assets/shared/logo.svg"} alt="gallery logo" />
                    </Link>
                </div>
                <Link to={galleryMode ? "/" : "/starry-night"}>
                    {`${galleryMode ? "stop" : "start"} slideshow`}
                </Link>
            </div>
        </header>
    );
}