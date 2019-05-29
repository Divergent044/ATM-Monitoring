import React from 'react';
import PropTypes from 'prop-types';

import Ctx from 'src-components/Ctx';

import classNames from 'classnames/bind';
import styles from './styles.less';
const cx = classNames.bind(styles);

const Tooltip = (props) => {
    const { tooltipFor, value, className } = props;

    return (
        <div className={cx(className)}>
            {Object.keys(value).map((param, index) => (
                <span className={cx('parameter')} key={index}>
                {`${Ctx.tooltip[tooltipFor][param]}: ${value[param]}`}
            </span>
            ))}
        </div>
    );
};

Tooltip.propTypes = {
    tooltipFor: PropTypes.string,
    className: PropTypes.any,
    value: PropTypes.object,
};

export default Tooltip;
