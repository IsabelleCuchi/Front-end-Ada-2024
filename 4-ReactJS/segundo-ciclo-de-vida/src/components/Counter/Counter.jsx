import React from "react";

export class Counter extends React.Component {
  constructor() {
    super();
    this.state = { contador: 0 };

    console.log("Contruindo a classe Counter!");
  }

  // NÃO USAR ESSES EM UNSAFE
  UNSAFE_componentWillMount() {
    console.log("Contador esta sendo montado");
  }
  // NÃO USAR ESSES EM UNSAFE

  componentDidMount() {
      console.log("Componente foi montado ✔");
      
  }

  shouldComponentUpdate() {
    // if (this.state.contador === 2) return false; //controlar raramente
    return true;
  }

  // NÃO USAR ESSES EM UNSAFE
  UNSAFE_componentWillUpdate() {
    console.log("Componente sera atualizado!");
  }
  // NÃO USAR ESSES EM UNSAFE

  componentDidUpdate() {
    console.log("O Componente Counter foi atualizado ✅");
    }
    
    componentWillUnmount() {
        console.log('Componente sera desmontado...')
    }

  render() {
    console.log("Renderizando o Componente");
    return (
      <div>
        <h1>{this.state.contador}</h1>

        <button
          onClick={() => this.setState({ contador: this.state.contador - 1 })}
        >
          Diminuir
        </button>
        <button
          onClick={() => this.setState({ contador: this.state.contador + 1 })}
        >
          Aumentar
        </button>
      </div>
    );
  }
}
