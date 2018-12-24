import React from 'react';
import PropTypes from 'prop-types';

import './style.less';

const OptionButton = ({ clickAction, buttonText, disabled }) => (
    <div
        className={`button ${disabled && 'disabled'}`}
        onClick={disabled ?  () => {} : clickAction}
    >
        {buttonText}
    </div>
);

OptionButton.componentName = 'OptionButton';

OptionButton.propTypes = {
    clickAction: PropTypes.func,
    buttonText: PropTypes.string,
    disabled: PropTypes.bool
};

export default OptionButton;
