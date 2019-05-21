import React  from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames/bind';
import styles from './styles.less';
const cx = classNames.bind(styles);

const Tabs = ({ tabs, onClick, activeTab }) => (
    <div className={cx('tabs')}>
        {tabs.map((tab, index) => (
            <div
                key={index}
                className={cx('tab', activeTab === (index + 1) && 'active')}
                onClick={onClick(index + 1)}
            >
                {tab}
            </div>
        ))}
    </div>
);

Tabs.propTypes = {
    tabs: PropTypes.arrayOf(PropTypes.string),
    onClick: PropTypes.func,
    activeTab: PropTypes.number,
};

export default Tabs;
