import {cloneElement} from 'react';
import PropTypes from 'prop-types';

import Ctx from 'src-components/Ctx';
import { getDataForStatusTable, getDataForBalanceTable } from './utils';

const TableComponentHOC = ({children, type, data}) => {
    if (type === 'status') {
        return cloneElement(children, {
            head: Ctx.monitoring.monitoringStatusTableTitle,
            body: data.map(param => getDataForStatusTable({...param}))
        });
    }

    return cloneElement(children, {
        head: Ctx.monitoring.monitoringBalanceTableTitle,
        body: data.map(param => getDataForBalanceTable({...param}))
    });
};

TableComponentHOC.propTypes = {
    children: PropTypes.any,
    type: PropTypes.oneOf([
        'status', 'balance'
    ]),
    data: PropTypes.arrayOf(PropTypes.shape({
        model: PropTypes.string,
        address: PropTypes.string,
        atmName: PropTypes.string,
        extAtmId: PropTypes.string,
        atmState: PropTypes.shape({
            encashment: PropTypes.shape({
                encashmentPlannedDate: PropTypes.string,
                lastEncashmentDate: PropTypes.string,
                encashmentSumm: PropTypes.number,
                express: PropTypes.bool,
            }),
            cashInCassette: PropTypes.object,
            cashOutCassettes: PropTypes.arrayOf(PropTypes.shape({
                denomination: PropTypes.number,
                isWorking: PropTypes.bool,
                currency: PropTypes.shape({
                    currencyCode: PropTypes.string,
                }),
                cassUploaded: PropTypes.number,
                notesCount: PropTypes.number,
                demandValue: PropTypes.number,
            })),
            cashInRecyclingCassettes: PropTypes.arrayOf(PropTypes.object),
            transactionsByHourStatistics: PropTypes.arrayOf(PropTypes.object),
            state: PropTypes.string,
            malfunction: PropTypes.string,
            avgTransactionsInDay: PropTypes.number,
            dateToCurrencyEnd: PropTypes.number,
            incidentExists: PropTypes.bool,
            lastCashOutHours: PropTypes.number,
            lastCashInHours: PropTypes.number,
        }),
    })),
};

export default TableComponentHOC;
