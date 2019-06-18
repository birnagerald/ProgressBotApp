import React from "react";

class AnimeList extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    const { animes } = this.props;

    return (
      <div>
        <ul>
          {animes && animes.map(anime => <li key={anime.id}>{anime.title}</li>)}
        </ul>
      </div>
    );
  }
}

export default AnimeList;
