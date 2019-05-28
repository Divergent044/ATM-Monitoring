import {cloneElement} from 'react';
import PropTypes from 'prop-types';

import Ctx from 'src-components/Ctx';

const TableComponentHOC = ({ children, type, data }) => {
    if (type === 'status') {
        return cloneElement(children, {
            head: Ctx.monitoring.monitoringStatusTableTitle,
            body: data.map(param => getDataForStatusTable({ ...param }))
        });
    }

    return cloneElement(children, {
        head: Ctx.monitoring.monitoringBalanceTableTitle,
        body: data.map(param => getDataForBalanceTable({ ...param }))
    });
};

TableComponentHOC.propTypes = {
    children: PropTypes.any,
    type: PropTypes.oneOfType([
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


const getDataForStatusTable = ({ model, address, atmName, extAtmId, atmState }) => ({
        id: extAtmId,
        model,
        nameProp: {
            name: atmName,
            address,
        },
        atmStatus: atmState.state,
        problem: atmState.malfunction,
        cashOut: atmState.cashOutCassettes,
        RUR: calculateCurrency('RUR', atmState.cashOutCassettes),
        USD: calculateCurrency('USD', atmState.cashOutCassettes),
        EUR: calculateCurrency('EUR', atmState.cashOutCassettes),
        cashIn: atmState.cashInCassette,
        reject: atmState.cashInRecyclingCassettes,
        encashmentStatus: atmState.encashment.express,
        lastDelivery: atmState.lastCashOutHours,
        lastReception: atmState.lastCashInHours,
        NUCInDay: atmState.avgTransactionsInDay,
        NUCInHour: atmState.transactionsByHourStatistics,
        incident: atmState.incidentExists ? '+' : '-',
});

const getDataForBalanceTable = ({ model, address, atmName, extAtmId, atmState }) => ({
    id: extAtmId,
    nameProp: {
        name: atmName,
        address,
    },
    cassCashNotes: getSumAndCountNotesArray(atmState.cashOutCassettes),
    cashOut: atmState.cashOutCassettes,
    RUR: calculateCurrency('RUR', atmState.cashOutCassettes),
    USD: calculateCurrency('USD', atmState.cashOutCassettes),
    EUR: calculateCurrency('EUR', atmState.cashOutCassettes),
    reject: atmState.cashInRecyclingCassettes,
    encashmentStatus: atmState.encashment.express,
    daysBeforeEmpty: atmState.dateToCurrencyEnd,
    lastEncashmentDate: atmState.encashment.lastEncashmentDate,
    encashmentDate: atmState.encashment.encashmentPlannedDate,
    encashmentSum: atmState.encashment.encashmentSum,
});

const calculateCurrency = (currencyType, cassettes) => {
    return cassettes.reduce((sumCurrency, cassette) => {
        if (cassette.currency.currencyCode === currencyType) {
            return sumCurrency + (cassette.denomination * cassette.notesCount)
        }

        return sumCurrency;
    }, 0);
};

const getSumAndCountNotesArray = (cassettes) => {
    return cassettes.reduce((result, {cassUploaded, demandValue, currency, notesCount}) => {
        result.push(`${cassUploaded * demandValue}${currency.currencyCode}`);
        result.push(notesCount);
        return result;
    }, []);
};
