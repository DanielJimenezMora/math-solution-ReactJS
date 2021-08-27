import React, { Fragment, useState } from "react";


const Palindrome = () => {

  //funcion Palindromo
  const isPalindrome = text => {
    if( (text.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()) === (text.replace(/[^a-zA-Z0-9]/g, '').toLowerCase().split('').reverse().join('')) ){
      return `Si es palíndromo`
    }else {
      return `No es palíndromo`
    }
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

    //Asignar ID
    entrada.id = Math.floor(Math.random()*999000000);

    //Colocar en el state principal
    if(entradas.length <10){
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
              <h1>Palíndromo</h1>
              <hr />
              <p className="text-full">Los <strong>palíndromos</strong> son palabras o frases que al leerse de izquierda a derecha y viceversa expresan o tienen el mismo sentido.</p>
            </div>
          <div className="container-full text-blue">
            <form
              className="form"
              onSubmit={submitEntrada}
            >
              <label className="text-full">Ingrese una palabra o frase: </label>
              <input
                type="text"
                name="textoIngresado"
                onChange={actualizarState}
                value={textoIngresado}
              />
              <button type="submit" className="btn-green-s-r" >+ Agregar</button>
              { error ? <p className="warning">* No se ha ingresado ningún texto.</p> : null }
            </form>
            </div>
            <div className="container-m">
              <h2>Palabra o frase</h2>
                <hr />
                {entradas.map((entrada, i) => (
                  <p className="text-full"><strong>{i+1}.-</strong>{entrada.textoIngresado}</p>
                ))}
              </div>
            <div className="container-m">
              <h2>¿Es palíndromo?</h2>
                <hr />
                {entradas.map((entrada, i) => (
                  <p className="text-full"><strong>{i+1}.-</strong>{isPalindrome(entrada.textoIngresado)}</p>
                ))}
              </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Palindrome;
