import React from "react";
import Message from "./Message";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./EpisodeList.css";

const EpisodeList = props => {
  const { episodeList } = props;

  if (null === episodeList || 0 === episodeList.length) {
    return <Message message="Pas d'épisode enregistré !" />;
  }

  return (
    <div className="card mb-3 mt-3 shadow-sm">
      <TransitionGroup>
        {episodeList.map(episode => {
          return (
            <CSSTransition key={episode.id} timeout={500} classNames="fade">
              <div className="card-body border-bottom">
                <p className="card-text">
                  Épisode {episode.number} |{" "}
                  {episode.published ? (
                    <i className="fas fa-check" />
                  ) : (
                    <i className="fas fa-times" />
                  )}
                </p>
              </div>
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    </div>
  );
};

export default EpisodeList;
