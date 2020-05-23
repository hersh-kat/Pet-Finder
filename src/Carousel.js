import React from "react";

export class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 0,
      photos: [],
    };
    this.handleIndexClick = this.handleIndexClick.bind(this);
  }

  static getDerivedStateFromProps(nextProps) {
    let media = nextProps.media;
    let petPhotos = ["http://placecorgi.com/600/600"];

    if (media.length) petPhotos = media.map((photo) => photo.large);

    return { photos: petPhotos };
  }

  handleIndexClick(e) {
    this.setState({
      active: parseInt(e.target.dataset.index),
    });
  }

  render() {
    const { active, photos } = this.state;
    return (
      <div className="carousel">
        <img src={photos[active]} alt="animal" />
        <div className="carousel-smaller">
          {photos.map((photo, index) => (
            //eslint-disable-next-line
            <img
              key={photo}
              onClick={this.handleIndexClick}
              data-index={index}
              src={photo}
              className={index === active ? "active" : ""}
              alt="animal thumbnail"
            />
          ))}
        </div>
      </div>
    );
  }
}
