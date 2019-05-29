import React, {PureComponent, Fragment} from 'react';
import {Doughnut, Line} from "react-chartjs-2";

import OptionButton from 'src-components/OptionButton';
import TableComponentHOC from './components/HOC/TableComponentHOC';
import TableComponent from './components/TableComponent';
import Tabs from 'src-components/Tabs';
import Ctx from 'src-components/Ctx';

import data from '../../testData/monitoring.json';

import classNames from 'classnames/bind';
import styles from './style.less';
const cx = classNames.bind(styles);

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

    changeActiveTab = (id) => () => this.setState({
        activeTab: id
    });

    render() {
        const { activeTab } = this.state;

        return (
            <Fragment>
                <div className={cx('filter-block')}>
                    <div className={cx('filter')}>
                        <label htmlFor="input-group" className={cx('label')}>
                            {Ctx.monitoring.labels.searchGroup}
                        </label>
                        <input
                            type="text"
                            id="input-group"
                            className={cx('text-input')}
                            defaultValue="All groups"
                        />
                    </div>
                    <div className={cx('filter')}>
                        <label htmlFor="search-id" className={cx('label')}>
                            {Ctx.monitoring.labels.searchId}
                        </label>
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
                        <label htmlFor="search-address" className={cx('label')}>
                            {Ctx.monitoring.labels.searchAddress}
                        </label>
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

                <Line data={Ctx.chartLine} />

                <div className={cx('inner-menu')}>
                    <Tabs
                        tabs={Ctx.monitoring.tabs}
                        activeTab={activeTab}
                        onClick={this.changeActiveTab}
                    />
                    <div className={cx('table-wrap')}>
                        {activeTab === 1 && (
                            <TableComponentHOC type="status" data={data}>
                                <TableComponent/>
                            </TableComponentHOC>
                        )}

                        {activeTab === 2 && (
                            <TableComponentHOC type="balance" data={data}>
                                <TableComponent/>
                            </TableComponentHOC>
                        )}
                    </div>
                </div>

                <Doughnut data={Ctx.chartPie}/>
            </Fragment>
        );
    }
}

export default Monitoring;
