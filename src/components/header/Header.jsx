import { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
    const [galleryMode, setGallerymode] = useState(false);
    
    return (
        <header>
            <div className="container header__container">
                <div className="header__logo">
                    <Link to={"/"}>
                        <img src={"./assets/shared/logo.svg"} alt="gallery logo" />
                    </Link>
                </div>
                <p>{`${galleryMode ? "stop" : "start"} slideshow`}</p>
            </div>
        </header>
    );
}