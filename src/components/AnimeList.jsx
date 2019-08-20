import React from "react";
import { Link } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Message from "./Message";
import "./AnimeList.css";

const AnimeList = props => {
  const { animes, deleteHandler } = props;

  if (null === animes || 0 === animes.length) {
    return <Message message="Aucun anime enregistré" />;
  }

  return (
    <div>
      <TransitionGroup>
        {animes.map(anime => {
          return (
            <CSSTransition key={anime.id} timeout={1000} classNames="fade">
              <div className="card mb-3 mt-3 shadow-sm">
                <div className="card-body d-flex justify-content-between">
                  <h3>
                    <Link to={`/anime/${anime.id}`}>{anime.title}</Link>
                  </h3>

                  <button
                    className="btn btn-outline-danger btn-sm"
                    onClick={function onAnimeDeleteClick(event) {
                      event.preventDefault();
                      deleteHandler(anime.id);
                    }}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    </div>
  );
};

export default AnimeList;
