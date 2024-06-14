import React from "react";
import { Navbar } from "./components/Navbar/Navbar";
import { Article } from "./components/Article/article";
import { Counter } from "./components/Counter/Counter";

import "./styles/App.css";

import article1img from './assets/images/article1.png'
import article2img from './assets/images/article2.png'
import article3img from './assets/images/article3.png'

// Componente *Class* retorna HTML dentro de render.

class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />

        <Counter />

        <section id="article">
          <Article
            title="Designing Dashboard"
            provider="NASA"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum alias
            repellendus nulla aliquam nihil ipsa officiis possimus laboriosam
            blanditiis earum sequi optio corrupti inventore iusto eos,
            cupiditate aperiam corporis totam voluptates obcaecati? Adipisci
            alias minima reiciendis at similique doloribus, in unde recusandae
            laboriosam quibusdam beatae voluptate consectetur ipsam. Sequi,
            perspiciatis!"
            thumbnail={article1img}
          />
          <Article
            title="Vibrant Portraits of 2020"
            provider="SpaceNews"
            description="Harum alias
            repellendus nulla aliquam nihil ipsa officiis possimus laboriosam
            blanditiis earum sequi optio corrupti inventore iusto eo"
            thumbnail={article2img}
          />
          <Article
            title="36 Days of Malayalam type"
            provider="SpaceFlight Now"
            description="Adipisci
            alias minima reiciendis at similique doloribus, in unde recusandae
            laboriosam quibusdam beatae voluptate consectetur ipsam."
            thumbnail={article3img}
          />
          <Article
            title="Designing Dashboard"
            provider="NASA"
            description="obcaecati? Adipisci
            alias minima reiciendis at similique doloribus, in unde recusandae
            laboriosam quibusdam beatae voluptate consectetur ipsam. Sequi,
            perspiciatis!"
            thumbnail={article1img}
          />
        </section>
      </>
    );
  }
}

export default App;
