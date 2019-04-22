import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types'

import OptionButton from 'src-components/OptionButton';
import Ctx from 'src-components/Ctx';

import classNames from 'classnames/bind';
import styles from './style.less';

const cx = classNames.bind(styles);

class GroupATMs extends Component {
    state = {
        selectedRow: null,
    };

    render() {
        const {atms, atmsNotInGroup} = this.props;
        const {selectedRow} = this.state;

        return (
            <Fragment>
                <div className={cx('group-atms-wrap')}>
                    <span className={cx('label')}>
                        {Ctx.groupATMs.header}
                    </span>

                    <div className={cx('atms-wrap')}>
                        <div className={cx('atms-available')}>
                            <span className={cx('label')}>
                                {Ctx.groupATMs.title[0]}
                            </span>
                            <table className={cx('atms-available-table')}>
                                <thead>
                                <tr className={cx('row', 'row-head')}>
                                    {Ctx.groupATMs.tableHeaders.map((text, index) => (
                                        <th className={cx('head-cell')} key={index}>{text}</th>
                                    ))}
                                </tr>
                                </thead>
                                <tbody>
                                {atmsNotInGroup.map((item, index) => (
                                    <tr
                                        className={cx('row', (index === selectedRow) ? 'selected' : '')}
                                        key={index}
                                        onClick={e => this.selectRow(e.target.tabIndex, item.id)}
                                    >
                                        <td className={cx('cell')} tabIndex={index}>{item.id}</td>
                                        <td className={cx('cell')} tabIndex={index}>{item.model}</td>
                                        <td className={cx('cell')} tabIndex={index}>{item.fullAddress}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>

                        <div className={cx('atms-button-wrap')}>
                            <OptionButton buttonText={Ctx.optionButtonText.add}/>
                            <OptionButton buttonText={Ctx.optionButtonText.addAll}/>
                            <OptionButton buttonText={Ctx.optionButtonText.removeAll}/>
                            <OptionButton buttonText={Ctx.optionButtonText.remove}/>
                        </div>

                        <div className={cx('atms-selected')}>
                            <span className={cx('label')}>
                                {Ctx.groupATMs.title[1]}
                            </span>
                            <table className={cx('atms-selected-table')}>
                                <thead>
                                <tr className={cx('row', 'row-head')}>
                                    {Ctx.groupATMs.tableHeaders.map((text, index) => (
                                        <th className={cx('head-cell')} key={index}>{text}</th>
                                    ))}
                                </tr>
                                </thead>
                                <tbody>
                                {atms.map((item, index) => (
                                    <tr
                                        className={cx('row', (index === selectedRow) ? 'selected' : '')}
                                        key={index}
                                        onClick={e => this.selectRow(e.target.tabIndex, item.id)}
                                    >
                                        <td className={cx('cell')} tabIndex={index}>{item.id}</td>
                                        <td className={cx('cell')} tabIndex={index}>{item.model}</td>
                                        <td className={cx('cell')} tabIndex={index}>{item.fullAddress}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <OptionButton buttonText={Ctx.optionButtonText.saveATMs} className={cx('longer')}/>
                </div>
            </Fragment>
        );
    }
}

GroupATMs.propTypes = {
    atms: PropTypes.array,
    atmsNotInGroup: PropTypes.array
};

export default GroupATMs;
