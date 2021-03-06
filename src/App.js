import React, { Component } from "react";
import "./App.css";
import { Contacts } from "./components/Contacts";
import { Provider } from "./context";
import { Header } from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
    render() {
        return (
            <Provider>
                <div className="App">
                    <Header text="Kontakty" />
                    <Contacts />
                </div>
            </Provider>
        );
    }
}

export default App;
