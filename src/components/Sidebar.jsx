import React, { Fragment } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import MainView from '../components/MainView';
import Binario from '../components/Binario';
import Area from '../components/Area';
import Circulo from '../components/Circulo';
import Triangulo from '../components/Triangulo';
import Cuadrado from '../components/Cuadrado';
import Rectangulo from '../components/Rectangulo';
import Rombo from '../components/Rombo';
import Palindrome from '../components/Palindrome';
import Presupuesto from '../components/Presupuesto';
import About from '../components/About';

const Sidebar = () => {

    let visibilitySecondary = false;
    let visibilitySmall = false;

    const toggleAction = () => {
            document.querySelector(".sidebar").classList.toggle('active');
            document.querySelector(".container-sidebar-primary").classList.toggle('active');
            document.querySelector(".containerMain").classList.toggle('active');
            document.querySelector(".logo-nav").classList.toggle('active');
        }

    const showHiddenSecondary = () => {
        if(visibilitySecondary === false){
            document.querySelector(".container-sidebar-secondary").style.display="block";
            visibilitySecondary = true;
        }else{
            visibilitySecondary = false;
            return document.querySelector(".container-sidebar-secondary").style.display="none";
        }
    }

    const showHiddenSmall = () => {
        if(visibilitySmall === false){
            visibilitySmall = true;
            return document.querySelector(".container-sidebar-small").style.display="block";
        }else{
            visibilitySmall = false;
            return document.querySelector(".container-sidebar-small").style.display="none";
        }
    }

    return (
        <Fragment>
            <BrowserRouter>
            <Switch>
                <Route path='/acerca'>
                    <About />
                </Route>
                <Route path='/binario-decimal'>
                    <Binario />
                </Route>
                <Route path='/areas-y-perimetros'>
                    <Area />
                </Route>
                <Route path='/areas-y-perimetros-circulo'>
                    <Circulo />
                </Route>
                <Route path='/areas-y-perimetros-triangulo'>
                    <Triangulo />
                </Route>
                <Route path='/areas-y-perimetros-cuadrado'>
                    <Cuadrado />
                </Route>
                <Route path='/areas-y-perimetros-rectangulo'>
                    <Rectangulo />
                </Route>
                <Route path='/areas-y-perimetros-rombo'>
                    <Rombo />
                </Route>
                <Route path='/palindromo'>
                    <Palindrome />
                </Route>
                <Route path='/presupuesto'>
                    <Presupuesto />
                </Route>
                <Route path='/'>
                    <MainView />
                </Route>
            </Switch>
            <section className="nav">
                    <div className="nav-container">
                        <span onClick={toggleAction}><img src="../MathSolution.png" alt="" className="logo-nav" /></span>
                        <ul className="item-r">
                            <li><Link to="/">Inicio</Link> </li>
                            <li><Link to="/acerca">Acerca app</Link></li>
                        </ul>
                    </div>
                </section>
            <section className="sidebar">
            <span><img src="../MathSolution.png" alt="" className="logo" /></span>
            <hr />
            <div className="icon-toggle" onClick={toggleAction}>
                <span>&#9776;</span>
            </div>

            <ul className="container-sidebar-primary">
                <li onClick={toggleAction}><Link to="/" ><span className="text-blue">Inicio</span></Link></li>
                <li  onClick={showHiddenSecondary}><Link to="#" ><span className="text-blue">Funciones</span></Link></li>
                    <ol className="container-sidebar-secondary ">
                        <li onClick={toggleAction}><Link to="/binario-decimal">Binario a decimal</Link></li>
                        <li onClick={showHiddenSmall}><Link to="#">Área y perímetro</Link></li>
                            <ol className="container-sidebar-small">
                                <li onClick={toggleAction}><Link to="/areas-y-perimetros-circulo">Circulo</Link></li>
                                <li onClick={toggleAction}><Link to="/areas-y-perimetros-triangulo">Triángulo</Link></li>
                                <li onClick={toggleAction}><Link to="/areas-y-perimetros-cuadrado">Cuadrado</Link></li>
                                <li onClick={toggleAction}><Link to="/areas-y-perimetros-rectangulo">Rectángulo</Link></li>
                                <li onClick={toggleAction}><Link to="/areas-y-perimetros-rombo">Rombo</Link></li>
                            </ol>
                        <li onClick={toggleAction}><Link to="/palindromo">Palíndromo</Link></li>
                        <li onClick={toggleAction}><Link to="/presupuesto">Presupuesto</Link></li>
                    </ol>
                <li onClick={toggleAction}><Link to="/acerca"><span className="text-blue">Acerca app</span></Link></li>
            </ul>
            </section>
            </BrowserRouter>
        </Fragment>
     );
}
export default Sidebar;