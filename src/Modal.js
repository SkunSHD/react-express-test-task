import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';
import PropTypes from 'prop-types';


class Modal extends Component {

    rootElement = document.createElement('div');

    static propTypes = {
        client: PropTypes.object
    }

    componentDidMount() {
        document.body.appendChild(this.rootElement);
    }

    componentWillUnmount() {
        document.body.removeChild(this.rootElement);
    }

    render() {
        return (
            ReactDOM.createPortal(
                <div className="modal fade" id="exampleModalLong" tabIndex="-1" role="dialog"
                     aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLongTitle">Modal title</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                { this.props.client && this.props.client.id &&
                                    <ul>
                                        { Object.keys(this.props.client).map(key => <li key={key}>{key}: {this.props.client[key]}</li>) }
                                    </ul>
                                }
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>,
                this.rootElement
            )
        );
    }
}

export default Modal;