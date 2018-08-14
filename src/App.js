import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import UsersList from './UsersList';
import Modal from './Modal';
import $ from "jquery";


class App extends Component {

    state = {
        clients: [],
        currentClient: {}
    }

    componentDidMount() {
        fetch('api/clients')
            .then(data => data.json())
            .then(dataJson => this.setState(()=> ({clients: dataJson})));
    }

    getClientById(clientid) {
        return this.state.clients.find(client => client.id === clientid);
    }

    openModal = (newClientId) => {
        const currentClient = this.getClientById(newClientId);
        this.setState(prevState => ({
            currentClient
        }));

        $('#exampleModalLong').modal('show');
    }


    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                </header>
                { this.state.clients.length ?
                    <UsersList openModal={this.openModal}
                               clients={this.state.clients} />
                    :
                    "Loading..."
                }
                <Modal client={this.state.currentClient} />
            </div>
        );
    }
}

export default App;
