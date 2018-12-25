import React from 'react';
import PropTypes from 'prop-types';

import './style.less';

const OptionButton = ({ clickAction, buttonText, disabled, className }) => (
    <div
        className={`button ${disabled && 'disabled'} ${className}`}
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
