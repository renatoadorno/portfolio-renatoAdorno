import React  from "react";

import Slider from "./Slider";

import '../../css/index.css'

export default function Portfolio() {
  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">Os mais recentes projetos</span>

      <Slider />
    </section>
  )
}
