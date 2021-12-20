import React, { useState } from 'react'

import { BsBraces } from "react-icons/bs";
import { FiChevronDown } from "react-icons/fi";
import { FiServer } from "react-icons/fi";
import { HiOutlineColorSwatch } from "react-icons/hi";

export default function Skills() {
  const [skillsOne, setSkillsOne] = useState(false);
  const [skillsTwo, setSkillsTwo] = useState(false);
  const [skillsThree, setSkillsThree] = useState(false);

  const toggleOne = () => {
    if(skillsOne === false) {
      return (
        setSkillsTwo(false),
        setSkillsThree(false),
        setSkillsOne(true)
      );
    } else return setSkillsOne(false);
  }

  const toggleTwo = () => {
    if(skillsTwo === false) {
      return (
        setSkillsTwo(true),
        setSkillsThree(false),
        setSkillsOne(false)
      );
    } else return setSkillsTwo(false);
  }

  const toggleThree = () => {
    if(skillsThree === false) {
      return (
        setSkillsTwo(false),
        setSkillsThree(true),
        setSkillsOne(false)
      );
    } else return setSkillsThree(false);
  }

  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">Minhas Tecnologias</span>

      <div className="skills__container container grid">
        {/* ==============SKILLS 1============= */}
        {skillsOne ? (
          <div className="skills__content skills__open">
            <div className="skills__header">
              <BsBraces className="skills__icon" />

              <div onClick={ toggleOne }>
                <h1 className="skills__title">Frontend Developer</h1>
                <span className="skills__subtitle">+2 meses de experiencia</span>
              </div>

              <FiChevronDown onClick={ toggleOne } className="skills__arrow" />
            </div>

            <div className="skills__list grid">

              {/* =====HTML===== */}
              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">HTML</h3>
                  <span className="skills__number">90%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__html"></span>
                </div>
              </div>

              {/* =====CSS===== */}
              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">CSS</h3>
                  <span className="skills__number">60%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__css"></span>
                </div>
              </div>

              {/* =====JavaScript===== */}
              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">JavaScript</h3>
                  <span className="skills__number">78%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__js"></span>
                </div>
              </div>

              {/* =====REACT===== */}
              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">React</h3>
                  <span className="skills__number">80%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__react"></span>
                </div>
              </div>

            </div>
          </div>
        )
        :
        (
          <div className="skills__content skills__close">
            <div className="skills__header">
              <BsBraces className="skills__icon" />

              <div onClick={ toggleOne }>
                <h1 className="skills__title">Frontend Developer</h1>
                <span className="skills__subtitle">+2 meses de experiencia</span>
              </div>

              <FiChevronDown onClick={ toggleOne } className="skills__arrow" />
            </div>

            <div className="skills__list grid">

              {/* =====HTML===== */}
              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">HTML</h3>
                  <span className="skills__number">90%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__html"></span>
                </div>
              </div>

              {/* =====CSS===== */}
              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">CSS</h3>
                  <span className="skills__number">60%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__css"></span>
                </div>
              </div>

              {/* =====JavaScript===== */}
              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">JavaScript</h3>
                  <span className="skills__number">78%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__js"></span>
                </div>
              </div>

              {/* =====REACT===== */}
              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">React</h3>
                  <span className="skills__number">80%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__react"></span>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* ==============SKILLS 2============= */}
        {skillsTwo ? (
          <div className="skills__content skills__open">
            <div className="skills__header">
              <FiServer className="skills__icon" />

              <div onClick={ toggleTwo }>
                <h1 className="skills__title">Backend Developer</h1>
                <span className="skills__subtitle">Adquirindo experiencia</span>
              </div>

              <FiChevronDown onClick={ toggleTwo } className="skills__arrow" />
            </div>

            <div className="skills__list grid">

              {/* =====Python===== */}
              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">Python</h3>
                  <span className="skills__number">0%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__python"></span>
                </div>
              </div>

              {/* =====TypeScript===== */}
              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">TypeScript</h3>
                  <span className="skills__number">10%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__ts"></span>
                </div>
              </div>

              {/* =====NodeJs===== */}
              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">NodeJS</h3>
                  <span className="skills__number">0%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__node"></span>
                </div>
              </div>

              {/* =====Docker===== */}
              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">Docker</h3>
                  <span className="skills__number">0%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__docker"></span>
                </div>
              </div>

              {/* =====SQL===== */}
              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">SQL</h3>
                  <span className="skills__number">0%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__sql"></span>
                </div>
              </div>

              {/* =====MongoDB===== */}
              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">MongoDB</h3>
                  <span className="skills__number">0%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__mongo"></span>
                </div>
              </div>

            </div>
          </div>
        )
        :
        (
          <div className="skills__content skills__close">
            <div className="skills__header">
              <FiServer className="skills__icon" />

              <div onClick={ toggleTwo }>
                <h1 className="skills__title">Backend Developer</h1>
                <span className="skills__subtitle">Adquirindo experiencia</span>
              </div>

              <FiChevronDown onClick={ toggleTwo } className="skills__arrow" />
            </div>

            <div className="skills__list grid">

              {/* =====Python===== */}
              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">Python</h3>
                  <span className="skills__number">0%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__python"></span>
                </div>
              </div>

              {/* =====TypeScript===== */}
              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">TypeScript</h3>
                  <span className="skills__number">10%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__ts"></span>
                </div>
              </div>

              {/* =====NodeJs===== */}
              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">NodeJS</h3>
                  <span className="skills__number">0%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__node"></span>
                </div>
              </div>

              {/* =====Docker===== */}
              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">Docker</h3>
                  <span className="skills__number">0%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__docker"></span>
                </div>
              </div>

              {/* =====SQL===== */}
              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">SQL</h3>
                  <span className="skills__number">0%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__sql"></span>
                </div>
              </div>

              {/* =====MongoDB===== */}
              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">MongoDB</h3>
                  <span className="skills__number">0%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__mongo"></span>
                </div>
              </div>

            </div>
          </div>
        )}


        {/* ==============SKILLS 3============= */}
        {skillsThree ? (
          <div className="skills__content skills__open">
            <div className="skills__header">
              <HiOutlineColorSwatch className="skills__icon" />

              <div onClick={ toggleThree }>
                <h1 className="skills__title">Web Design</h1>
                <span className="skills__subtitle">+1 ano de experiencia</span>
              </div>

              <FiChevronDown className="skills__arrow" />
            </div>

            <div className="skills__list grid">

              {/* =====Adobe Illustrator===== */}
              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">Adobe Illustrator</h3>
                  <span className="skills__number">70%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__illustrator"></span>
                </div>
              </div>

              {/* =====Photoshop===== */}
              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">Adobe Photoshop</h3>
                  <span className="skills__number">80%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__photoshop"></span>
                </div>
              </div>

              {/* =====Adobe XD===== */}
              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">Adobe XD</h3>
                  <span className="skills__number">58%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__xd"></span>
                </div>
              </div>

              {/* =====WordPress===== */}
              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">WordPress</h3>
                  <span className="skills__number">70%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__press"></span>
                </div>
              </div>

            </div>
          </div>
        )
        :
        (
          <div className="skills__content skills__close">
            <div className="skills__header">
              <HiOutlineColorSwatch className="skills__icon" />

              <div onClick={ toggleThree }>
                <h1 className="skills__title">Web Design</h1>
                <span className="skills__subtitle">+1 ano de experiencia</span>
              </div>

              <FiChevronDown className="skills__arrow" />
            </div>

            <div className="skills__list grid">

              {/* =====Adobe Illustrator===== */}
              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">Adobe Illustrator</h3>
                  <span className="skills__number">70%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__illustrator"></span>
                </div>
              </div>

              {/* =====Photoshop===== */}
              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">Adobe Photoshop</h3>
                  <span className="skills__number">80%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__photoshop"></span>
                </div>
              </div>

              {/* =====Adobe XD===== */}
              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">Adobe XD</h3>
                  <span className="skills__number">58%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__xd"></span>
                </div>
              </div>

              {/* =====WordPress===== */}
              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">WordPress</h3>
                  <span className="skills__number">70%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__press"></span>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  )
}
