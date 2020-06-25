import React from 'react';
import Header from './Header'; 
import Generos from './Genero'; 
import NovoGenero from './NovoGenero';
import EditarGenero from './EditarGenero';
import Series from './Series';
import NovaSerie from './NovaSerie'; 
import InfoSerie from './InfoSerie'; 


// uma boa pratica é usar BrowserRouter recebendo um alias de 'Router'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'; 

const home  = () => {
  return  <h1 className='container'>Home</h1>
}

function App() {

  return (
    <Router>
      <div>
        <Header/>
          <Switch>
            <Route path='/' exact component={home} />
            <Route path='/generos' exact component={Generos} />
            <Route path='/generos/novo' exact component={NovoGenero} />
            <Route path='/generos/:id'  exact component={EditarGenero} />

            <Route path='/series' exact component={Series} />
            <Route path='/series/novo' exact component={NovaSerie} />
            <Route path='/series/:id'  exact component={InfoSerie} />
            
            
          </Switch>
          
        
      </div>
    </Router>
    
  );
}

export default App;