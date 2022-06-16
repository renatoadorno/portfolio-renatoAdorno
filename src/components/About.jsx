import React from 'react'
import { FiDownload } from "react-icons/fi";

import Perfil2 from '../img/perfil2.jpg'

export default function About() {
  return (
    <section className="about section" id="about">
      <h2 className="section__title title__about">Sobre Min</h2>
      <span className="section__subtitle">Introdução</span>

      <div className="about__container container grid">
        <img src={ Perfil2 } alt="wrwqer" className="about__img" />

        <div className="about__data">
          <p className="about__description">
          Estou a mais de um ano me preparando para trabalhar na área de desenvolvimento web, 
          adquirindo conhecimentos em programação funcional, OOP, e praticando com projetos que fiz 
          durante meu período de estudo na Trybe.
          </p>

          <div className="about__info">
            <div>
                <span className="about__info-title">+12 </span>
                <span className="about__info-name">Meses <br/> de estudo</span>
              </div>

              <div>
                <span className="about__info-title">+15 </span>
                <span className="about__info-name">Projetos <br/> completos</span>
              </div>

              <div>
                <span className="about__info-title">+350 </span>
                <span className="about__info-name">Commits <br/> feitos no GitHub</span>
              </div>

              {/* <div>
                <span className="about__info-title">02+</span>
                <span className="about__info-name">Empresa <br/> que trabalhi</span>
              </div> */}
            </div>

            <div className="about__buttons">
              <a download="" href="../doc/0-RENATOADORNO-CV-WEBSITE.pdf" className="button button--flex">
                Download CV <FiDownload className="button__icon" />
              </a>
            </div>
        </div>
      </div>
    </section>
  )
}
