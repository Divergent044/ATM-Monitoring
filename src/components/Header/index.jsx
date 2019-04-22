import React from 'react';

import logo from '../../assets/img/bpc.png';
import Ctx from 'src-components/Ctx';

import classNames from 'classnames/bind';
import styles from './style.less';

const cx = classNames.bind(styles);

const Header = () => (
    <header className={cx('header')}>
        <img
            src={logo}
            alt="logo"
            className={cx('header__logo')}
        />
        <span className={cx('header__title')}>
            {Ctx.headerTitle}
        </span>
    </header>
);

export default Header;
