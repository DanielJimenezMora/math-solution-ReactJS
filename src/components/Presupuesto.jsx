import React, { Fragment, useState, useEffect } from "react";

const Presupuesto = () => {
  //Definir el state
  const [cantidad, guardarCantidad] = useState(0);
  const [error, guardarError] = useState(false);
  const [presupuesto, guardarPresupuesto] = useState(0);
  const [restante, guardarRestante] = useState(0);
  const [mostrarpregunta, actualizarPregunta] = useState(true);
  const [errorgasto, guardarErrorGasto] = useState(false);
  const [cantidadgasto, guardarCantidadGasto] = useState(0);
  const [gastos, guardarGastos] = useState([]);
  const [gasto, guardarGasto] = useState({});
  const [nombre, guardarNombre] = useState("");
  const [creargasto, guardarCrearGasto] = useState(false);

  //useEffect que actualiza el restante
  useEffect(() => {
    if (creargasto) {
      //Agrega el nuevo presupuesto
      guardarGastos([...gastos, gasto]);

      //resta del presupuesto actual
      const presupuestoRestante = restante - gasto.cantidadgasto;
      guardarRestante(presupuestoRestante);

      //Resetear a false
      guardarCrearGasto(false);
    }
  }, [gasto, creargasto, gastos, restante]);

  const revisarPresupuesto = (presupuesto, restante) => {
    let clase;
    if (presupuesto / 4 > restante) {
      clase = "gasto gasto-peligro";
    } else if (presupuesto / 2 > restante) {
      clase = "gasto gasto-cuidado";
    } else {
      clase = "gasto gasto-b";
    }
    return clase;
  };

  //funcion que lee el presupuesto
  const definirPresupuesto = (e) => {
    guardarCantidad(parseInt(e.target.value, 10));
  };

  //Submit para definir el presupuesto
  const agregarPresupuesto = (e) => {
    e.preventDefault();

    //validar
    if (cantidad < 1 || isNaN(cantidad)) {
      guardarError(true);
      return;
    }

    //si pasa la validacion
    guardarError(false);
    guardarPresupuesto(cantidad);
    guardarRestante(cantidad);
    actualizarPregunta(false);
  };

  //cuando el usuario agregue un gasto
  const agregarGasto = (e) => {
    e.preventDefault();

    //validar
    if (cantidadgasto < 1 || isNaN(cantidadgasto) || nombre.trim === "") {
      guardarErrorGasto(true);
      return;
    }

    guardarErrorGasto(false);

    if (nombre === "") {
      guardarErrorGasto(true);
      return;
    }

    //construir el gasto
    const gasto = {
      nombre,
      cantidadgasto,
      id: Math.floor(Math.random() * 999000000),
    };

    //pasar el gasto al componente principal
    if (restante < gasto.cantidadgasto) {
      guardarCrearGasto(false);
      alert("No puede gastar mas que el presupuesto");
    } else if (restante > gasto.cantidadgasto) {
      guardarGasto(gasto);
      guardarCrearGasto(true);
    }

    //resetear el form
    guardarNombre("");
    guardarCantidadGasto(0);
  };

  return (
    <Fragment>
      <div className="containerMain">
        <div class="center">
          <div className="container-full text-blue">
            <h1>Presupuesto</h1>
            <hr />
            {error ? (
              <p className="warning">
                Tienes que ingresar un presupuesto, y debe de ser mayor a "0"
                (cero).
              </p>
            ) : null}
            {mostrarpregunta ? (
              <form onSubmit={agregarPresupuesto}>
                <label className="label">Ingresa tu presupuesto:</label>
                <input
                  type="number"
                  placeholder="Solo puedes ingresar números"
                  className="input-l"
                  onChange={definirPresupuesto}
                />
                <button className="btn-green-s-full" type="submit">
                  + Agregar
                </button>
              </form>
            ) : (
              <div>
                <div className="container-full-m text-center">
                  <form onSubmit={agregarGasto}>
                    <h2>Agrega tus gastos aqui</h2>
                    <label className="label">Nombre del gasto:</label>
                    <input
                      type="text"
                      placeholder="Ej. Transporte"
                      className="input-l"
                      value={nombre}
                      onChange={(e) => guardarNombre(e.target.value)}
                    />
                    <label className="label">Cantidad del gasto:</label>
                    <input
                      type="number"
                      placeholder="Ej. 300"
                      className="input-l"
                      value={cantidadgasto}
                      onChange={(e) =>
                        guardarCantidadGasto(parseInt(e.target.value, 10))
                      }
                    />
                    <button className="btn-green-s-full" type="submit">
                      + Agregar gasto
                    </button>
                    {errorgasto ? (
                      <p className="warning">
                        Ambos campos son obligatorios, o presupuesto incorrecto.
                      </p>
                    ) : null}
                  </form>
                </div>
                <div className="container-full-m">
                  <h1>Listado</h1>
                  {gastos.map((gasto) => (
                    <p className="list">
                      {gasto.nombre}{" "}
                      <span className="text-r">$ {gasto.cantidadgasto}</span>{" "}
                    </p>
                  ))}
                  <div className="gasto gasto-p">
                    Presupuesto: $ {presupuesto}
                  </div>
                  <div className={revisarPresupuesto(presupuesto, restante)}>
                    Restante: $ {restante}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Presupuesto;
