import React, { Fragment, useState } from "react";


const Binario = () => {

  //funcion Binario a decimal
  const binarioAdecimal = binario => {
    let digitos = binario.split("").reverse();
    let potencia = [];
    let decimal = 0;
    for( let i=0; i<digitos.length; i++ ){
      potencia.push(digitos[i]*Math.pow(2,[i]))
      decimal += potencia[i];
    }
    return decimal;
  }

  //Arreglo de textos
  const [entradas, guardarEntradas] = useState([]);

  //funcion que tome los textos actuales, y agregue el nuevo
  const crearEntrada = entrada =>{
    guardarEntradas([...entradas, entrada]);
  }

  //Crear State de textos que se ingresan
  const [entrada, actualizarEntrada] = useState({
    textoIngresado: '',
  })

  const [error, actualizarError] = useState(false)

  //Funcion que se ejecuta cada que se escriba en el input
  const actualizarState = e => {
    actualizarEntrada({
      ...entrada,
      [e.target.name]: e.target.value
    })
  }

  //Extraer los valores
  const { textoIngresado } = entrada;

  //Cuando el usuario presiona Agrgar
  const submitEntrada = e => {
    e.preventDefault();

    // Validar
    if(textoIngresado.trim() === ''){
      actualizarError(true);
      return;
    }

    //Eliminar el mensaje error
    actualizarError(false);

    //Colocar en el state principal
    if(entradas.length <10){
      // Validar si se ingresaron otros digitos que no sean binarios
      let tem = textoIngresado.split("");
      let arrTem=[];
      for( let i=0; i<tem.length; i++ ){
        if( tem[i] === "0" || tem[i] === "1" ){
          arrTem.push(tem[i])
        } else {
          actualizarError(true);
          actualizarEntrada({
            textoIngresado: ''
          })
          return
        }
        }
      crearEntrada(entrada);
    } else {
      alert('No es posible agregar mas de 10 elementos a la lista')
    }

    //Reiniciar el form
    actualizarEntrada({
      textoIngresado: ''
    })

  }


  return (
    <Fragment>
      <div className="containerMain">
        <div class="center">
          <div className="container-full text-blue">
              <h1>Binario a Decimal</h1>
              <hr />
              <p className="text-full">Esta aplicación transforma números <strong>binarios</strong> a <strong>decimales</strong>, por lo que solo es posible ingresar números 1 y 0. Puedes ingresar hasta 10 números para mostrar en la lista..</p>
            </div>
          <div className="container-full text-blue">
            <form
              className="form"
              onSubmit={submitEntrada}
            >
              <label className="text-full">Ingrese un numero binario: </label>
              <input
                type="number"
                name="textoIngresado"
                placeholder="Ej. 1001"
                onChange={actualizarState}
                value={textoIngresado}
              />
              <button type="submit" className="btn-green-s-r" >+ Agregar</button>
              { error ? <p className="warning">* Es necesario ingresar algún número, y solo se aceptan binarios.</p> : null }
            </form>
            </div>
            <div className="container-m">
              <h2>Binario</h2>
                <hr />
                {entradas.map((entrada, i) => (
                  <p className="text-full"><strong>{i+1}.-</strong>{entrada.textoIngresado}</p>
                ))}
              </div>
            <div className="container-m">
              <h2>Decimal</h2>
                <hr />
                {entradas.map((entrada, i) => (
                  <p className="text-full"><strong>{i+1}.-</strong>{binarioAdecimal(entrada.textoIngresado)}</p>
                ))}
              </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Binario;
