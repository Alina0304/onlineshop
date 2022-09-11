import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Card } from './components/Card/Card'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import data from './data.json'

function App() {
  return ( <React.Fragment>
    <main className="main">
      <Header/>
      <section className="products">
        <ul className="products__list">
          {
    data.map(item => (<Card name={item.name} price={item.price} coming_soon={item.coming_soon} sold={item.sold} image_url={item.image_url} sizes={item.sizes}/>))
  }
        </ul>
      </section>
      <Footer/>
    </main>
  </React.Fragment>)
}

export default App;
