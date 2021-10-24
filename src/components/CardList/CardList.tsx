import React from "react";
import OneCard from "../Card/Card";

export default function CardList() {
  const listcard = [
    {
      nom: "title",
      description: "description",
      proprio: "Walid Zender",
      comments: "Je suis au téléphone avec Alexandre",
      image: undefined,
    },
    {
      nom: "title2",
      description: "description2",
      proprio: "Alexandre Six",
      comments: "Je suis au téléphone avec Timoté",
      image: undefined,
    },
  ];

  return (
    <div>
      {listcard.map((card, index) => (
        <>
          {card === undefined ? (
            console.log("undefined")
          ) : (
            <OneCard
              key={index}
              title={card.nom}
              description={card.description}
              proprio={card.proprio}
              comments={card.comments}
              image={card.image}
            />
          )}
        </>
      ))}
    </div>
  );
}
