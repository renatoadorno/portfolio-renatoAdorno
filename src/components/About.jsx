import React from 'react'
import { FiDownload } from "react-icons/fi";

import Perfil2 from '../img/perfil2.jpg'
import '../App.css';

export default function About() {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">Sobre Min</h2>
      <span className="section__subtitle">Introdução</span>

      <div className="about__container container grid">
        <img src={ Perfil2 } alt="wrwqer" className="about__img" />

        <div className="about__data">
          <p className="about__description">
            Lorem Ipsum is simply dummy text of the printing and typesetting 
            industry. Lorem Ipsum has been the industry's standard dummy text 
            ever since the 1500s
          </p>

          <div className="about__info">
            <div>
                <span className="about__info-title">+05 </span>
                <span className="about__info-name">Meses <br/> de estudo</span>
              </div>

              <div>
                <span className="about__info-title">+10 </span>
                <span className="about__info-name">Projetos <br/> completos</span>
              </div>

              <div>
                <span className="about__info-title">+170 </span>
                <span className="about__info-name">Commits <br/> feitos no GitHub</span>
              </div>

              {/* <div>
                <span className="about__info-title">02+</span>
                <span className="about__info-name">Empresa <br/> que trabalhi</span>
              </div> */}
            </div>

            <div className="about__buttons">
              <a download="" href="../doc/Curriculo_RenatoAdorno.pdf" className="button button--flex">
                Download CV <FiDownload className="button__icon" />
              </a>
            </div>
        </div>
      </div>
    </section>
  )
}
