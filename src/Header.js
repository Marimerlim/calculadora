import React from "react";
import styled from "styled-components";

export const Cabeca = styled.header`
  width: 100%;
  background-color: lightcoral;
  text-align: center;

  ul {
    list-style: none;
  margin-top: 10px;
`;

export default class Header extends React.Component {
  render() {
    return (
      <Cabeca>
        <h1>Calculadora</h1>
        <nav>
          <ul>
            <li>Adição</li>
            <li>Subtração</li>
            <li>Multiplicação</li>
            <li>Divisão</li>
          </ul>
        </nav>
      </Cabeca>
    );
  }
}
