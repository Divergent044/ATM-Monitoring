import React, {Component} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import {editPopup, optionButtonText} from "../../assets/constants";
import OptionButton from '../OptionButton';

import './style.less';

export default class EditPopup extends Component {
    static propTypes = {
        closePopup: PropTypes.func,
        resultAction: PropTypes.func,
        id: PropTypes.string,
        index: PropTypes.number
    };

    state = {
        description: ''
    };

    updateDescription = (event) => this.setState({
        description: event.target.value
    });

    editInstitute = () => {
        const { closePopup, resultAction, id, index } = this.props;
        const { description } = this.state;
        const dataToSend = { id, description};

        /*axios({
            method: 'PUT',
            url: `http://localhost:8080/institutes/${id}`,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataToSend)
        }).then(() => {
            resultAction(index, description);
            closePopup();
        });*/
        resultAction(index, description);
        closePopup();
    };

    render() {
        const {title, idLabel, descriptionLabel} = editPopup;
        const { closePopup, id } = this.props;
        const { description } = this.state;

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
                                    <label htmlFor="id" className="label disabled">
                                        {idLabel}
                                    </label>
                                    <input
                                        type="text"
                                        id="id"
                                        value={id}
                                        className="input"
                                        disabled
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
                                        disabled={!description}
                                        clickAction={this.editInstitute}
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
