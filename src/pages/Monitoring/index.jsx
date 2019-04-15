import React, { PureComponent, Fragment } from 'react';

import Header from '../../components/Header';
import OptionButton from '../../components/OptionButton';

import './style.less';
import {monitoringStatusTableTitle, monitoringBalanceTableTitle} from "../../assets/constants";

class Monitoring extends PureComponent {
    state = {
        searchId: '',
        searchAddress: '',
        activeTab: 1,
    };

    updateSearchId = (event) => this.setState({
        searchId: event.target.value
    });

    updateSearchAddress = (event) => this.setState({
        searchAddress: event.target.value
    });

    changeActiveTab = (index) => this.setState({
        activeTab: index
    });

    render() {
        const classNameForFirstTab = this.state.activeTab === 1 ? ' active' : '';
        const classNameForSecondTab = this.state.activeTab === 2 ? ' active' : '';

        return(
            <Fragment>
                <Header />
                <div className="filter-block">
                    <div>
                        <label htmlFor="input-group" className="label">Группа ATM</label>
                        <input
                            type="text"
                            id="input-group"
                            className="text-input"
                            value="All groups"
                        />
                    </div>
                    <div>
                        <label htmlFor="search-id" className="label">ID банкомата</label>
                        <input
                            type="text"
                            id="search-id"
                            className="text-input"
                            value={this.state.searchId}
                            placeholder="Find id..."
                            onChange={this.updateSearchId}
                        />
                    </div>
                    <div>
                        <label htmlFor="search-address" className="label">Адрес банкомата</label>
                        <input
                            type="text"
                            id="search-address"
                            className="text-input"
                            value={this.state.searchAddress}
                            placeholder="Find address..."
                            onChange={this.updateSearchAddress}
                        />
                    </div>
                    <OptionButton buttonText="Найти"/>
                    <OptionButton buttonText="Добавить фильтр" className="big" />
                    <OptionButton buttonText="Выгрузить" />
                </div>
                <div className="hr-line" />
                <div className="inner-menu">
                    <div className="tabs">
                        <div className={`tab${classNameForFirstTab}`} onClick={() => this.changeActiveTab(1)}>Статусы</div>
                        <div className={`tab${classNameForSecondTab}`} onClick={() => this.changeActiveTab(2)}>Балансы</div>
                    </div>
                    <div className="table-wrap">
                        {this.state.activeTab === 1 && (
                            <table className="table-status">
                                <thead>
                                <tr className="row">
                                    {monitoringStatusTableTitle.map((item, index) => (
                                        <th className="head-cell" key={index}>
                                            {item}
                                        </th>
                                    ))}
                                </tr>
                                </thead>
                                <tbody>
                                <tr className="row">
                                    <td className="cell">1180001</td>
                                    <td className="cell">ATM Model</td>
                                    <td className="cell">Test atm-1</td>
                                    <td className="cell">Open</td>
                                    <td className="cell">-</td>
                                    <td className="cell">98%-50%-65%-89%</td>
                                    <td className="cell">1500000</td>
                                    <td className="cell">34567</td>
                                    <td className="cell">98763</td>
                                    <td className="cell">70%</td>
                                    <td className="cell">80%</td>
                                    <td className="cell">+</td>
                                    <td className="cell">10</td>
                                    <td className="cell">10</td>
                                    <td className="cell">5</td>
                                    <td className="cell">5</td>
                                    <td className="cell">+</td>
                                </tr>
                                <tr className="row">
                                    <td className="cell">1290001</td>
                                    <td className="cell">ATM Model</td>
                                    <td className="cell">Test atm-2</td>
                                    <td className="cell">Close</td>
                                    <td className="cell">-</td>
                                    <td className="cell">89%-75%-65%-94%</td>
                                    <td className="cell">1500000</td>
                                    <td className="cell">34567</td>
                                    <td className="cell">98763</td>
                                    <td className="cell">70%</td>
                                    <td className="cell">80%</td>
                                    <td className="cell">+</td>
                                    <td className="cell">7</td>
                                    <td className="cell">11</td>
                                    <td className="cell">5</td>
                                    <td className="cell">15</td>
                                    <td className="cell">+</td>
                                </tr>
                                <tr className="row">
                                    <td className="cell">1190003</td>
                                    <td className="cell">ATM Model</td>
                                    <td className="cell">Test atm-3</td>
                                    <td className="cell">Open</td>
                                    <td className="cell">-</td>
                                    <td className="cell">45%-50%-65%-79%</td>
                                    <td className="cell">3564657568</td>
                                    <td className="cell">567657</td>
                                    <td className="cell">456566</td>
                                    <td className="cell">70%</td>
                                    <td className="cell">80%</td>
                                    <td className="cell">-</td>
                                    <td className="cell">10</td>
                                    <td className="cell">10</td>
                                    <td className="cell">5</td>
                                    <td className="cell">5</td>
                                    <td className="cell">-</td>
                                </tr>
                                </tbody>
                            </table>
                        )}
                        {this.state.activeTab === 2 && (
                            <table className="table-balance">
                                <thead>
                                <tr className="row">
                                    {monitoringBalanceTableTitle.map((item, index) => (
                                        <th className="head-cell" key={index}>
                                            {item}
                                        </th>
                                    ))}
                                </tr>
                                </thead>
                                <tbody>
                                <tr className="row">
                                    <td className="cell">1180001</td>
                                    <td className="cell">Test atm-1</td>
                                    <td className="cell">98%-50%-65%-89%</td>
                                    <td className="cell">310000rur</td>
                                    <td className="cell">310</td>
                                    <td className="cell">280000rur</td>
                                    <td className="cell">280</td>
                                    <td className="cell">430000rur</td>
                                    <td className="cell">430</td>
                                    <td className="cell">110000rur</td>
                                    <td className="cell">110</td>
                                    <td className="cell">213456</td>
                                    <td className="cell">32456</td>
                                    <td className="cell">234567</td>
                                    <td className="cell">17</td>
                                    <td className="cell">10.12.18</td>
                                    <td className="cell">17.12.18</td>
                                    <td className="cell">1000000</td>
                                    <td className="cell">78%</td>
                                    <td className="cell">+</td>
                                </tr>
                                <tr className="row">
                                    <td className="cell">1290001</td>
                                    <td className="cell">Test atm-2</td>
                                    <td className="cell">98%-50%-65%-89%</td>
                                    <td className="cell">310000rur</td>
                                    <td className="cell">310</td>
                                    <td className="cell">280000rur</td>
                                    <td className="cell">280</td>
                                    <td className="cell">430000rur</td>
                                    <td className="cell">430</td>
                                    <td className="cell">110000rur</td>
                                    <td className="cell">110</td>
                                    <td className="cell">213456</td>
                                    <td className="cell">32456</td>
                                    <td className="cell">234567</td>
                                    <td className="cell">17</td>
                                    <td className="cell">10.12.18</td>
                                    <td className="cell">17.12.18</td>
                                    <td className="cell">1000000</td>
                                    <td className="cell">78%</td>
                                    <td className="cell">+</td>
                                </tr>
                                <tr className="row">
                                    <td className="cell">1190003</td>
                                    <td className="cell">Test atm-3</td>
                                    <td className="cell">98%-50%-65%-89%</td>
                                    <td className="cell">310000rur</td>
                                    <td className="cell">310</td>
                                    <td className="cell">280000rur</td>
                                    <td className="cell">280</td>
                                    <td className="cell">430000rur</td>
                                    <td className="cell">430</td>
                                    <td className="cell">110000rur</td>
                                    <td className="cell">110</td>
                                    <td className="cell">213456</td>
                                    <td className="cell">32456</td>
                                    <td className="cell">234567</td>
                                    <td className="cell">17</td>
                                    <td className="cell">10.12.18</td>
                                    <td className="cell">17.12.18</td>
                                    <td className="cell">1000000</td>
                                    <td className="cell">78%</td>
                                    <td className="cell">+</td>
                                </tr>
                                </tbody>
                            </table>
                        )}
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Monitoring;
