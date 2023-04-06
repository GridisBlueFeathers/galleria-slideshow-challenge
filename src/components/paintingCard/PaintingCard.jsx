import "./PaintingCard.css";

export default function PaintingCard({ paintingName, paintingAuthor, panitingSource }) {

    return (
        <li className="paintingCard">
            <div className="paintingCard__background">
                <img src={panitingSource} alt={paintingName} />
            </div>
            <div className="paintingCard__text">
                <h2 className="paintingCard__name">
                    {paintingName}
                </h2>
                <h3 className="paintingCard__author">
                    {paintingAuthor}
                </h3>
            </div>
        </li>
    )
}