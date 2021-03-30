import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Tarjetas from './components/Tarjetas'
import arraySerie from './rickandmorty.json'

function App() {
  return (
    <div className="App">

      < Header />

        <div className="hijo">
          
          {arraySerie.map(function(serie, idx){
              return(
                <div className="tarjetas-div" key={idx}>
                  <Tarjetas datoSerie={serie}/>
                </div>
              )
            }
          )}

        </div>

      < Footer />

      </div>
    );
  }


export default App;
