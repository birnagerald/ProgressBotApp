import React from "react";
import Message from "./Message";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Button, ButtonToolbar } from "react-bootstrap";
import "./EpisodeList.css";

const EpisodeList = props => {
  const { episodeList, deleteHandler, syncHandler, anime } = props;

  if (null === episodeList || 0 === episodeList.length) {
    return <Message message="Pas d'épisode enregistré !" />;
  }

  return (
    <div className="card mb-3 mt-3 shadow-sm">
      <TransitionGroup>
        {episodeList.map(episode => {
          return (
            <CSSTransition key={episode.id} timeout={1000} classNames="fade">
              <div className="card-body border-bottom d-flex justify-content-between">
                <p className="card-text">
                  Épisode {episode.number} |{" "}
                  {episode.published ? (
                    <i className="fas fa-check" />
                  ) : (
                    <i className="fas fa-times" />
                  )}
                </p>
                <div>
                  <ButtonToolbar>
                    <Button
                      variant="outline-dark mr-2"
                      onClick={function onEpisodeListSyncClick(event) {
                        event.preventDefault();
                        console.log(anime);
                        syncHandler(episode, anime);
                      }}
                    >
                      Sync
                    </Button>

                    <Button
                      variant="outline-danger"
                      onClick={function onEpisodeListDeleteClick(event) {
                        event.preventDefault();
                        deleteHandler(episode.id);
                      }}
                    >
                      Remove
                    </Button>
                  </ButtonToolbar>
                </div>
              </div>
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    </div>
  );
};

export default EpisodeList;
