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
    }
};
