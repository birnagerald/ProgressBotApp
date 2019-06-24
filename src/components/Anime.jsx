import React from "react";
import Message from "./Message";

const Anime = props => {
  const { anime } = props;

  if (null === anime) {
    return <Message message="L'anime n'existe pas !" />;
  }

  return (
    <div className="card mb-3 mt-3 shadow-sm">
      <div className="card-body">{anime.title}</div>
    </div>
  );
};

export default Anime;
