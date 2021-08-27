import {Fragment} from 'react';
import Sidebar from './components/Sidebar';
import ContainerView from './components/ContainerView'

function App() {

  return (
   <Fragment>
     <ContainerView></ContainerView>
     <Sidebar ></Sidebar>
   </Fragment>
  );
}

export default App;
