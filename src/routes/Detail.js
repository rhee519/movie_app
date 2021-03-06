import React from "react";
import "./Detail.css";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    console.log(location.state);
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const { location } = this.props;
    const state = location.state;
    if (location.state) {
      return (
        <div className="detail__container">
          <div className="detail__contents">
            <img src={state.poster} alt={state.title} />
            <div className="detail__data">
              <h1 className="detail__title">{state.title}</h1>
              <h3 className="detail__year">{state.year}</h3>
              <ul className="detail__genres">
                {state.genres.map((genre, index) => (
                  <li key={index} className="detail__genre">
                    {genre}
                  </li>
                ))}
              </ul>
              <p className="detail__summary">{state.summary}</p>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Detail;
