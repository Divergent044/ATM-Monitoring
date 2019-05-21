import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import OptionButton from 'src-components/OptionButton/';
import Ctx from 'src-components/Ctx';

import classNames from 'classnames/bind';
import styles from './style.less';
const cx = classNames.bind(styles);

const RemovePopup = ({ closePopup, resultAction, id, index }) => {
    const {titleBeforeId, titleAfterId} = Ctx.institutes.popupContent.removeInstitutePopup;

    const removeInstitute = () => {

        axios({
            method: 'DELETE',
            url: `http://localhost:8080/institutes/${id}`,
        }).then(() => {
            resultAction(index);
            closePopup(true);
        });
    };

    return (
        <div className={cx('wrap-remove-popup')}>
            <div className={cx('remove-popup')}>
                <div className={cx('remove-popup-form')}>
                    <span className={cx('close')} onClick={closePopup}>+</span>
                    <div className={cx('remove-popup__content')}>
                        <h1 className={cx('title')}>
                            {`${titleBeforeId} ${id} ${titleAfterId}`}
                        </h1>

                        <div className={cx('remove-popup-button')}>
                            <OptionButton
                                buttonText={Ctx.optionButtonText.ok}
                                clickAction={removeInstitute}
                            />
                            <OptionButton buttonText={Ctx.optionButtonText.cancel} clickAction={closePopup}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

RemovePopup.propTypes = {
    closePopup: PropTypes.func,
    resultAction: PropTypes.func,
    id: PropTypes.string,
    index: PropTypes.number
};

export default RemovePopup;
