import React, {Component} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import {addPopup, optionButtonText} from "../../assets/constants";
import OptionButton from '../OptionButton';

import './style.less';

export default class AddPopup extends Component {
    static propTypes = {
        closePopup: PropTypes.func,
        resultAction: PropTypes.func,
    };

    state = {
        id: '',
        description: ''
    };

    updateId = (event) => this.setState({
        id: event.target.value
    });

    updateDescription = (event) => this.setState({
        description: event.target.value
    });

    createInstitute = () => {
        const { closePopup, resultAction } = this.props;
        /*axios({
            method: 'POST',
            url: 'http://localhost:8080/institutes',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        }).then(() => {
            resultAction(this.state);
            closePopup();
        });*/
        resultAction(this.state);
        closePopup();
    };

    render() {
        const {title, idLabel, descriptionLabel} = addPopup;
        const {closePopup} = this.props;
        const { id, description } = this.state;

        return (
            <div className="wrap-popup">
                <div className="add-popup">
                    <div className="popup-form">
                        <span className="close" onClick={closePopup}>+</span>
                        <div className="add-popup__content">
                            <h1 className="title">
                                {title}
                            </h1>
                            <div className="form">
                                <div className="form-item">
                                    <label htmlFor="id" className="label">
                                        {idLabel}
                                    </label>
                                    <input
                                        type="text"
                                        id="id"
                                        placeholder={idLabel}
                                        value={this.state.id}
                                        className="input"
                                        maxLength="4"
                                        onChange={this.updateId}
                                    />
                                </div>

                                <div className="form-item">
                                    <label htmlFor="description" className="label">
                                        {descriptionLabel}
                                    </label>
                                    <input
                                        type="text"
                                        id="description"
                                        placeholder={descriptionLabel}
                                        value={this.state.description}
                                        className="input"
                                        onChange={this.updateDescription}
                                    />
                                </div>

                                <div className="form-button">
                                    <OptionButton
                                        buttonText={optionButtonText.save}
                                        disabled={!(id && description)}
                                        clickAction={this.createInstitute}
                                    />
                                    <OptionButton buttonText={optionButtonText.cancel} clickAction={closePopup}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
