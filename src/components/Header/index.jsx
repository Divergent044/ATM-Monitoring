import React from 'react';

import logo from '../../assets/img/bpc.png';
import { headerTitle as title } from '../../assets/constants';
import './style.less';

const Header = () => (
    <header className="header">
        <img src={logo} alt="logo" className="header__logo"/>
        <span className="header__title">{title}</span>
    </header>
);

Header.componentName = 'Header';

export default Header;
