import React, {Component} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import OptionButton from 'src-components/OptionButton';
import Ctx from 'src-components/Ctx';

import className from 'classnames/bind';
import styles from './style.less';
const cx = className.bind(styles);

class EditPopup extends Component {
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

        axios({
            method: 'PUT',
            url: `http://localhost:8080/institutes/${id}`,
            headers: {
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(dataToSend)
        }).then(() => {
            resultAction(index, description);
            closePopup(true);
        });
    };

    render() {
        const {title, idLabel, descriptionLabel} = Ctx.institutes.popupContent.editInstitutePopup;
        const { closePopup, id } = this.props;
        const { description } = this.state;

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
                                    <label htmlFor="id" className={cx('label', 'disabled')}>
                                        {idLabel}
                                    </label>
                                    <input
                                        type="text"
                                        id="id"
                                        value={id}
                                        className={cx('input')}
                                        disabled
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
                                        disabled={!description}
                                        clickAction={this.editInstitute}
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

EditPopup.propTypes = {
    closePopup: PropTypes.func,
    resultAction: PropTypes.func,
    id: PropTypes.string,
    index: PropTypes.number
};

export default EditPopup;
