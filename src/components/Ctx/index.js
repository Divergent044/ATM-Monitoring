export default {
    headerTitle: 'ATM Cash Management',
    menu: {
        menu: 'Меню',
        monitoring: 'Мониторинг',
        settings: {
            settings: 'Настройки',
            institutes: 'Институты',
            groups: 'Группы ATM',
            groupsAttr: 'Группы атрибутов ATM',
        },
        exit: 'Выйти',
    },
    auth: {
        heading: 'Cash Management',
        login: 'Login:',
        password: 'Password:',
        error: 'Incorrect Login/Password',
    },
    optionButtonText: {
        add: 'Добавить',
        addAll: 'Добавить все',
        edit: 'Изменить',
        remove: 'Удалить',
        removeAll: 'Удалить все',
        addGroup: 'Добавить группу',
        editGroup: 'Изменить группу',
        removeGroup: 'Удалить группу',
        save: 'Сохранить',
        saveATMs: 'Сохранить банкоматы группы',
        cancel: 'Отмена',
        ok: 'ОК',
        find: 'Найти',
        addFilter: 'Добавить фильтр',
        download: 'Выгрузить',
    },
    groupATMs: {
        header: 'Банкоматы выбранной группы',
        mainTitles: [ 'Название группы', 'Описание группы' ],
        title: [
            'Доступные банкоматы',
            'Выбранные банкоматы'
        ],
        tableHeaders: [
            'ATM ID',
            'Модель',
            'Адрес'
        ],
        popupContent: {
            removeGroupPopup: {
                titleBeforeId: "Группа",
                titleAfterId: "будет удалена, Вы уверены ?",
            },
            editGroupPopup: {
                title: "Измените описание группы",
                idLabel: "Название группы",
                descriptionLabel: "Описание"
            },
            addGroupPopup: {
                title: "Добавить Группу",
                idLabel: "Название группы",
                descriptionLabel: "Описание группы"
            }
        }
    },
    institutes: {
        title: [ 'Идентификатор', 'Описание' ],
        popupContent: {
            addInstitutePopup: {
                title: "Добавить Институт",
                idLabel: "Идентификатор",
                descriptionLabel: "Описание"
            },
            editInstitutePopup: {
                title: "Измените описание Института",
                idLabel: "Идентификатор",
                descriptionLabel: "Описание"
            },
            removeInstitutePopup: {
                titleBeforeId: "Инстиут",
                titleAfterId: "будет удален, Вы уверены ?",
            },
        }
    },
    monitoring: {
        monitoringStatusTableTitle:[
            "№ АТМ", "Модель","Название", "Статус","Проблемы", "Cash-out",
            "RUR", "USD","EUR", "Cash-in","Reject", "Статус",
            "Посл. выдача", "Посл. прием","НКС", "НКЧ","Инциденты"
        ],
        monitoringBalanceTableTitle: [
            "№ АТМ", "Название","Cash-out", "Cas1 Cash","Cas1 Notes",
            "Cas2 Cash","Cas2 Notes","Cas3 Cash","Cas3 Notes","Cas4 Cash","Cas4 Notes",
            "RUR", "USD","EUR", "Дней до отпуст.","Посл инк.", "Дата инкас.",
            "Сумма инкас.", "Reject", "Статус"
        ],
        labels: {
            searchGroup: 'Группа ATM',
            searchId: 'ID банкомата',
            searchAddress: 'ID банкомата',
        },
        tabs: [
            'Статусы', 'Балансы'
        ]
    },
    chartPie: {
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
    },
    chartLine: {
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
    }
};
