import React, {Component} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import OptionButton from 'src-components/OptionButton';
import Ctx from 'src-components/Ctx';

import className from 'classnames/bind';
import styles from './style.less';
const cx = className.bind(styles);

class AddPopup extends Component {
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

        axios({
            method: 'POST',
            url: 'http://localhost:8080/institutes',
            headers: {
                'Content-Type': 'application/json'
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
        const {title, idLabel, descriptionLabel} = Ctx.institutes.popupContent.addInstitutePopup;
        const {closePopup} = this.props;
        const { id, description } = this.state;

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
                                    <label htmlFor="id" className={cx('label')}>
                                        {idLabel}
                                    </label>
                                    <input
                                        type="text"
                                        id="id"
                                        placeholder={idLabel}
                                        value={this.state.id}
                                        className={cx('input')}
                                        maxLength="4"
                                        onChange={this.updateId}
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
                                        value={this.state.description}
                                        className={cx('input')}
                                        onChange={this.updateDescription}
                                    />
                                </div>

                                <div className={cx('form-button')}>
                                    <OptionButton
                                        buttonText={Ctx.optionButtonText.save}
                                        disabled={!(id && description)}
                                        clickAction={this.createInstitute}
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
