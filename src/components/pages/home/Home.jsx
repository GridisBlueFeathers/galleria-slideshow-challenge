import { useEffect, useState } from "react";
import PaintingCard from "../../paintingCard/PaintingCard";
import "./Home.css"

export default function Home() {
    const [data, setData] = useState(null);

    useEffect(() => {
        async function getData() { 
            const paintingsRequest = await fetch("/paintings", {
                method: "GET",
            });

            const paintingsData = await paintingsRequest.json();

            setData(paintingsData);
        };

        getData();
    }, []);

    if(!data) {
        return (
            <div>
                Loading...
            </div>
        )
    }

    return (
        <main className="container">
            <ul className="gallery">
                {data.map(painting => {
                    return <PaintingCard
                        key={painting.pathName}
                        paintingPath={painting.pathName}
                        paintingName={painting.name}
                        paintingAuthor={painting.artist.name}
                        panitingSource={painting.images.thumbnail}
                    />
                })}
            </ul>
        </main>
    )
}