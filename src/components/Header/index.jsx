import React, { useState } from 'react';
import PropTypes from 'prop-types';

import logo from '../../assets/img/bpc.png';
import {headerTitle as title} from '../../assets/constants';
import Menu from '../Menu';

import classNames from 'classnames/bind';
import styles from './style.less';

const cx = classNames.bind(styles);

const Header = ({className, showBurger}) => {
    const [showMenu, changeShowMenu] = useState(false);

    return (
        <div>
            {showMenu && <Menu closeMenu={() => changeShowMenu(!showMenu)}/>}
            <header className={cx(`header ${className}`)}>
                <img
                    src={logo}
                    alt="logo"
                    className={cx('header__logo')}
                />
                <span className={cx('header__title')}>
                        {title}
                    </span>
                {showBurger && (
                    <div className={cx('burger-menu')} onClick={() => changeShowMenu(!showMenu)}>
                        <div className={cx('layer')}/>
                        <div className={cx('layer')}/>
                        <div className={cx('layer')}/>
                    </div>
                )}
            </header>
        </div>
    );
};

Header.defaultProps = {
    showBurger: true
};

Header.propTypes = {
    showBurger: PropTypes.bool,
    className: PropTypes.string
};

export default Header;
