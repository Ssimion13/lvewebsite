import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  // CarouselControl,
  // CarouselIndicators,
  // CarouselCaption
} from 'reactstrap';
import lvgdoctors from "../../Images/lvgdoctors.jpg"

const items = [
  {
    src: lvgdoctors,
    id: 1,

  },
  // {
  //   id: 2,
  //   altText: 'Slide 2',
  //   caption: 'Slide 2',
  //   src: "butts"
  // },
  // {
  //   id: 3,
  //   altText: 'Slide 3',
  //   caption: 'Slide 3',
  //   src: "butts2"
  // }
];

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          className="custom-tag"
          tag="div"
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <iframe src="https://www.google.com/maps/embed?pb=!4v1535788208806!6m8!1m7!1syAJiH73FKoLXOajgHAEVkg!2m2!1d36.05624589136753!2d-115.1009494996736!3f283.34154574786976!4f5.053809294069822!5f2.0360708148318722"   frameBorder="0" title="fancy" className="frontPageMap" allowFullScreen></iframe>
          {/* <CarouselCaption captionText={item.caption} captionHeader={item.caption} /> */}
        </CarouselItem>
      );
    });

    return (
      <div>
        <style>
          {
            `.custom-tag {
                align-items: center;
                justify-content: center;
                max-width: 100%;
                height: 150px;
                background: black;
              }`
          }
        </style>
        <Carousel
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
        >
          {slides}
        </Carousel>
      </div>
    );
  }
}

export default Map;