import React from "react";
import {render} from "react-dom";
import particpantesFetch from "./participantes.js";
import MainMenu from "./widgets/MainMenu.jsx";

const App = React.createClass({
    render () {
        particpantesFetch();
        return <p>Hello React!</p>;
    }
});


const menuItems = [
    {
        caption: "Cadastros",
        options: [
            { caption: "Clientes" },
            { caption: "Fornecedores" },
            { caption: "Transportadores" },
            { caption: "Vendedores" },
        ]
    }, 
    { caption: "Vendas"}, 
    { caption: "Compras"}
]



render(<MainMenu options={ menuItems }/>, document.getElementById("appMenu"));
render(<App/>, document.getElementById("app"));


