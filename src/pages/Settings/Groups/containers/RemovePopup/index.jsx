import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import {removeGroupPopup, optionButtonText} from "../../../../../assets/constants";
import OptionButton from '../../../../../components/OptionButton/index';

import './style.less';

const RemovePopup = ({ closePopup, resultAction, id, groupName, index }) => {
    const {titleBeforeId, titleAfterId} = removeGroupPopup;

    const removeInstitute = () => {

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

    return (
        <div className="wrap-remove-popup">
            <div className="remove-popup">
                <div className="remove-popup-form">
                    <span className="close" onClick={closePopup}>+</span>
                    <div className="remove-popup__content">
                        <h1 className="title">
                            {`${titleBeforeId} ${groupName} ${titleAfterId}`}
                        </h1>

                        <div className="remove-popup-button">
                            <OptionButton
                                buttonText={optionButtonText.ok}
                                clickAction={removeInstitute}
                            />
                            <OptionButton buttonText={optionButtonText.cancel} clickAction={closePopup}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

RemovePopup.componentName = 'RemovePopup';

RemovePopup.propTypes = {
    closePopup: PropTypes.func,
    resultAction: PropTypes.func,
    id: PropTypes.string,
    groupName: PropTypes.string,
    index: PropTypes.number
};

export default RemovePopup;
