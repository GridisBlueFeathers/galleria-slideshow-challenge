import PaintingCard from "../../paintingCard/PaintingCard";
import "./Home.css"

export default function Home() {
    return (
        <main className="container">
            <ul className="gallery">
                <PaintingCard
                    paintingName={"Starry Night"}
                    paintingAuthor={"Vincent Van Gogh"}
                    panitingSource={"./src/assets/starry-night/thumbnail.jpg"}
                />
                <PaintingCard
                    paintingName={"Girl with a Pearl Earring"}
                    paintingAuthor={"Johannes Vermeer"}
                    panitingSource={"./src/assets/girl-with-pearl-earring/thumbnail.jpg"}
                />
                <PaintingCard
                    paintingName={"Guernica"}
                    paintingAuthor={"Pablo Picasso"}
                    panitingSource={"./src/assets/guernica/thumbnail.jpg"}
                />
                <PaintingCard
                    paintingName={"Penitent Magdalene"}
                    paintingAuthor={"Artemisia Gentileschi"}
                    panitingSource={"./src/assets/penitent-magdalene/thumbnail.jpg"}
                />
                <PaintingCard
                    paintingName={"The Storm on the Sea of Galilee"}
                    paintingAuthor={"Rembrandt"}
                    panitingSource={"./src/assets/the-storm-on-the-sea-of-galilee/thumbnail.jpg"}
                />
                <PaintingCard
                    paintingName={"The Great Wave off Kanagawa"}
                    paintingAuthor={"Hokusai"}
                    panitingSource={"./src/assets/the-great-wave-off-kanagawa/thumbnail.jpg"}
                />
                <PaintingCard
                    paintingName={"Van Gogh Self-portrait"}
                    paintingAuthor={"Vincent Van Gogh"}
                    panitingSource={"./src/assets/van-gogh-self-portrait/thumbnail.jpg"}
                />
                <PaintingCard
                    paintingName={"The Sleeping Gypsy"}
                    paintingAuthor={"Henri Rousseau"}
                    panitingSource={"./src/assets/the-sleeping-gypsy/thumbnail.jpg"}
                />
                <PaintingCard
                    paintingName={"Lady with an Ermine"}
                    paintingAuthor={"Leonardo da Vinci"}
                    panitingSource={"./src/assets/lady-with-an-ermine/thumbnail.jpg"}
                />
                <PaintingCard
                    paintingName={"The Night Café"}
                    paintingAuthor={"Vincent Van Gogh"}
                    panitingSource={"./src/assets/the-night-cafe/thumbnail.jpg"}
                />
                <PaintingCard
                    paintingName={"The Basket of Apples"}
                    paintingAuthor={"Paul Cézanne"}
                    panitingSource={"./src/assets/the-basket-of-apples/thumbnail.jpg"}
                />
                <PaintingCard
                    paintingName={"The Boy in the Red Vest"}
                    paintingAuthor={"Paul Cézanne"}
                    panitingSource={"./src/assets/the-boy-in-the-red-vest/thumbnail.jpg"}
                />
                <PaintingCard
                    paintingName={"Arnolfini Portrait"}
                    paintingAuthor={"Jan van Eyck"}
                    panitingSource={"./src/assets/arnolfini-portrait/thumbnail.jpg"}
                />
                <PaintingCard
                    paintingName={"Mona Lisa"}
                    paintingAuthor={"Leonardo da Vinci"}
                    panitingSource={"./src/assets/mona-lisa/thumbnail.jpg"}
                />
                <PaintingCard
                    paintingName={"The Swing"}
                    paintingAuthor={"Jean-Honoré Fragonard"}
                    panitingSource={"./src/assets/the-swing/thumbnail.jpg"}
                />
            </ul>
        </main>
    )
}