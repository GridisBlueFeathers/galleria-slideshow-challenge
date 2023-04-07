import { useState } from "react";
import "./Header.css";

export default function Header() {
    const [galleryMode, setGallerymode] = useState(false);
    
    return (
        <header>
            <div className="container header__container">
                <div className="header__logo"><img src={"./assets/shared/logo.svg"} alt="gallery logo" /></div>
                <p>{`${galleryMode ? "stop" : "start"} slideshow`}</p>
            </div>
        </header>
    );
}