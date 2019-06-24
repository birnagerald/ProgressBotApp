import React from "react";
import { Link } from "react-router-dom";
import Message from "./Message";

const AnimeList = props => {
  const { animes } = props;

  if (null === animes || 0 === animes.length) {
    return <Message message="Aucun anime enregistré" />;
  }

  return (
    <div>
      {animes &&
        animes.map(anime => (
          <div className="card mb-3 mt-3 shadow-sm" key={anime.id}>
            <div className="card-body">
              <h3>
                <Link to={`/anime/${anime.id}`}>{anime.title}</Link>
              </h3>
            </div>
          </div>
        ))}
    </div>
  );
};

export default AnimeList;
