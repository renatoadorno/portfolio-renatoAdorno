import React, { useState } from 'react'
import { BiRightArrowAlt } from "react-icons/bi";
import { RiCloseLine } from "react-icons/ri";
import { CheckCircleIcon } from '@heroicons/react/outline'
import { CodeIcon } from '@heroicons/react/outline'
import { TemplateIcon } from '@heroicons/react/outline'

export default function Services() {
  const [servicesOne, setServicesOne] = useState(false);
  const [servicesTwo, setServicesTwo] = useState(false);

  const modalOne = () => {
    if(servicesOne === false) return setServicesOne(true);
    else return setServicesOne(false);
  }

  const modalTwo = () => {
    if(servicesTwo === false) return setServicesTwo(true);
    else return setServicesTwo(false);
  }

  return (
    <section className="services section" id="services">
      <h2 className="section__title">Seviços</h2>
      <span className="section__subtitle">O que eu ofereço</span>

      <div className="services__container container grid">

        {/* ================SERVICES 1==================== */}
        <div className="services__content">
          <div>
            <TemplateIcon className="services__icon" />
            <h3 className="services__title">Ui/Ux <br/> Designer</h3>
          </div>

          <span
            onClick={ modalOne }
            className="button button--flex button--small button--link services__button"
          >
            Ver mais
            <BiRightArrowAlt className="button__icon" />
          </span>

          {servicesOne ? (
            <div className="services__modal active-modal">
              <div className="services__modal-content">
                <h4 className="services__modal-title">Ui/Ux <br/> Designer</h4>
                <RiCloseLine
                  onClick={ modalOne }
                  className="services__modal-close" 
                />

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <CheckCircleIcon className="services__modal-icon" />
                    <p>Desenvolvimento da interface de usuário</p>
                  </li>
                  <li className="services__modal-service">
                    <CheckCircleIcon className="services__modal-icon" />
                    <p>Desenvolvimento de página web</p>
                  </li>
                  <li className="services__modal-service">
                    <CheckCircleIcon className="services__modal-icon" />
                    <p>Posicione a marca da sua empresa</p>
                  </li>
                </ul>
              </div>
            </div>
          )
          :
          (
            <div className="services__modal">
              <div className="services__modal-content">
                <h4 className="services__modal-title">Ui/Ux <br/> Designer</h4>
                <RiCloseLine
                  onClick={ modalOne }
                  className="services__modal-close"
                />

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <CheckCircleIcon className="services__modal-icon" />
                    <p>Desenvolvimento da interface de usuário</p>
                  </li>
                  <li className="services__modal-service">
                    <CheckCircleIcon className="services__modal-icon" />
                    <p>Desenvolvimento de página web</p>
                  </li>
                  <li className="services__modal-service">
                    <CheckCircleIcon className="services__modal-icon" />
                    <p>Posicione a marca da sua empresa</p>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* ================SERVICES 1==================== */}
        <div className="services__content">
          <div>
            <CodeIcon className="services__icon" />
            <h3 className="services__title">Frontend <br/> Developer</h3>
          </div>

          <span
            onClick={ modalOne }
            className="button button--flex button--small button--link services__button"
          >
            Ver mais
            <BiRightArrowAlt className="button__icon" />
          </span>

          {servicesOne ? (
            <div className="services__modal active-modal">
              <div className="services__modal-content">
                <h4 className="services__modal-title">Frontend <br/> Developer</h4>
                <RiCloseLine
                  onClick={ modalOne }
                  className="services__modal-close" 
                />

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <CheckCircleIcon className="services__modal-icon" />
                    <p>Desenvolvimento da interface de usuário</p>
                  </li>
                  <li className="services__modal-service">
                    <CheckCircleIcon className="services__modal-icon" />
                    <p>Desenvolvimento de página web</p>
                  </li>
                  <li className="services__modal-service">
                    <CheckCircleIcon className="services__modal-icon" />
                    <p>Posicione a marca da sua empresa</p>
                  </li>
                </ul>
              </div>
            </div>
          )
          :
          (
            <div className="services__modal">
              <div className="services__modal-content">
                <h4 className="services__modal-title">Frontend <br/> Developer</h4>
                <RiCloseLine
                  onClick={ modalOne }
                  className="services__modal-close"
                />

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <CheckCircleIcon className="services__modal-icon" />
                    <p>Desenvolvimento da interface de usuário</p>
                  </li>
                  <li className="services__modal-service">
                    <CheckCircleIcon className="services__modal-icon" />
                    <p>Desenvolvimento de página web</p>
                  </li>
                  <li className="services__modal-service">
                    <CheckCircleIcon className="services__modal-icon" />
                    <p>Posicione a marca da sua empresa</p>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>

      </div>

    </section>
  )
}
