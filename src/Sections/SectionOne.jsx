import React, { useEffect, useState } from "react";

export const SectionOne = () => {


    return (
      <section className="section one">
      <div className="two-box" >
      <div className="nav">
          <div className="left-content">
              <img className="smalllogo" src="/logoimage.png" alt="Small Logo" />
          </div>
          <div className="center">
              <h1><a href="https://kangenwater.com.mx/" target="_blank" >Experiencia</a></h1>
              <h1><a href="https://filtrokangen.com.mx/" target="_blank" >Home</a></h1>
              <h1><a href="https://tienda.kangenwater.com.mx/frequently-asked-questions/" target="_blank">Preguntas Frecuentes</a></h1>
              <h1><a href="https://tienda.kangenwater.com.mx/products/" target="_blank">Tienda en Línea</a></h1>
              <h1><a href="https://tienda.kangenwater.com.mx/blog-two-columns-with-sidebar/" target="_blank">Blog</a></h1>
          </div>
          <div className="right-content">
              <h1>Agenda tu demo</h1>
          </div>
      </div>
      <div className="headline-container">
          <div id="text-behind">CAMBIA TU AGUA<br />CAMBIA TU VIDA</div>
          <div id="text-behind-blur">CAMBIA TU AGUA<br />CAMBIA TU VIDA</div>
          <div id="text-front">CAMBIA TU AGUA<br />CAMBIA TU VIDA</div>
      </div>
      </div>
  </section>
    )
}