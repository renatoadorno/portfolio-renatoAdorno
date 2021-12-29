import React, { useState } from 'react'

import { AcademicCapIcon } from '@heroicons/react/outline'
import { BriefcaseIcon } from '@heroicons/react/outline'
import { CalendarIcon } from '@heroicons/react/outline'

export default function Qualification() {
  const [showEducation, setShowEducation] = useState(true);
  const [showWork, setShowWork] = useState(false);

  const showContentOne = () => {
    if(showEducation === false) {
      return (
        setShowEducation(true),
        setShowWork(false)
      )
    } 
  }

  const showContentTwo = () => {
    if(showWork === false) {
      return (
        setShowEducation(false),
        setShowWork(true)
      )
    }
  }

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualificações</h2>
      <span className="section__subtitle">Minha jornada pessoal</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          {showEducation ? (
            <div
              onClick={ showContentOne }
              className="qualification__button button--flex qualification__button--active"
            >
              <AcademicCapIcon className="qualification__icon" />
              Educação 
            </div>
          )
          :
          (
            <div
            onClick={ showContentOne }
            className="qualification__button button--flex"
            >
            <AcademicCapIcon className="qualification__icon" />
            Educação 
            </div>
          )}

          {showWork ? (
            <div
              onClick={ showContentTwo }
              className="qualification__button button--flex qualification__button--active"
            >
              <BriefcaseIcon className="qualification__icon" />
              Trabalho 
            </div>
          )
          :
          (
            <div
              onClick={ showContentTwo }
              className="qualification__button button--flex"
            >
              <BriefcaseIcon className="qualification__icon" />
              Trabalho 
            </div>
          )}
        </div>

        <div className="qualification__sections">
          {/* ================= CONTENT 1===================== */}
          {showEducation && (
            <div className="qualification__content qualification__active" data-content id="education">

              {/* ========== QUALIFICATION 1 =========== */}
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">Engenharia da Computação</h3>
                  <span className="qualification__subtitle">Unifev - Votuporanga</span>
                  <div className="qualification__calendar">
                    <CalendarIcon className="qualification__icon" />
                    2019 - 2020 / Incompleto
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>

              {/* ========== QUALIFICATION 2 =========== */}
              <div className="qualification__data">
                <div></div>

                <div>
                  <span className="qualification__rounder"></span>
                  {/* <span className="qualification__line"></span> */}
                </div>

                <div>
                  <h3 className="qualification__title">Desenvolvimento Web</h3>
                  <span className="qualification__subtitle">Trybe</span>
                  <div className="qualification__calendar">
                    <CalendarIcon className="qualification__icon" />
                    2021 - 2022 / Cursando
                  </div>
                </div>


              </div>

            </div>
          )}


          {/* ================= CONTENT 2===================== */}
          {showWork && (
            <div className="qualification__content qualification__active" data-content id="work">

              {/* ========== QUALIFICATION 1 =========== */}
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">Atendente de telemarketing</h3>
                  <span className="qualification__subtitle">Vikstar - Votuporanga</span>
                  <div className="qualification__calendar">
                    <CalendarIcon className="qualification__icon" />
                    2019 - 2020
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>

              {/* ========== QUALIFICATION 2 =========== */}
              <div className="qualification__data">
                <div></div>
                <div>
                  <span className="qualification__rounder"></span>
                  {/* <span className="qualification__line"></span> */}
                </div>
                <div>
                  <h3 className="qualification__title">Web designer / Gestor de Trafego</h3>
                  <span className="qualification__subtitle">Autonomo</span>
                  <div className="qualification__calendar">
                    <CalendarIcon className="qualification__icon" />
                    2020 - 2021
                  </div>
                </div>


              </div>

            </div>
          )}


        </div>
      </div>
    </section>
  )
}
