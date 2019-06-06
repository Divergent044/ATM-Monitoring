import Ctx from 'src-components/Ctx';

export const getDataForStatusTable = ({model, address, atmName, extAtmId, atmState}) => ({
    id: extAtmId,
    model,
    nameProp: {
        name: atmName,
        address,
    },
    atmStatus: atmState.state,
    problem: atmState.malfunction,
    cashOut: atmState.cashOutCassettes.map(cassette => ({
        ...cassette,
        tooltip: {
            tooltipFor: 'cashOut',
            value: {
                denomination: cassette.denomination,
                currency: cassette.currency.currencyCode,
                cassRemaining: cassette.cassRemaining,
                cassUploaded: cassette.cassUploaded,
            },
        },
    })),
    RUR: calculateCurrency('RUR', atmState.cashOutCassettes),
    USD: calculateCurrency('USD', atmState.cashOutCassettes),
    EUR: calculateCurrency('EUR', atmState.cashOutCassettes),
    cashIn: {
        ...atmState.cashInCassette,
        tooltip: {
            tooltipFor: 'cashIn',
            value: {
                ...atmState.cashInCassette,
            },
        },
    },
    reject: atmState.cashInRecyclingCassettes,
    encashmentStatus: atmState.encashment.express,
    lastDelivery: atmState.lastCashOutHours,
    lastReception: atmState.lastCashInHours,
    NUCInDay: atmState.avgTransactionsInDay,
    NUCInHour: atmState.transactionsByHourStatistics,
    incident: atmState.incidentExists ? '+' : '-',
});

export const getDataForBalanceTable = ({model, address, atmName, extAtmId, atmState}) => ({
    id: extAtmId,
    nameProp: {
        name: atmName,
        address,
    },
    cassCashNotes: getSumAndCountNotesArray(atmState.cashOutCassettes),
    cashOut: atmState.cashOutCassettes.map(cassette => ({
        ...cassette,
        tooltip: {
            tooltipFor: 'cashOut',
            value: {
                denomination: cassette.denomination,
                currency: cassette.currency.currencyCode,
                cassRemaining: cassette.cassRemaining,
                cassUploaded: cassette.cassUploaded,
            },
        },
    })),
    RUR: calculateCurrency('RUR', atmState.cashOutCassettes),
    USD: calculateCurrency('USD', atmState.cashOutCassettes),
    EUR: calculateCurrency('EUR', atmState.cashOutCassettes),
    reject: atmState.cashInRecyclingCassettes,
    encashmentStatus: atmState.encashment.express,
    daysBeforeEmpty: atmState.dateToCurrencyEnd,
    lastEncashmentDate: atmState.encashment.lastEncashmentDate,
    encashmentDate: atmState.encashment.encashmentPlannedDate,
    encashmentSum: atmState.encashment.encashmentSumm,
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
    const result = cassettes.reduce((result, {cassUploaded, demandValue, currency, notesCount}) => {
        result.push(`${cassUploaded * demandValue}${currency.currencyCode}`);
        result.push(notesCount);
        return result;
    }, []);

    if (!!result.length)
        return result;
    else {
        return Ctx.monitoring.defaultCashNotesValues;
    }
};
