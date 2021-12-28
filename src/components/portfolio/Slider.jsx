import React, { useState } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "./slider.css"

import ImgPortfolio from '../../img/ex1.jpg'

import { BiRightArrowAlt } from "react-icons/bi";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import NavigateNext from "@material-ui/icons/NavigateNext";

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })

  function Arrow(props) {
    const disabeld = props.disabled ? " arrow--disabled" : ""
    return (
      <svg
        onClick={props.onClick}
        className={`arrow ${
          props.left ? "arrow--left" : "arrow--right"
        } ${disabeld}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        {props.left && (
          <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
        )}
        {!props.left && (
          <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
        )}
      </svg>
    )
  }

  return (
    <>
      <div className="navigation-wrapper  portfolio__container container">
        <div ref={ sliderRef } className="keen-slider">
          {/* ==============PORTFOLIO 1=============== */}
          <div className="keen-slider__slide number-slide1  portfolio__content grid">
            <img src={ ImgPortfolio } alt="dsdfsd" className="portfolio__img"/>

            <div className="portfolio__data">
              <h3 className="portfolio__title">Modern Web Site</h3>
              <p className="portfolio__description">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              </p>
              <a href="#" className="button button--flex button--small portfolio__button">
                Demo
                <BiRightArrowAlt className="button__icon" />
              </a>
            </div>
          </div>

          {/* ==============PORTFOLIO 2=============== */}
          <div className="keen-slider__slide number-slide2  portfolio__content grid">
            <img src={ ImgPortfolio } alt="dsdfsd" className="portfolio__img"/>

            <div className="portfolio__data">
              <h3 className="portfolio__title">App Financeiro</h3>
              <p className="portfolio__description">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              </p>
              <a href="#" className="button button--flex button--small portfolio__button">
                Demo
                <BiRightArrowAlt className="button__icon" />
              </a>
            </div>
          </div>
        </div>
        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )}
      </div>
      {loaded && instanceRef.current && (
        <div className="dots">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx)
                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}
              ></button>
            )
          })}
        </div>
      )}
    </>
  )
}
