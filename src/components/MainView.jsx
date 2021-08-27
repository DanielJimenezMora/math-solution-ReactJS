import React, {Fragment} from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import About from '../components/About';
import Binario from '../components/Binario';
import Area from '../components/Area';
import Palindrome from '../components/Palindrome';
import Presupuesto from '../components/Presupuesto';

const MainView = () => {


    return (
        <Fragment>
            <Link>
            <Switch>
                <Route path='/binario-decimal'>
                    <Binario />
                </Route>
                <Route path='/areas-y-perimetros'>
                    <Area />
                </Route>
                <Route path='/palindromo'>
                    <Palindrome />
                </Route>
                <Route path='/presupuesto'>
                    <Presupuesto />
                </Route>
                <Route path='/acerca'>
                    <About />
                </Route>
            </Switch>
            <div className="containerMain" >
                {/* Header */}
                <div className="headerMain">
                    <img src="../icon-home.png" alt="" className="icon-home-title" />
                    <h1 className="title">Inicio</h1>
                    <div className="logo-right" ><img src="../MathSolution.png" alt=""/></div>
                </div>
                {/* Cont */}
                <div className="center">
                    {/* Container img */}
                    <div className="container-s">
                        <img src="../icon-dasboard.png" alt="img" className="icon-container" />
                    </div>
                    {/* Container acerca de */}
                    <div className="container-l">
                        <img src="../icon-app.png" alt="" className="icon-title" />
                        <h2>Acerca de la aplicación</h2>
                        <hr />
                        <p className="text-left"><strong>Math Solution</strong> es una aplicación que nos brinda funciones matemáticas que nos dan resultados rápidos en ejercicios de obtención de áreas y perímetros, transformación de números binarios a decimales o validar si una frase es palíndromo.</p>
                        <div className="footer-btn-l">
                        <button className="btn-green-s-r"><Link to="/acerca">Ver más</Link></button>
                        </div>
                    </div>
                    {/* Container 3 binario*/}
                    <div className="container-m">
                        <img src="icon-bin.png" alt="" className="icon-title" />
                        <h2>Binario a decimal</h2>
                        <hr />
                        <p className="text-left">Introduce números en sistema de numeración binaria y conviértelos a numeración decimal.</p>
                        <div className="footer-btn-m">
                        <button className="btn-green-s-r"><Link to="/binario-decimal">Ver más</Link></button>
                        </div>
                    </div>
                    {/* Container areas y perimetros */}
                    <div className="container-m">
                        <img src="../icon-sq.png" alt="" className="icon-title" />
                        <h2>Áreas y Perímetros</h2>
                        <hr />
                        <p className="text-left">Selecciona una de las figuras y calcula el área y/o perímetro con las medidas que desees colocar.</p>
                        <div className="footer-btn-m">
                        <button className="btn-green-s-r"><Link to="/areas-y-perimetros">Ver más</Link></button>
                        </div>
                    </div>
                    {/* Container palindromo */}
                    <div className="container-m">
                        <img src="../icon-palindrome.png" alt="" className="icon-title" />
                        <h2>Palíndromo</h2>
                        <hr />
                        <p className="text-left">Los palíndromos son palabras o frases que al leerse de izquierda a derecha y viceversa expresan o tienen el mismo sentido.</p>
                        <div className="footer-btn-m">
                        <button className="btn-green-s-r"><Link to="/palindromo">Ver más</Link></button>
                        </div>
                    </div>
                    {/* Container presupuesto */}
                    <div className="container-m">
                        <img src="../icon-money.png" alt="" className="icon-title" />
                        <h2>Presupuesto mensual</h2>
                        <hr />
                        <p className="text-left">Ingresa cuál es tu ingreso mensual y tus gastos para calcular tu presupuesto mensual.</p>
                        <div className="footer-btn-m">
                        <button className="btn-green-s-r"><Link to="/presupuesto">Ver más</Link></button>
                        </div>
                    </div>
                </div>
            </div>
            </Link>
        </Fragment>
    );
}

export default MainView;

