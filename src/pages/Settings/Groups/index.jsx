import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from "axios";
import PropTypes from "prop-types";

import AddPopup from "./containers/AddPopup";
import EditPopup from "./containers/EditPopup";
import RemovePopup from "./containers/RemovePopup";
import GroupATMs from './containers/GroupATMs';
import OptionButton from 'src-components/OptionButton';
import Ctx from 'src-components/Ctx';

import {fetchGroupsData} from './actions';

import getGroups from '../../../testData/getGroups.json';

import classNames from 'classnames/bind';
import styles from './style.less';
const cx = classNames.bind(styles);


class Groups extends Component {
    state = {
        showAddPopup: false,
        showEditPopup: false,
        showRemovePopup: false,
        selectRow: false,
        selectedRow: null,
        currentGroupId: null
    };

    componentWillMount() {
        document.title = `${document.title} - ATM Groups` ;
        /*axios({
            method: 'GET',
            url: 'http://localhost:8080/atm/groups'
        }).then((response) => {
            this.props.fetchGroupsData(response.data);
        })*/
        this.props.fetchGroupsData(getGroups);
    }

    toggleAddPopup = () => this.setState({
        showAddPopup: !this.state.showAddPopup
    });

    toggleEditPopup = () => this.setState({
        showEditPopup: !this.state.showEditPopup
    });

    toggleRemovePopup = (deleted = false) => {
        if (deleted === true) {
            this.setState({
                showRemovePopup: !this.state.showRemovePopup,
                selectRow: false,
                selectedRow: null,
                currentGroupId: null
            })
        } else {
            this.setState({
                showRemovePopup: !this.state.showRemovePopup,
            })
        }
    };

    selectRow = (rowIndex, instId) => {
        this.setState({
            selectRow: rowIndex !== this.state.selectedRow,
            selectedRow: (rowIndex !== this.state.selectedRow) ? rowIndex : null,
            currentGroupId: instId
        });
    };

    render() {
        const { groups } = this.props;
        const {
            selectRow,
            selectedRow,
            showAddPopup,
            showEditPopup,
            showRemovePopup,
            currentGroupId
        } = this.state;

        return (
            <div>
                {showAddPopup && (
                    <AddPopup
                        closePopup={this.toggleAddPopup}
                        //resultAction={(newEntry) => createInstitute(institutes, newEntry)}
                    />
                )}

                {showEditPopup && (
                    <EditPopup
                        id={currentGroupId}
                        index={selectedRow}
                        groupName={groups[selectedRow].name}
                        closePopup={this.toggleEditPopup}
                        //resultAction={(index, newDescription) => changeInstitute(institutes, index, newDescription)}
                    />
                )}

                {showRemovePopup && (
                    <RemovePopup
                        id={currentGroupId}
                        index={selectedRow}
                        groupName={groups[selectedRow].name}
                        closePopup={close => this.toggleRemovePopup(close)}
                        //resultAction={(index) => removeInstitute(institutes, index)}
                    />
                )}
                <table className={cx('table-groups')}>
                    <thead>
                    <tr className={cx('row', 'row-head')}>
                        {Ctx.groupATMs.mainTitles.map((item, index) => (
                            <th className={cx('head-cell')} key={index}>
                                {item}
                            </th>
                        ))}
                    </tr>
                    </thead>
                    <tbody>
                    {groups.map((item, index) => (
                        <tr
                            className={cx('row', `${(index === selectedRow) ? 'selected' : ''}`)}
                            key={index}
                            onClick={e => this.selectRow(e.target.tabIndex, item.id)}
                        >
                            <td className={cx('cell')} tabIndex={index}>{item.name}</td>
                            <td className={cx('cell')} tabIndex={index}>{item.description}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <div className={cx('button-wrap')}>
                    <OptionButton
                        buttonText={Ctx.optionButtonText.addGroup}
                        clickAction={this.toggleAddPopup}
                        className={cx('groups-btn')}
                    />
                    <OptionButton
                        clickAction={this.toggleEditPopup}
                        buttonText={Ctx.optionButtonText.editGroup}
                        disabled={!selectRow}
                        className={cx('groups-btn')}
                    />
                    <OptionButton
                        buttonText={Ctx.optionButtonText.removeGroup}
                        disabled={!selectRow}
                        clickAction={this.toggleRemovePopup}
                        className={cx('groups-btn')}
                    />
                </div>

                {selectRow && (
                    <GroupATMs
                        atms={groups[selectedRow].atms}
                        atmsNotInGroup={groups[selectedRow].atmsNotInGroup}
                    />
                )}
            </div>
        );
    }
}

Groups.propTypes = {
    fetchGroupsData: PropTypes.func,
    groups: PropTypes.array
};

const mapStateToProps = (state) => ({
    groups: state.groupsReducer.groups
});

const mapDispatchToProps = (dispatch) => ({
    fetchGroupsData: data => dispatch(fetchGroupsData(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Groups);
