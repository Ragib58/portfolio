import React from 'react'
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Ragib Shahriar</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>
                  <li>
                      <a href="#portfolio" className="footer__link">Projects</a>
                  </li>
                  <li>
                      <a href="#testimonial" className="footer__link">Testimonials</a>
                  </li>
            </ul>

            <div className="footer__social">
                  <a href="https://www.facebook.com/ragib58shahriar/" className="footer__social-link" target="_blank">
                      <i class="bx bxl-facebook"></i>
                  </a>

                  <a href="https://www.instagram.com/ragib58/" className="footer__social-link" target="_blank">
                      <i class="bx bxl-instagram"></i>
                  </a>

                  <a href="https://wa.me/+8801774896515" className="footer__social-link" target="_blank">
                      <i class="bx bxl-whatsapp"></i>
                  </a>
            </div>

            <span className="footer__copy">&#169; Ragibdev. All rights reserved</span>
        </div>
    </footer>
  )
}

export default Footer
