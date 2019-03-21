import React, {Component} from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import OptionButton from '../OptionButton';

import './style.less';

export default class Menu extends Component {
    static propTypes = {
        closeMenu: PropTypes.func,
    };

    state = {
        id: '',
        description: ''
    };

    render() {
        return (
            <div className="wrap-menu" onClick={this.props.closeMenu}>
                <div className="menu-content">
                    <div className="title">Меню</div>
                    <hr
                        size="3"
                        align="center"
                        className="line"
                    />
                    <div className="monitoring">
                        Мониторинг
                    </div>
                    <div className="settings">
                        Настройки
                        <Link to="/atm/monitoring/settings/institute" className="link">
                            <div className="settings-item">
                                Институты
                            </div>
                        </Link>
                        <Link to="/atm/monitoring/settings/groups" className="link">
                            <div className="settings-item">
                                Группы ATM
                            </div>
                        </Link>
                        <Link to="/atm/monitoring/settings/groups-attributes" className="link">
                            <div className="settings-item">
                                Группы атрибутов ATM
                            </div>
                        </Link>
                    </div>

                    <OptionButton buttonText="Выйти" className="menu-logout" />
                </div>
            </div>
        );
    }
}
