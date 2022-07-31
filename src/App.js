//Sua calculadora deve ter um button para
//___limpar o resultado da tela e limpar os inputs

//Você deve buscar a solução para
//__de soma ("+" deve somar e não concatenar)

import Header from "./Header";
import React from "react";

import styled from "styled-components";

export const calculadora = styled.main`
  background-color: burlywood;
  text-align: center;

  input {
    background-color: lightgray;
    border: none;
    border-radius: 20px;
    outline: none;
  }
`;

export default class App extends React.Component {
  state = {
    num1: "",
    num2: "",
    resultado: ""
  };

  input1 = (event) => {
    this.setState({
      num1: event.target.value
    });
  };
  input2 = (event) => {
    this.setState({
      num2: Number(event.target.value)
    });
  };

  soma = () => {
    this.setState({
      resultado: this.state.num1 + this.state.num2
    });
  };

  subtracao = () => {
    this.setState({
      resultado: this.state.num1 - this.state.num2
    });
  };

  multiplicacao = () => {
    this.setState({
      resultado: this.state.num1 * this.state.num2
    });
  };

  divisao = () => {
    this.setState({
      resultado: this.state.num1 / this.state.num2
    });
  };

  apagar = () => {
    this.setState({
      num1: "",
      num2: "",
      resultado: ""
    });
  };

  render() {
    return (
      <>
        <Header />
        <calculadora>
          <input onChange={this.input1} type="number" value={this.state.num1} />
          <input onChange={this.input2} type="number" value={this.state.num2} />
          <div>
            <button onClick={this.soma()}>+</button>
            <button onClick={this.subtracao}>-</button>
            <button onClick={this.multiplicacao}>*</button>
            <button onClick={this.divisao}>/</button>
            <button onClick={this.apagar}>C</button>
          </div>
          <h2>{this.state.resultado}</h2>
        </calculadora>
      </>
    );
  }
}
