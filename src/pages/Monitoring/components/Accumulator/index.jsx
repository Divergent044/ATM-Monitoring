import React from 'react';
import PropTypes from 'prop-types';

import Tooltip from '../Tooltip';

import classNames from 'classnames/bind';
import styles from './styles.less';
const cx = classNames.bind(styles);

const defineColor = value => {
    if (value >= 75) return 'green';
    if (value >= 30 && value < 75) return 'yellow';
    if (value < 30) return 'red';
};

const Accumulator = ({
    isWorking = true,
    cassRemaining,
    cassUploaded,
    tooltip,
}) => {
    const value = cassUploaded / (cassUploaded + cassRemaining) * 100;

    return (
        <div className={cx('wrap', (!isWorking || value < 30) && 'almostEmpty')}>
            <div
                className={cx('accumulator', isWorking && defineColor(value))}
                style={{
                    width: `${value}%`
                }}
            />

            {tooltip && (
                <Tooltip
                    className={cx('tooltip', tooltip.tooltipFor)}
                    {...tooltip}
                />
            )}
        </div>
    );
};

Accumulator.propTypes = {
    isWorking: PropTypes.bool,
    cassRemaining: PropTypes.number,
    cassUploaded: PropTypes.number,
    tooltip: PropTypes.object,
};

export default Accumulator;
