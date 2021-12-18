import React from 'react'
import { ReactComponent as ImgPerfil } from '../img/blog.svg'

import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { BsMouse } from "react-icons/bs";
import { BsArrowDownShort } from "react-icons/bs";
import { HiOutlinePaperAirplane } from "react-icons/hi";

import '../App.css';

export default function Home() {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <div className="home__social">
            <a
              href="https://github.com/RENATOADORNO"
              target="_blank"
              className="home__social-icon"
              rel="noreferrer"
            >
              <FiGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/renatoadorno/"
              className="home__social-icon"
              target="_blank"
              rel="noreferrer"
            >
              <FiLinkedin />
            </a>
          </div>

          <div className="home__img">
            <ImgPerfil className="home__blob" href="../img/myImg.jpg" />
          </div>

          <div className="home__data">
            <h1 className="home__title">Olá, Eu sou o Renato</h1>
            <h3 className="home__subtitle">Frontend Developer</h3>
            <p className="home__description">Nada por enquanto</p>
            <a href="#contact" className="button button--flex">
              Entre em contato <HiOutlinePaperAirplane className="button__icon"/>
            </a>
          </div>
        </div>

        <div className="home__scroll">
          <a href="#about" className="home__scroll-button button--flex">
            <BsMouse className="home__scroll-mouse" />
            <span className="home__scroll-name">Scroll Down</span>
            <BsArrowDownShort className="home__scroll-arrow" />
          </a>
        </div>
      </div>
    </section>
  )
}
