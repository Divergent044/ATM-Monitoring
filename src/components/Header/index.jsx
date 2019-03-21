import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

import logo from '../../assets/img/bpc.png';
import { headerTitle as title } from '../../assets/constants';
import Menu from '../Menu';
import './style.less';

class Header extends React.PureComponent {
    static propTypes = {
        showBurger: PropTypes.bool,
        className: PropTypes.string
    };

    static defaultProps = {
        showBurger: true
    };

    state = {
        showMenu: false
    };

    showMenu = () => this.setState({
        showMenu: !this.state.showMenu
    });

    render() {
        return (
            <div>
                {this.state.showMenu && <Menu closeMenu={this.showMenu}/>}
                <header className={`header ${this.props.className}`}>
                    <img src={logo} alt="logo" className="header__logo"/>
                    <span className="header__title">{title}</span>
                    {this.props.showBurger && (
                        <div className="burger-menu" onClick={this.showMenu}>
                            <div className="layer"/>
                            <div className="layer"/>
                            <div className="layer"/>
                        </div>
                    )}
                </header>
            </div>
        );
    }
}

export default Header;
