import React, { Component } from "react";
import { ScrollView } from "react-native";
import axios from "axios";
import Itens from "./../components/Itens";

export default class ListaItens extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listaItens: []
    };
  }

  componentWillMount() {
    //requisição HTTP
    //solicitação de um recurso na internet
    axios
      .get("http://faus.com.br/recursos/c/dmairr/api/itens.html")
      .then(response => {
        this.setState({ listaItens: response.data });
      })
      .catch(() => {
        console.log("Erro ao recuperar os dados!");
      });
    //then e catcha são promessas que podem acontecer quando o get fizer sua função
  }

  render() {
    return (
      <ScrollView style={{ backgroundColor: "#DDD" }}>
        {this.state.listaItens.map(item => {
          return <Itens key={item.titulo} item={item} />;
        })}
      </ScrollView>
    );
  }
}
