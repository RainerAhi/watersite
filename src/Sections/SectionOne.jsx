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
              <h1>Experiencia</h1>
              <h1>Home</h1>
              <h1>Preguntas Frecuentes</h1>
              <h1>Tienda en Línea</h1>
              <h1>Blog</h1>
          </div>
          <div className="right-content">
              <h1>Agenda tu demo</h1>
          </div>
      </div>
      <div className="headline-container">
          <div id="text-behind">CAMBIA<br />TU AGUA</div>
          <div id="text-behind-blur">CAMBIA<br />TU AGUA</div>
          <div id="text-front">CAMBIA<br />TU AGUA</div>
      </div>
      </div>
  </section>
    )
}