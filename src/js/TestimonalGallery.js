import React, {useState} from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import TestimonialText from './components/TestimonialText';
import SectionWrapper from './components/SectionWrapper';

const TestimonialGallery = () => {

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const items = [
    // {
    //   id: 7,
    //   src: "I don't typically write reviews but I felt it was important to get the message out to those who might be  enduring arthritis pain and/or degeneration of the meniscus. In February 2018, I started experiencing pain in my left knee and after taking OTC medication and resting, icing and elevating my knee with no improvement, I went to the doctor to have the situation diagnosed. After an x-ray and MRI, the diagnosis was arthritis and degeneration of the meniscus. Physical therapy was suggested. I religiously met with the physical therapist for eight consecutive sessions and followed all the stretches prescribed every single day. There was improvement but flare-ups occurred every now and then and the pain never dissipated entirely. This continued for five months. Purely, by accident, I had a session with Byron Ng at PAFit. (I really feel there should be a drum roll here!). At the end of the first session (during which he took time to understand my situation and test the extent of my movements), I literally felt no pain. He made me do various moves which I was sure were going to exacerbate my knee, but he appealed to me to trust him and kept asking for feedback constantly. After the session, I walked down the stairs waiting for the pain to hit me, then waited all evening for the pain, then was sure it would start the next day. I never felt the pain again. I did more sessions with Byron and could feel my knee getting stronger. Started doing more intense workouts, and still no pain. As of today, still no pain. Byron said he was practicing P-DTR, I say it was magic. I would be skeptical reading something like this, but please try a session with him. All you have to lose is the cost of a session but you may end up losing a lifestyle debilitated with chronic pain.",
    //   // altText: "I don't typically write reviews but I felt it was important to get the message out to those who might be  enduring arthritis pain and/or degeneration of the meniscus. In February 2018, I started experiencing pain in my left knee and after taking OTC medication and resting, icing and elevating my knee with no improvement, I went to the doctor to have the situation diagnosed. After an x-ray and MRI, the diagnosis was arthritis and degeneration of the meniscus. Physical therapy was suggested. I religiously met with the physical therapist for eight consecutive sessions and followed all the stretches prescribed every single day. There was improvement but flare-ups occurred every now and then and the pain never dissipated entirely. This continued for five months. Purely, by accident, I had a session with Byron Ng at PAFit. (I really feel there should be a drum roll here!). At the end of the first session (during which he took time to understand my situation and test the extent of my movements), I literally felt no pain. He made me do various moves which I was sure were going to exacerbate my knee, but he appealed to me to trust him and kept asking for feedback constantly. After the session, I walked down the stairs waiting for the pain to hit me, then waited all evening for the pain, then was sure it would start the next day. I never felt the pain again. I did more sessions with Byron and could feel my knee getting stronger. Started doing more intense workouts, and still no pain. As of today, still no pain. Byron said he was practicing P-DTR, I say it was magic. I would be skeptical reading something like this, but please try a session with him. All you have to lose is the cost of a session but you may end up losing a lifestyle debilitated with chronic pain.",
    //   caption: "Maya K."
    // },
    {
      id: 1,
      src: "I'm constantly amazed at his bag of tricks. He specializes in muscle optimization and can perform an unknown number of tests and tweaks that offer near-immediate results. I've come to a session with a strained wrist or sore shoulder, and Byron has performed some miracle that allows me to walk out pain-free.",
      // altText: "I'm constantly amazed at his bag of tricks. He specializes in muscle optimization and can perform an unknown number of tests and tweaks that offer near-immediate results. I've come to a session with a strained wrist or sore shoulder, and Byron has performed some miracle that allows me to walk out pain-free.",
      caption: "Yerin K."
    },
    {
      id: 2,
      src: "I engaged with Byron Ng last year to address both shoulder and neck issues, and he, using several \"MAT\" techniques, was able to eliminate nearly all of the shoulder discomfort, and a good chunk of the neck pain that I've had for years.",
      // altText: "I engaged with Byron Ng last year to address both shoulder and neck issues, and he, using several "MAT" techniques, was able to eliminate nearly all of the shoulder discomfort, and a good chunk of the neck pain that I've had for years.",
      caption: "Tom H."
    },
    {
      id: 3,
      src: "In our 5 sessions working together, Byron activated and strengthened muscles around my injured right shoulder (frozen shoulder symptoms), he also gave me customized exercises at home and sent me reminders to work on them. The strength I gained allowed me to be rid of my fear of using the muscles while training in pilates, yoga, or playing golf. Byron's MAT put me on the fast track for a full recovery. He is a cheerful, encouraging, knowledgeable and disciplined trainer, I highly recommend him",
      // altText: "In our 5 sessions working together, Byron activated and strengthened muscles around my injured right shoulder (frozen shoulder symptoms), he also gave me customized exercises at home and sent me reminders to work on them. The strength I gained allowed me to be rid of my fear of using the muscles while training in pilates, yoga, or playing golf. Byron's MAT put me on the fast track for a full recovery. He is a cheerful, encouraging, knowledgeable and disciplined trainer, I highly recommend him",
      caption: "Xin L."
    },
    {
      id: 4,
      src: "I just want to thank you for enabling me to play golf again. As you know when I first came to see you I was having muscle spasms in my lower back. It only took 2 sessions and your astute knowledge to help me get back on the course. It's almost a year later and I'm still good. The MAT system worked for me. Thanks again.",
      // altText: "I just want to thank you for enabling me to play golf again. As you know when I first came to see you I was having muscle spasms in my lower back. It only took 2 sessions and your astute knowledge to help me get back on the course. It's almost a year later and I'm still good. The MAT system worked for me. Thanks again.",
      caption: "Tony A."
    },
    {
      id: 5,
      src: "I'm constantly amazed at his bag of tricks. He specializes in muscle optimization and can perform an unknown number of tests and tweaks that offer near-immediate results. I've come to a session with a strained wrist or sore shoulder, and Byron has performed some miracle that allows me to walk out pain-free.",
      // altText: "I'm constantly amazed at his bag of tricks. He specializes in muscle optimization and can perform an unknown number of tests and tweaks that offer near-immediate results. I've come to a session with a strained wrist or sore shoulder, and Byron has performed some miracle that allows me to walk out pain-free.",
      caption: "Bonnie L."
    },
    {
      id: 6,
      src: "Byron Ng digs deep physically and mentally. I feel like we got a lot done within one session. We spent time figuring out exactly what's causing my pain and discomfort then addressing each spot with precision.",
      // altText: "Byron Ng digs deep physically and mentally. I feel like we got a lot done within one session. We spent time figuring out exactly what's causing my pain and discomfort then addressing each spot with precision.",
      caption: "Steven A."
    }
  ];

  const slides = items.map((item) => {
    return (
      <CarouselItem
        className="test"
        tag="div"
        key={item.id}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      >
        <TestimonialText>{item.src}</TestimonialText>
        <CarouselCaption className="text-danger" style={{fontSize: '24px'}} captionHeader={item.caption}  captionText="" />
      </CarouselItem>
    )
  })

  return (
    <div>
    <div style={{backgroundColor: 'white' , left: '0', right: '0', position: 'absolute', height: '100%', zIndex: '-1', marginTop: '20px'}}></div>
    <SectionWrapper>
      <h1>Why Byron?</h1>
      <style>
      {
          `.test {
              width: 100%;
              height: 80vh;
              color: black;
              overflow: scroll;
              background-color: white;
            }
            .carousel-control-prev-icon {
              background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23f00' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E");
            }
          
            .carousel-control-next-icon {
              background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23f00' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E");
            }
            .carousel-indicators li {
              background-color: black;
            }
            .carousel-indicators .active {
              background-color: black;
            }
          `
        }
      </style>
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
    </SectionWrapper>
    </div>
  )
}

export default TestimonialGallery;