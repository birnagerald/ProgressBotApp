import React from "react";

const AnimeList = props => {
  const { animes, isFetching } = props;

  if (isFetching) {
    return (
      <div>
        <i className="fas fa-spinner fa-spin" />
      </div>
    );
  }

  if (null === animes || 0 === animes.length) {
    return <div>Aucun anime</div>;
  }

  return (
    <div>
      <ul>
        {animes && animes.map(anime => <li key={anime.id}>{anime.title}</li>)}
      </ul>
    </div>
  );
};

export default AnimeList;
