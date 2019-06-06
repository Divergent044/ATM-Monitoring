import React from 'react';
import PropTypes from 'prop-types';

import Accumulator from '../Accumulator';

import complete from '../../../../assets/img/complete.svg';
import watch from '../../../../assets/img/watch.svg';

import classNames from 'classnames/bind';
import styles from './styles.less';
const cx = classNames.bind(styles);

const TableComponent = ({ head, body }) => (
    <table className={cx('table')}>
        <thead>
        <tr className={cx('head-row')}>
            {head.map((item, index) => (
                <th className={cx('head-cell')} key={index}>
                    {item}
                </th>
            ))}
        </tr>
        </thead>
        <tbody>
        {body.map((row, indexRow) => (
            <tr className={cx('row')} key={`row-${indexRow}`}>
                <td className={cx('cell')}>
                    {row.id}
                </td>

                {row.model && (
                    <td className={cx('cell')}>
                        {row.model}
                    </td>
                )}

                <td className={cx('cell')}>
                    {row.nameProp.name}
                </td>

                {row.atmStatus && (
                    <td className={cx('cell')}>
                        {row.atmStatus}
                    </td>
                )}

                {row.problem && (
                    <td className={cx('cell')}>
                        {row.problem}
                    </td>
                )}

                {row.cashOut && (
                    <td className={cx('cell')}>
                        {row.cashOut.map((acc, index) => (
                            <Accumulator key={index} {...acc} />
                        ))}
                    </td>
                )}

                {row.cassCashNotes && row.cassCashNotes.map((param, index) => (
                    <td className={cx('cell')} key={`cassCashNotes-${index}`}>
                        {param}
                    </td>
                ))}

                <td className={cx('cell')}>
                    {row.RUR || '-'}
                </td>
                <td className={cx('cell')}>
                    {row.USD || '-'}
                </td>
                <td className={cx('cell')}>
                    {row.EUR || '-'}
                </td>

                {row.cashIn && (
                    <td className={cx('cell')}>
                        <Accumulator {...row.cashIn} />
                    </td>
                )}

                <td className={cx('cell')}>
                    {row.reject.map((el, index) => (
                        <p key={index}>
                            {`Кассета № ${el.cassNumber}`}
                        </p>
                    ))}
                </td>
                <td className={cx('cell')}>
                    {row.encashmentStatus
                        ? <img src={watch} className={cx('icon')} alt="Express Encashment"/>
                        : <img src={complete} className={cx('icon')} alt="Encashment assigned"/>
                    }
                </td>

                {row.lastDelivery && (
                    <td className={cx('cell')}>
                        {row.lastDelivery}
                    </td>
                )}

                {row.lastReception && (
                    <td className={cx('cell')}>
                        {row.lastReception}
                    </td>
                )}

                {row.NUCInDay && (
                    <td className={cx('cell')}>
                        {row.NUCInDay}
                    </td>
                )}

                {row.NUCInHour && (
                    <td className={cx('cell')}>
                        {row.NUCInHour[12].transactionsCount}
                    </td>
                )}

                {row.incident && (
                    <td className={cx('cell')}>
                        {row.incident}
                    </td>
                )}

                {row.daysBeforeEmpty && (
                    <td className={cx('cell')}>
                        {row.daysBeforeEmpty}
                    </td>
                )}

                {row.lastEncashmentDate && (
                    <td className={cx('cell')}>
                        {row.lastEncashmentDate}
                    </td>
                )}

                {row.encashmentDate && (
                    <td className={cx('cell')}>
                        {row.encashmentDate}
                    </td>
                )}

                {row.encashmentSum && (
                    <td className={cx('cell')}>
                        {row.encashmentSum}
                    </td>
                )}
            </tr>
        ))}
        </tbody>
    </table>
);

TableComponent.propTypes = {
    head: PropTypes.arrayOf(
        PropTypes.string
    ),
    body: PropTypes.arrayOf(
        PropTypes.object
    ),
};

export default TableComponent;
