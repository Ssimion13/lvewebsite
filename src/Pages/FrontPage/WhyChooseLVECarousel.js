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
import lvg11 from "../../Images/LVG 11.jpg";
import lvg28 from "../../Images/LVG 28.jpg";
import lvg52 from "../../Images/LVG 52.jpg";


const items = [
  {
    src: cremoniniScrubs,
    caption: "",
    widescreen: true
  },
  {
    src: lvg11,
    widescreen: false
  },
  {
    src: lvgColonWarning,
    caption: "",
    widescreen: true
  },
  {
    src: lvg28,
    caption: false
  },
  {
    src: lvg52,
    caption: false
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
          <img src={item.src} className={item.widescreen ? "whyChooseLVECarouselImage widescreen" : "whyChooseLVECarouselImage"} alt={item.altText} />
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
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
      </div>
    );
  }
}


export default WhyChooseLVECarousel;

