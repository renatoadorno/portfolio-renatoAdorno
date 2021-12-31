import React from 'react'

import { RiFacebookFill } from "react-icons/ri";
import { RiInstagramLine } from "react-icons/ri";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__bg">
        <div className="footer__container container grid">
          <div className="footer__content grid">
            <div className="footer__content--title">
              <h1 className="footer__title">Renato</h1>
              <span className="footer__subtitle">Frontend developer</span>
            </div>

            <div>
              <ul className="footer__links">
                <li>
                  <a href="#services" className="footer__link">Serviços</a>
                </li>
                <li>
                  <a href="#portfolio" className="footer__link">Portfolio</a>
                </li>
                <li>
                  <a href="#contact" className="footer__link">Contato</a>
                </li>
              </ul>
            </div>

            <div className="footer__socials">
                <a
                  href="https://www.facebook.com/renatoadornno"
                  target="_blank"
                  className="footer__social"
                  rel="noreferrer"
                >
                  <RiFacebookFill />
                </a>
                <a
                  href="https://www.instagram.com/renattoadorno/"
                  target="_blank"
                  className="footer__social"
                  rel="noreferrer"
                >
                  <RiInstagramLine />
                </a>
            </div>

          </div>
        </div>
        <p className="footer__copy">&#169; Desenvolvido por Renato Adorno</p>
      </div>
    </footer>
  )
}
