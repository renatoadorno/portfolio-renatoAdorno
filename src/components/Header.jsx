import React, { useState } from 'react'

import { HomeIcon } from '@heroicons/react/outline'
import { UserIcon } from '@heroicons/react/outline'
import { DocumentTextIcon } from '@heroicons/react/outline'
import { BriefcaseIcon } from '@heroicons/react/outline'
import { PhotographIcon } from '@heroicons/react/outline'
import { PaperAirplaneIcon } from '@heroicons/react/outline'
import { ViewGridIcon } from '@heroicons/react/outline'
import { XIcon } from '@heroicons/react/outline'

//definir um stado com valor buleano qua ao apertar adiciona a classe show-menu linha 25

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const funcShowMenu = () => {
    setShowMenu(true);
  }

  const funcCloseMenu = () => {
    setShowMenu(false);
  }

  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="#home" className="nav__logo">
          Renato Adorno
        </a>

        { showMenu ? (
          <div className="nav__menu show-menu" id="nav-menu">
            <ul className="nav__list grid">
              <li className="nav__item">
                <a href="#home" className="nav__link" onClick={ funcCloseMenu }>
                  <HomeIcon className="nav__icon" /> Home
                </a>
              </li>
              <li className="nav__item">
                <a href="#about" className="nav__link" onClick={ funcCloseMenu }>
                  <UserIcon className="nav__icon" /> About
                </a>
              </li>
              <li className="nav__item">
                <a href="#skills" className="nav__link" onClick={ funcCloseMenu }>
                  <DocumentTextIcon className="nav__icon" /> Skills
                </a>
              </li>
              <li className="nav__item">
                <a href="#services" className="nav__link" onClick={ funcCloseMenu }>
                  <BriefcaseIcon className="nav__icon"/> Services
                </a>
              </li>
              <li className="nav__item">
                <a href="#portfolio" className="nav__link" onClick={ funcCloseMenu }>
                  <PhotographIcon className="nav__icon" /> Portfolio
                </a>
              </li>
              <li className="nav__item">
                <a href="#contact" className="nav__link" onClick={ funcCloseMenu }>
                  <PaperAirplaneIcon className="nav__icon" /> Contato
                </a>
              </li>
            </ul>
            <button onClick={ funcCloseMenu }>
              <XIcon className="nav__icon nav__close" id="nav-close"/>
            </button>
          </div>
        )
        :
        (
          <div className="nav__menu" id="nav-menu">
            <ul className="nav__list grid">
              <li className="nav__item">
                <a href="#home" className="nav__link">
                  <HomeIcon className="nav__icon" /> Home
                </a>
              </li>
              <li className="nav__item">
                <a href="#about" className="nav__link">
                  <UserIcon className="nav__icon" /> About
                </a>
              </li>
              <li className="nav__item">
                <a href="#skills" className="nav__link">
                  <DocumentTextIcon className="nav__icon" /> Skills
                </a>
              </li>
              <li className="nav__item">
                <a href="#services" className="nav__link">
                  <BriefcaseIcon className="nav__icon"/> Services
                </a>
              </li>
              <li className="nav__item">
                <a href="#portfolio" className="nav__link">
                  <PhotographIcon className="nav__icon" /> Portfolio
                </a>
              </li>
              <li className="nav__item">
                <a href="#contact" className="nav__link">
                  <PaperAirplaneIcon className="nav__icon" /> Contato
                </a>
              </li>
            </ul>
            <button onClick={ funcCloseMenu }>
              <XIcon className="nav__icon nav__close" id="nav-close"/>
            </button>
          </div>
        )}

        <div className="nav__btns">
          <button 
            className="nav__toggle"
            id="nav-toggle"
            onClick={ funcShowMenu }
          >
            <ViewGridIcon className="nav__icon"/>
          </button>
        </div>
      </nav>
    </header>
  )
}
