import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames/bind';
import styles from './styles.less';
const cx = classNames.bind(styles);

const defineColor = value => {
    if (value >= 75) return 'green';
    if (value >= 30 && value < 75) return 'yellow';
    if (value < 30) return 'red';
};

const Accumulator = ({ value }) => (
    <div className={cx('wrap', value < 30 && 'almostEmpty')}>
        <div
            className={cx('accumulator', defineColor(value) )}
            style={{
                width: `${value}%`
            }}
        />
    </div>
);

Accumulator.defaultProps = {
    value: 0
};

Accumulator.propTypes = {
    value: PropTypes.number
};

export default Accumulator;