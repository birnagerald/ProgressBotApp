import React from "react";
import Message from "./Message";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./EpisodeList.css";

const EpisodeList = props => {
  const { episodeList, deleteHandler } = props;

  if (null === episodeList || 0 === episodeList.length) {
    return <Message message="Pas d'épisode enregistré !" />;
  }

  return (
    <div className="card mb-3 mt-3 shadow-sm">
      <TransitionGroup>
        {episodeList.map(episode => {
          return (
            <CSSTransition key={episode.id} timeout={500} classNames="fade">
              <div className="card-body border-bottom d-flex justify-content-between">
                <p className="card-text">
                  Épisode {episode.number} |{" "}
                  {episode.published ? (
                    <i className="fas fa-check" />
                  ) : (
                    <i className="fas fa-times" />
                  )}
                </p>
                <button
                  className="btn btn-outline-danger btn-sm"
                  onClick={function onEpisodeListDeleteClick(event) {
                    event.preventDefault();
                    deleteHandler(episode.id);
                  }}
                >
                  Remove
                </button>
              </div>
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    </div>
  );
};

export default EpisodeList;
