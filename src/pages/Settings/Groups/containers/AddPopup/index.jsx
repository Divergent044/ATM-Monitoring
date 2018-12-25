import React, {Component} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import {addGroupPopup, optionButtonText} from "../../../../../assets/constants";
import OptionButton from '../../../../../components/OptionButton/index';

import './style.less';

export default class AddPopup extends Component {
    static propTypes = {
        closePopup: PropTypes.func,
        resultAction: PropTypes.func,
    };

    state = {
        name: '',
        description: ''
    };

    updateGroupName = (event) => this.setState({
        name: event.target.value
    });

    updateDescription = (event) => this.setState({
        description: event.target.value
    });

    createGroup = () => {
        const { closePopup, resultAction } = this.props;
        const dataToSend = JSON.stringify(this.state);

        axios({
            method: 'POST',
            url: 'http://localhost:8080/institutes',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'http://localhost:3000'
            },
            data: JSON.stringify(this.state)
        }).then(() => {
            resultAction(this.state);
            closePopup();
        });
        /*resultAction(this.state);
        closePopup();*/
    };

    render() {
        const {title, idLabel, descriptionLabel} = addGroupPopup;
        const {closePopup} = this.props;
        const { name, description } = this.state;

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
                                    <label htmlFor="name" className="label">
                                        {idLabel}
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        placeholder={idLabel}
                                        value={name}
                                        className="input"
                                        onChange={this.updateGroupName}
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
                                        value={description}
                                        className="input"
                                        onChange={this.updateDescription}
                                    />
                                </div>

                                <div className="form-button">
                                    <OptionButton
                                        buttonText={optionButtonText.save}
                                        disabled={!(name && description)}
                                        clickAction={this.createGroup}
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
