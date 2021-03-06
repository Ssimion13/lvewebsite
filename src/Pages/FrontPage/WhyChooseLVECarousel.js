import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  // CarouselCaption
} from 'reactstrap';
// import FancyPoseFajardo from "../../Images/fancyposefajardo.jpg"
// import DoctorLaptop from "../../Images/doctorlaptop.jpg"
import cremoniniScrubs from "../../Images/cremoniniscrubs.png"
import lvgColonWarning from "../../Images/lvgcolonwarning.jpg"
import setuproom from "../../Images/setuproom.png"


const items = [
  {
    src: cremoniniScrubs,
    caption: "",
  },
  {
    src: lvgColonWarning,
    caption: "",
  },
  {
    src: setuproom,
    caption: ""
  }
];

class WhyChooseLVECarousel extends Component {
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
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
          tag="div"
        >
          <img src={item.src} className={"whyChooseLVECarouselImage"} alt={item.altText} />
          {/* <CarouselCaption captionText={item.caption} captionHeader={item.caption}  /> */}
        </CarouselItem>
      );
    });
    return (
      <div className="whyChooseLVECarousel">
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
        interval={300000}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} className="unselectable" />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} className="unselectable"/>
      </Carousel>
      </div>
    );
  }
}


export default WhyChooseLVECarousel;

