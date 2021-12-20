import React from 'react'

import { AcademicCapIcon } from '@heroicons/react/outline'
import { BriefcaseIcon } from '@heroicons/react/outline'

export default function Qualification() {
  return (
    <section className="qualification section">
      <h2 className="section__title">Qualificações</h2>
      <span className="section__subtitle">Minha jornada pessoal</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div className="qualification__button button--flex">
            <AcademicCapIcon className="qualification__icon" />
            Educação 
          </div>

          <div className="qualification__button button--flex">
            <BriefcaseIcon className="qualification__icon" />
            Trabalho 
          </div>
        </div>

        <div className="qualification__sections">
          {/* ================= CONTENT 1===================== */}
          <div className="qualification__content">
            {/* ========== QUALIFICATION 1 =========== */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Engenharia da Computação</h3>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
