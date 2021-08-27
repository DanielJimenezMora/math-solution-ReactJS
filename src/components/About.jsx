import React, { Fragment } from "react";

const About = () => {
  return (
    <Fragment>
      <div className="containerMain">
        <div class="center">
          <div className="container-full text-blue">
            <h2>Tecnologías utilizadas en el desarrollo de esta aplicación </h2>
          </div>
          <div className="target">
            <img src="../ai.png" alt="" className="img-info" />
            <div className="target-btn-s">
                <span className="text-target"><strong>Ilustrator</strong><br />Fue necesario usar esta herramienta para el diseño de logos y/o iconos.</span>
              <button className="btn-green-s-l">
              <a href="https://www.adobe.com/mx/products/illustrator.html?sdid=KQPQL&mv=search&ef_id=Cj0KCQjwsZKJBhC0ARIsAJ96n3Vzkqc8vWbycwseOBaZnIaRSWAyxZDfricyY0hXIZ-Ejjirfl7l8soaAjHlEALw_wcB:G:s&s_kwcid=AL!3085!3!473120545179!e!!g!!adobe%20illustrator!188198382!10039623222" target-blank>Ir al sitio web de Adobe illustrator</a>
              </button>
            </div>
          </div>
          <div className="target">
            <img src="../xd.png" alt="" className="img-info" />
            <div className="target-btn-s">
            <span className="text-target"><strong>Xd</strong><br />Para hacer el diseño de la interfaz y el maquetado se utilizó adobe Xd.</span>
              <button className="btn-green-s-l">
                <a href="https://www.adobe.com/mx/products/xd.html" target-blank>Ir al sitio web de Adobe Xd</a> 
              </button>
            </div>
          </div>
          <div className="target">
            <img src="../git.png" alt="" className="img-info" />
            <div className="target-btn-s">
            <span className="text-target"><strong>Git</strong><br />Git es el control de versiones que se utilizó durante el desarrollo.</span>
              <button className="btn-green-s-l">
                <a href="https://git-scm.com/"  target-blank>Ir al sitio web de git</a>
              </button>
            </div>
          </div>
          <div className="target">
            <img src="../github.png" alt="" className="img-info" />
            <div className="target-btn-s">
            <span className="text-target"><strong>Github</strong><br />Gitgub es el repositorio en el cual se encuentra el código fuente de esta aplicación.</span>
              <button className="btn-green-s-l">
                  <a href="#" target-blank>Ir al repositorio github de esta app</a>
              </button>
            </div>
          </div>
          <div className="target">
            <img src="../react.png" alt="" className="img-info" />
            <div className="target-btn-s">
            <span className="text-target"><strong>React JS</strong><br />React JS fue la librería que se empleó en el desarrollo de la plataforma.</span>
              <button className="btn-green-s-l">
              <a href="https://es.reactjs.org/" target-blank>Ir al sitio web React JS</a>
              </button>
            </div>
          </div>
          <div className="target">
            <img src="../js.png" alt="" className="img-info" />
            <div className="target-btn-s">
            <span className="text-target"><strong>JavaScript</strong><br />JavaScript es un lenguaje de programación que permite que funcione la aplicación. </span>
              <button className="btn-green-s-l">
              <a href="https://www.javascript.com/" target-blank>Ir a la documentación de JavaScript</a>
              </button>
            </div>
          </div>
          <div className="target">
            <img src="../html.png" alt="" className="img-info" />
            <div className="target-btn-s">
            <span className="text-target"><strong>HTML5</strong><br />Es el componente que define el significado y la estructura del contenido.</span>
              <button className="btn-green-s-l">
              <a href="https://developer.mozilla.org/es/docs/Web/HTML" target-blank>Ir a la documentación de HTML</a>
              </button>
            </div>
          </div>
          <div className="target">
            <img src="../css.png" alt="" className="img-info" />
            <div className="target-btn-s">
            <span className="text-target"><strong>CSS3</strong><br />CSS se utilizó para dar diseño, definir y crear la presentación de la web.</span>
              <button className="btn-green-s-l">
              <a href="https://developer.mozilla.org/es/docs/Web/CSS" target-blank>Ir a la documentación de CSS</a>
              </button>
            </div>
          </div>
          <div className="target">
            <img src="../netlify.png" alt="" className="img-info" />
            <div className="target-btn-s">
            <span className="text-target"><strong>Netlify</strong><br />Es aquí donde se encuentra hospedada esta plataforma.</span>
              <button className="btn-green-s-l">
              <a href="https://www.netlify.com/" target-blank>Ir al sitio web de Netlify</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default About;
