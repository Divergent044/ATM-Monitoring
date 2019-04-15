import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames/bind';
import styles from'./style.less';
const cx = classNames.bind(styles);

const OptionButton = ({ clickAction, buttonText, disabled = false, className }) => (
    <div
        className={cx(`button ${disabled ? 'disabled' : ''}`, className)}
        onClick={disabled ?  () => {} : clickAction}
    >
        {buttonText}
    </div>
);

OptionButton.componentName = 'OptionButton';

OptionButton.propTypes = {
    clickAction: PropTypes.func,
    buttonText: PropTypes.string,
    disabled: PropTypes.bool,
    className: PropTypes.string
};

export default OptionButton;
