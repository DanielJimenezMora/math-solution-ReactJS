import React, {Fragment, useEffect} from 'react';

const Triangulo = () => {


  const cuadrado = () => {
    let template = `
    <small className="text-full">Lado: </small>
    <input type="text" className="" />
    <div className="cuadrado"></div>
    `
    return template
  }


  useEffect(() => {
    const selectElementFig = document.querySelector('.selectorFigura');

    selectElementFig.addEventListener('change', (event) => {
      const resultadoFigura = document.querySelector('.figura');
      if(event.target.value === "circulo" ){
         resultadoFigura.innerHTML = `<div>Elejiste ${event.target.value}</div>`
      }else if(event.target.value === "triangulo" ) {
         resultadoFigura.innerHTML = `<div>Elejiste ${event.target.value}</div>`
      }else if(event.target.value === "cuadrado" ) {
         resultadoFigura.innerHTML = cuadrado();
      }else if(event.target.value === "rectangulo" ) {
        resultadoFigura.innerHTML = `<div>Elejiste ${event.target.value}</div>`
     }else if(event.target.value === "rombo" ) {
      resultadoFigura.innerHTML = `<div>Elejiste ${event.target.value}</div>`
   }
    });
  })

  


    const formula = {
      area: [
        "circulo",
        "triangulo",
        "cuadrado",
        "rectangulo",
        "rombo"
      ],
      perimetro: [
        "circulo",
        "triangulo",
        "cuadrado",
        "rectangulo",
        "rombo"
      ]
    }

    return (
        <Fragment>
        <div className="containerMain">
          <div class="center">
          <div className="container-full-b text-blue">
              <h1>Áreas y perímetros</h1>
              <hr />
              <form
              className="form labels"
            >
              <label className="text-full">Seleccione que desea calcular  </label>
    {/*  */}
              <select id="selectorForula" className="text-full" name="selectorFormula">
                <option id="tarea" value="0" name="vacio" >Elige una opción</option>
                <option id="tarea" value="1" name="area" on>Área</option>
                <option id="tarea" value="2" name="perimetro" >Perímetro</option>
              </select>
              <br />
              <br />

              <label className="text-full">Figura </label>
    {/*  */}
              <select className="text-full selectorFigura" name="selectorFigura" >
                <option id="figura" value="" name="" >Elige una figura</option>
                <option id="figura" value="circulo" name="circulo">Circulo</option>
                <option id="figura" value="triangulo" name="triangulo" >Triángulo</option>
                <option id="figura" value="cuadrado" name="cuadrado" >Cuadrado </option>
                <option id="figura" value="rectangulo" name="rectangulo" >Rectángulo</option>
                <option id="figura" value="rombo" name="rectangulo" >Rombo</option>
              </select>
              
              <small className="smallText">Fórmula: <small className="escribirFormula"></small> </small>

              <div className="etiquetas mostrar"></div>
              <div className="figura"></div>
            <div className="container-ss">
            <h1 className="center">Resultado</h1>
              <hr />
              <p></p>
              </div>
            </form>


            <form class="resultadoFigura form labels"></form>

            </div>
          </div>
        </div>
      </Fragment>
    );
}


export default Triangulo;