import React from 'react';
import PropTypes from 'prop-types';

import Accumulator from "../../index";

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
                            <Accumulator key={index}/>
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
