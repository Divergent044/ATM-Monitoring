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

    editGroup = () => {
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
        const {title, idLabel, descriptionLabel} = Ctx.groupATMs.popupContent.editGroupPopup;
        const { closePopup, groupName } = this.props;
        const { description } = this.state;

        return (
            <div className={cx('wrap-popup')}>
                <div className={cx('add-popup')}>
                    <div className={cx('popup-form')}>
                        <span className={cx('close')} onClick={closePopup}>+</span>
                        <div className={cx('add-popup__content')}>
                            <h1 className={cx('title')}>
                                {`${title} ${groupName}`}
                            </h1>
                            <div className={cx('form')}>
                                <div className={cx('form-item')}>
                                    <label htmlFor="name" className={cx('label', 'disabled')}>
                                        {idLabel}
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        value={groupName}
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
                                        clickAction={this.editGroup}
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
    groupName: PropTypes.string,
    index: PropTypes.number
};

export default EditPopup;
