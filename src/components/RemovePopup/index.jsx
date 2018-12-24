import React, {Component} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import {removePopup, optionButtonText} from "../../assets/constants";
import OptionButton from '../OptionButton';

import './style.less';

export default class RemovePopup extends Component {
    static propTypes = {
        closePopup: PropTypes.func,
        resultAction: PropTypes.func,
        id: PropTypes.string,
        index: PropTypes.number
    };

    removeInstitute = () => {
        const { closePopup, resultAction, id, index } = this.props;

        /*axios({
            method: 'DELETE',
            url: `http://localhost:8080/institutes/${id}`,
        }).then(() => {
            resultAction(index);
            closePopup();
        });*/
        resultAction(index);
        closePopup(true);
    };

    render() {
        const {titleBeforeId, titleAfterId} = removePopup;
        const { closePopup, id } = this.props;

        return (
            <div className="wrap-remove-popup">
                <div className="remove-popup">
                    <div className="remove-popup-form">
                        <span className="close" onClick={closePopup}>+</span>
                        <div className="remove-popup__content">
                            <h1 className="title">
                                {`${titleBeforeId} ${id} ${titleAfterId}`}
                            </h1>

                            <div className="remove-popup-button">
                                <OptionButton
                                    buttonText={optionButtonText.ok}
                                    clickAction={this.removeInstitute}
                                />
                                <OptionButton buttonText={optionButtonText.cancel} clickAction={closePopup}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
