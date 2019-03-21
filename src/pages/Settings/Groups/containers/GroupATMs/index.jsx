import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types'

import OptionButton from '../../../../../components/OptionButton';

import './style.less';

export default class GroupATMs extends Component {
    static propTypes = {
        atms: PropTypes.array,
        atmsNotInGroup: PropTypes.array
    };

    state = {
        selectedRow: null,
    };

    render() {
        const { atms, atmsNotInGroup } = this.props;
        const { selectedRow} = this.state;

        return(
            <Fragment>
                <div className="group-atms-wrap">
                    <span className="label">Банкоматы выбранной группы</span>

                    <div className="atms-wrap">
                        <div className="atms-available">
                            <span className="label">Доступные банкоматы</span>
                            <table className="atms-available-table">
                                <thead>
                                <th className="head-cell">ATM ID</th>
                                <th className="head-cell">Модель</th>
                                <th className="head-cell">Адрес</th>
                                </thead>
                                <tbody>
                                {atmsNotInGroup.map((item, index) => (
                                    <tr
                                        className={`row ${(index === selectedRow) ? 'selected' : ''}`}
                                        key={index}
                                        onClick={e => this.selectRow(e.target.tabIndex, item.id)}
                                    >
                                        <td className="cell" tabIndex={index}>{item.id}</td>
                                        <td className="cell" tabIndex={index}>{item.model}</td>
                                        <td className="cell" tabIndex={index}>{item.fullAddress}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="atms-button-wrap">
                            <OptionButton buttonText="Добавить"/>
                            <OptionButton buttonText="Добавить все"/>
                            <OptionButton buttonText="Удалить все"/>
                            <OptionButton buttonText="Удалить"/>
                        </div>

                        <div className="atms-selected">
                            <span className="label">Выбранные банкоматы</span>
                            <table className="atms-selected-table">
                                <thead>
                                <th className="head-cell">ATM ID</th>
                                <th className="head-cell">Модель</th>
                                <th className="head-cell">Адрес</th>
                                </thead>
                                <tbody>
                                {atms.map((item, index) => (
                                    <tr
                                        className={`row ${(index === selectedRow) ? 'selected' : ''}`}
                                        key={index}
                                        onClick={e => this.selectRow(e.target.tabIndex, item.id)}
                                    >
                                        <td className="cell" tabIndex={index}>{item.id}</td>
                                        <td className="cell" tabIndex={index}>{item.model}</td>
                                        <td className="cell" tabIndex={index}>{item.fullAddress}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <OptionButton buttonText="Сохранить банкоматы группы" className="longer"/>
                </div>
            </Fragment>
        );
    }
}
