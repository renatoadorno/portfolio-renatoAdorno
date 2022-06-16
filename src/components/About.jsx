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
              <a download href="https://doc-0k-ao-docs.googleusercontent.com/docs/securesc/4l0e6iuhdkjor1bv5uglj1bqp3ugeuv2/9sgapcsmvqd3b3n62ro90ditmncajrru/1655360625000/06777320144468424285/06777320144468424285/1uMyWUP8rn1BwvrkIqUCiCMmnNNQia91U?e=download&ax=ACxEAsYkGKA-rL3qfygiEbEbJVZGsRddPIQ72UZ8XM_YtJoJ04_yS7NCf6cwVrjJR6gjzlDCZptFBGLp72WBhzhQtDzLX76wOxD4c04Ulq8RXWgWnGEtuCXjzh-M3G0n3xKnyChvlEgaUJG1YOqNi5nOTX-9xxoa9LmGDGz2xIF43dis3IxgL62OpwXa6HNJPbqLZQ61A2CR7lDonaaN_4AMtBvQQVzSr7Rp-M7yXr7bRBKJkj-9iaSNyC70HZsQj0OuxYSvLK5YjDzyxm91sDfwv7QetsX4VG8eSNu6vNtaQrt23uBVQwuxrSFvBArkXdVARV5ZBf8JFxSaOoEco0zJjAnk1AYCGGVtxRpb4FbtPfSmlYoWJrETpgtN-Zd9tLyR_Nh5FR_Uu96ubwLnEXFdDEKwqewsDjFdM_o0z2QiIM_3wDKk0tWfDHZPwtssLbQmLI1AYo6_9MXj-ympdXcZmU6uaO7sqYQFQw8b3Ee4gyCspBT9DYU6KDZUMP7nRlOms_C2vxbek_trQWcemtZgyHnVrVct7H6wHqcl9cTRFIp3VbIF7YDuIdUgmYv-OQmFaDZPODQI71qOaKDiHAjeMId5jEeKYfbwzRazlAlbFDKqC5IDi8RDMBWoEUErNz_NRH_BR_Gvj3vbxMZGVuU-nuQ9qluoG7KD7pk3GBHzfLXv3LT3nUlAhDeGoB8VMjZorQXw0a5DSV8T2imdSkwTTvrPQh-59NfQo34HvivSwsjlIrIU65M&authuser=1&nonce=jcjdt0cs4me20&user=06777320144468424285&hash=8vq2vhbto9qaakolu5i3q5avovue1osq" className="button button--flex">
                Download CV <FiDownload className="button__icon" />
              </a>
            </div>
        </div>
      </div>
    </section>
  )
}
