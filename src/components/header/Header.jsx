import { useState } from "react";
import Logo from "../../assets/shared/logo.svg"
import "./Header.css";

export default function Header() {
    const [galleryMode, setGallerymode] = useState(false);
    
    return (
        <header>
            <div className="header__container">
                <div className="header__logo"><img src={Logo} alt="gallery logo" /></div>
                <p>{`${galleryMode ? "stop" : "start"} slideshow`}</p>
            </div>
        </header>
    );
}