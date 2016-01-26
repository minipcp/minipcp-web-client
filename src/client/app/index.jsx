import React from "react";
import { render } from "react-dom";
import MainMenu from "./widgets/MainMenu.jsx";
import PageContainer from "./widgets/PageContainer.jsx";
import dataStore from "./data-store/main.js";

window.trace = (data) => {
    console.log(data);

    return data;
};


const MainPage = React.createClass({

    render () {
        const state = dataStore.getState();
        return (
            <PageContainer title="MiniPCP" subtitle="Web Edition" 
                menu={ (<MainMenu onClick={ (button) => { state.menus.onClick(button, dataStore); } } options={ state.menus.options }/>) }
                module={ (<App/>) } />
        );
    }

});


const App = React.createClass({
    render () {
        return <p>Hello React!</p>;
    }
});


const renderApp = () => {
    render(<MainPage/>, document.getElementById("app"));
};

dataStore.subscribe(renderApp);
renderApp();

