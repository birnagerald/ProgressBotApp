import React from "react";
import Message from "./Message";

const EpisodeList = props => {
  const { episodeList } = props;

  if (null === episodeList) {
    return <Message message="Pas d'épisode enregistré !" />;
  }

  return (
    <div className="card mb-3 mt-3 shadow-sm">
      {episodeList.map(episode => {
        return (
          <div className="card-body" key={episode.id}>
            <p className="card-text mb-0" />
            <p className="card-text">
              Épisode {episode.number} |{" "}
              {episode.published ? (
                <i className="fas fa-check" />
              ) : (
                <i className="fas fa-times" />
              )}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default EpisodeList;
