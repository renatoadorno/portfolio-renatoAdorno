import React from 'react'

import { BsWhatsapp } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { BiSend } from "react-icons/bi";

export default function Contact() {
  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Contato</h2>
      <span className="section__subtitle">Entre em contato comigo</span>

      <div className="contact__container container grid">
        <div>
          {/* ==============Whatsapp================== */}
          <div className="contact__information">
            <BsWhatsapp className="contact__icon--whats" />

            <div className="contact__text">
              <h3 className="contact__title">WhatsApp</h3>
              <span className="contact__subtitle">67 99605-9592</span>
            </div>
          </div>

          {/* ==============Email================== */}
          <div className="contact__information">
            <HiOutlineMail className="contact__icon" />

            <div>
              <h3 className="contact__title">Email</h3>
              <span className="contact__subtitle">renattoadorno@gmail.com</span>
            </div>
          </div>
        </div>

        <form action="" className="contact__form grid">
          <div className="contact__inputs grid">
            <div className="contact__content">
              <label htmlFor="" className="contact__label">Nome</label>
              <input type="text" className="contact__input" />
            </div>
            <div className="contact__content">
              <label htmlFor="" className="contact__label">Email</label>
              <input type="email" className="contact__input" />
            </div>
          </div>

          <div className="contact__content">
            <label htmlFor="" className="contact__label">Projeto</label>
            <input type="text" className="contact__input" />
          </div>
          <div className="contact__content">
            <label htmlFor="" className="contact__label">Mensagem</label>
            <textarea name="" id="" cols="0" rows="7" className="contact__input"></textarea>
          </div>

          <div>
            <a href="" className="button button--flex">
              Enviar Mensagem
              <BiSend className="button__icon" />
            </a>
          </div>
        </form>
      </div>
    </section>
  )
}
