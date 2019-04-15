import React, {Component} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import {addGroupPopup} from "../../../../../assets/constants";
import OptionButton from 'src-components/OptionButton';
import Ctx from 'src-components/Ctx';

import classNames from 'classnames/bind';
import styles from './style.less';
const cx = classNames.bind(styles);

class AddPopup extends Component {
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
            <div className={cx('wrap-popup')}>
                <div className={cx('add-popup')}>
                    <div className={cx('popup-form')}>
                        <span className={cx('close')} onClick={closePopup}>+</span>
                        <div className={cx('add-popup__content')}>
                            <h1 className={cx('title')}>
                                {title}
                            </h1>
                            <div className={cx('form')}>
                                <div className={cx('form-item')}>
                                    <label htmlFor="name" className={cx('label')}>
                                        {idLabel}
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        placeholder={idLabel}
                                        value={name}
                                        className={cx('input')}
                                        onChange={this.updateGroupName}
                                    />
                                </div>

                                <div className={cx('form-item')}>
                                    <label htmlFor="description" className={cx('label')}>
                                        {descriptionLabel}
                                    </label>
                                    <input
                                        type="text"
                                        id="description"
                                        placeholder={descriptionLabel}
                                        value={description}
                                        className={cx('input')}
                                        onChange={this.updateDescription}
                                    />
                                </div>

                                <div className={cx('form-button')}>
                                    <OptionButton
                                        buttonText={Ctx.optionButtonText.save}
                                        disabled={!(name && description)}
                                        clickAction={this.createGroup}
                                    />
                                    <OptionButton buttonText={Ctx.optionButtonText.cancel} clickAction={closePopup}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

AddPopup.propTypes = {
    closePopup: PropTypes.func,
    resultAction: PropTypes.func,
};

export default AddPopup;
