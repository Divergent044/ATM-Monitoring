import React, {useState} from 'react';
import PropTypes from 'prop-types';

import {Link} from 'react-router-dom';
import OptionButton from '../OptionButton';
import Ctx from 'src-components/Ctx';

import classNames from 'classnames/bind';
import styles from './style.less';

const cx = classNames.bind(styles);

const Menu = ({closeMenu}) => {
    const [id, changeId] = useState('');
    const [description, changeDescription] = useState('');

    return (
        <div className={cx('wrap-menu')} onClick={closeMenu}>
            <div className={cx('menu-content')}>
                <div className={cx('title')}>
                    {Ctx.menu.menu}
                </div>
                <hr
                    size="3"
                    align="center"
                    className={cx('line')}
                />
                <div className={cx('monitoring')}>
                    {Ctx.menu.monitoring}
                </div>
                <div className={cx('settings')}>
                    {Ctx.menu.settings.settings}
                    <Link to="/atm/monitoring/settings/institute" className={cx('link')}>
                        <div className={cx('settings-item')}>
                            {Ctx.menu.settings.institutes}
                        </div>
                    </Link>
                    <Link to="/atm/monitoring/settings/groups" className={cx('link')}>
                        <div className={cx('settings-item')}>
                            {Ctx.menu.settings.groups}
                        </div>
                    </Link>
                    <Link to="/atm/monitoring/settings/groups-attributes" className={cx('link')}>
                        <div className={cx('settings-item')}>
                            {Ctx.menu.settings.groupsAttr}
                        </div>
                    </Link>
                </div>

                <OptionButton buttonText={Ctx.menu.exit} className={cx('menu-logout')}/>
            </div>
        </div>
    );
};

Menu.propTypes = {
    closeMenu: PropTypes.func,
};

export default Menu;
