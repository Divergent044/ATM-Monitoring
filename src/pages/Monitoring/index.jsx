import React, {PureComponent, Fragment} from 'react';
import {Doughnut, Line} from "react-chartjs-2";

import OptionButton from 'src-components/OptionButton';
import Ctx from 'src-components/Ctx';

import className from 'classnames/bind';
import styles from './style.less';

const cx = className.bind(styles);

const dataForChartPie = {
    labels: [
        'Red',
        'Green',
        'Yellow'
    ],
    datasets: [{
        data: [300, 50, 100],
        backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
        ],
        hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
        ]
    }]
};

const dataForChartLine = {
    labels: [
        'xParameterFirst',
        'xParameterSecond',
        'xParameterThird',
        'xParameterFourth',
        'xParameterFifth',
        'xParameterSixth',
    ],
    datasets: [{
        fill: false,
        label: 'chart-1',
        lineTension: 0.1,
        backgroundColor: 'rgba(25, 57, 150, 0.4)',
        borderColor: 'rgba(25, 57, 150, 1)',
        borderCupStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(25, 57, 150, 1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(25, 57, 150, 1)',
        pointHoverBorderColor: 'rgba(220, 220, 220, 1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [100, 50, 10, 234, 1, 34]
    },
        {
            fill: false,
            label: 'chart-2',
            lineTension: 0.1,
            backgroundColor: 'rgba(255, 0, 0, 0.4)',
            borderColor: 'rgba(255, 0, 0, 1)',
            borderCupStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(25, 57, 150, 1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(255, 0, 0, 1)',
            pointHoverBorderColor: 'rgba(220, 220, 220, 1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [10, 53, 70, 24, 100, 134]
        }],
};

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
        const classNameForFirstTab = this.state.activeTab === 1 ? 'active' : '';
        const classNameForSecondTab = this.state.activeTab === 2 ? 'active' : '';

        return (
            <Fragment>
                <div className={cx('filter-block')}>
                    <div className={cx('filter')}>
                        <label htmlFor="input-group" className={cx('label')}>Группа ATM</label>
                        <input
                            type="text"
                            id="input-group"
                            className={cx('text-input')}
                            value="All groups"
                        />
                    </div>
                    <div className={cx('filter')}>
                        <label htmlFor="search-id" className={cx('label')}>ID банкомата</label>
                        <input
                            type="text"
                            id="search-id"
                            className={cx('text-input')}
                            value={this.state.searchId}
                            placeholder="Find id..."
                            onChange={this.updateSearchId}
                        />
                    </div>
                    <div className={cx('filter')}>
                        <label htmlFor="search-address" className={cx('label')}>Адрес банкомата</label>
                        <input
                            type="text"
                            id="search-address"
                            className={cx('text-input')}
                            value={this.state.searchAddress}
                            placeholder="Find address..."
                            onChange={this.updateSearchAddress}
                        />
                    </div>
                    <OptionButton buttonText={Ctx.optionButtonText.find}/>
                    <OptionButton buttonText={Ctx.optionButtonText.addFilter} className={cx('big')}/>
                    <OptionButton buttonText={Ctx.optionButtonText.download}/>
                </div>

                <Line data={dataForChartLine} />

                <div className={cx('inner-menu')}>
                    <div className={cx('tabs')}>
                        <div className={cx('tab', classNameForFirstTab)} onClick={() => this.changeActiveTab(1)}>
                            Статусы
                        </div>
                        <div className={cx('tab', classNameForSecondTab)} onClick={() => this.changeActiveTab(2)}>
                            Балансы
                        </div>
                    </div>
                    <div className={cx('table-wrap')}>
                        {this.state.activeTab === 1 && (
                            <table className={cx('table-status')}>
                                <thead>
                                <tr className={cx('row')}>
                                    {Ctx.monitoring.monitoringStatusTableTitle.map((item, index) => (
                                        <th className={cx('head-cell')} key={index}>
                                            {item}
                                        </th>
                                    ))}
                                </tr>
                                </thead>
                                <tbody>
                                <tr className={cx('row')}>
                                    <td className={cx('cell')}>1180001</td>
                                    <td className={cx('cell')}>ATM Model</td>
                                    <td className={cx('cell')}>Test atm-1</td>
                                    <td className={cx('cell')}>Open</td>
                                    <td className={cx('cell')}>-</td>
                                    <td className={cx('cell')}>98%-50%-65%-89%</td>
                                    <td className={cx('cell')}>1500000</td>
                                    <td className={cx('cell')}>34567</td>
                                    <td className={cx('cell')}>98763</td>
                                    <td className={cx('cell')}>70%</td>
                                    <td className={cx('cell')}>80%</td>
                                    <td className={cx('cell')}>+</td>
                                    <td className={cx('cell')}>10</td>
                                    <td className={cx('cell')}>10</td>
                                    <td className={cx('cell')}>5</td>
                                    <td className={cx('cell')}>5</td>
                                    <td className={cx('cell')}>+</td>
                                </tr>
                                <tr className={cx('row')}>
                                    <td className={cx('cell')}>1290001</td>
                                    <td className={cx('cell')}>ATM Model</td>
                                    <td className={cx('cell')}>Test atm-2</td>
                                    <td className={cx('cell')}>Close</td>
                                    <td className={cx('cell')}>-</td>
                                    <td className={cx('cell')}>89%-75%-65%-94%</td>
                                    <td className={cx('cell')}>1500000</td>
                                    <td className={cx('cell')}>34567</td>
                                    <td className={cx('cell')}>98763</td>
                                    <td className={cx('cell')}>70%</td>
                                    <td className={cx('cell')}>80%</td>
                                    <td className={cx('cell')}>+</td>
                                    <td className={cx('cell')}>7</td>
                                    <td className={cx('cell')}>11</td>
                                    <td className={cx('cell')}>5</td>
                                    <td className={cx('cell')}>15</td>
                                    <td className={cx('cell')}>+</td>
                                </tr>
                                <tr className={cx('row')}>
                                    <td className={cx('cell')}>1190003</td>
                                    <td className={cx('cell')}>ATM Model</td>
                                    <td className={cx('cell')}>Test atm-3</td>
                                    <td className={cx('cell')}>Open</td>
                                    <td className={cx('cell')}>-</td>
                                    <td className={cx('cell')}>45%-50%-65%-79%</td>
                                    <td className={cx('cell')}>3564657568</td>
                                    <td className={cx('cell')}>567657</td>
                                    <td className={cx('cell')}>456566</td>
                                    <td className={cx('cell')}>70%</td>
                                    <td className={cx('cell')}>80%</td>
                                    <td className={cx('cell')}>-</td>
                                    <td className={cx('cell')}>10</td>
                                    <td className={cx('cell')}>10</td>
                                    <td className={cx('cell')}>5</td>
                                    <td className={cx('cell')}>5</td>
                                    <td className={cx('cell')}>-</td>
                                </tr>
                                </tbody>
                            </table>
                        )}
                        {this.state.activeTab === 2 && (
                            <table className={cx('table-balance')}>
                                <thead>
                                <tr className={cx('row')}>
                                    {Ctx.monitoring.monitoringBalanceTableTitle.map((item, index) => (
                                        <th className={cx('head-cell')} key={index}>
                                            {item}
                                        </th>
                                    ))}
                                </tr>
                                </thead>
                                <tbody>
                                <tr className={cx('row')}>
                                    <td className={cx('cell')}>1180001</td>
                                    <td className={cx('cell')}>Test atm-1</td>
                                    <td className={cx('cell')}>98%-50%-65%-89%</td>
                                    <td className={cx('cell')}>310000rur</td>
                                    <td className={cx('cell')}>310</td>
                                    <td className={cx('cell')}>280000rur</td>
                                    <td className={cx('cell')}>280</td>
                                    <td className={cx('cell')}>430000rur</td>
                                    <td className={cx('cell')}>430</td>
                                    <td className={cx('cell')}>110000rur</td>
                                    <td className={cx('cell')}>110</td>
                                    <td className={cx('cell')}>213456</td>
                                    <td className={cx('cell')}>32456</td>
                                    <td className={cx('cell')}>234567</td>
                                    <td className={cx('cell')}>17</td>
                                    <td className={cx('cell')}>10.12.18</td>
                                    <td className={cx('cell')}>17.12.18</td>
                                    <td className={cx('cell')}>1000000</td>
                                    <td className={cx('cell')}>78%</td>
                                    <td className={cx('cell')}>+</td>
                                </tr>
                                <tr className={cx('row')}>
                                    <td className={cx('cell')}>1290001</td>
                                    <td className={cx('cell')}>Test atm-2</td>
                                    <td className={cx('cell')}>98%-50%-65%-89%</td>
                                    <td className={cx('cell')}>310000rur</td>
                                    <td className={cx('cell')}>310</td>
                                    <td className={cx('cell')}>280000rur</td>
                                    <td className={cx('cell')}>280</td>
                                    <td className={cx('cell')}>430000rur</td>
                                    <td className={cx('cell')}>430</td>
                                    <td className={cx('cell')}>110000rur</td>
                                    <td className={cx('cell')}>110</td>
                                    <td className={cx('cell')}>213456</td>
                                    <td className={cx('cell')}>32456</td>
                                    <td className={cx('cell')}>234567</td>
                                    <td className={cx('cell')}>17</td>
                                    <td className={cx('cell')}>10.12.18</td>
                                    <td className={cx('cell')}>17.12.18</td>
                                    <td className={cx('cell')}>1000000</td>
                                    <td className={cx('cell')}>78%</td>
                                    <td className={cx('cell')}>+</td>
                                </tr>
                                <tr className={cx('row')}>
                                    <td className={cx('cell')}>1190003</td>
                                    <td className={cx('cell')}>Test atm-3</td>
                                    <td className={cx('cell')}>98%-50%-65%-89%</td>
                                    <td className={cx('cell')}>310000rur</td>
                                    <td className={cx('cell')}>310</td>
                                    <td className={cx('cell')}>280000rur</td>
                                    <td className={cx('cell')}>280</td>
                                    <td className={cx('cell')}>430000rur</td>
                                    <td className={cx('cell')}>430</td>
                                    <td className={cx('cell')}>110000rur</td>
                                    <td className={cx('cell')}>110</td>
                                    <td className={cx('cell')}>213456</td>
                                    <td className={cx('cell')}>32456</td>
                                    <td className={cx('cell')}>234567</td>
                                    <td className={cx('cell')}>17</td>
                                    <td className={cx('cell')}>10.12.18</td>
                                    <td className={cx('cell')}>17.12.18</td>
                                    <td className={cx('cell')}>1000000</td>
                                    <td className={cx('cell')}>78%</td>
                                    <td className={cx('cell')}>+</td>
                                </tr>
                                </tbody>
                            </table>
                        )}
                    </div>
                </div>

                <Doughnut data={dataForChartPie}/>
            </Fragment>
        );
    }
}

export default Monitoring;
