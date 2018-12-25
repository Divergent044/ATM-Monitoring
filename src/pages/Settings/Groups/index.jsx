import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import axios from "axios";
import PropTypes from "prop-types";

import './style.less';
import AddPopup from "./containers/AddPopup";
import EditPopup from "./containers/EditPopup";
import RemovePopup from "./containers/RemovePopup";
import Header from "../../../components/Header";
import OptionButton from "../../../components/OptionButton";

import {groupsTableTitle, optionButtonText} from "../../../assets/constants";
import {fetchGroupsData} from './actions';

import getGroups from '../../../testData/getGroups.json';

class Groups extends Component {
    static propTypes = {
        fetchGroupsData: PropTypes.func,
        groups: PropTypes.array
    };

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
            <Fragment>
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
                <Header />

                <table className="table-groups">
                    <thead>
                    <tr className="row">
                        {groupsTableTitle.map((item, index) => (
                            <th className="head-cell" key={index}>
                                {item}
                            </th>
                        ))}
                    </tr>
                    </thead>
                    <tbody>
                    {groups.map((item, index) => (
                        <tr
                            className={`row ${(index === selectedRow) ? 'selected' : ''}`}
                            key={index}
                            onClick={e => this.selectRow(e.target.tabIndex, item.id)}
                        >
                            <td className="cell" tabIndex={index}>{item.name}</td>
                            <td className="cell" tabIndex={index}>{item.description}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <div className="button-wrap">
                    <OptionButton
                        buttonText={optionButtonText.addGroup}
                        clickAction={this.toggleAddPopup}
                        className="groups-btn"
                    />
                    <OptionButton
                        clickAction={this.toggleEditPopup}
                        buttonText={optionButtonText.editGroup}
                        disabled={!selectRow}
                        className="groups-btn"
                    />
                    <OptionButton
                        buttonText={optionButtonText.removeGroup}
                        disabled={!selectRow}
                        clickAction={this.toggleRemovePopup}
                        className="groups-btn"
                    />
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
    groups: state.groupsReducer.groups
});

const mapDispatchToProps = (dispatch) => ({
    fetchGroupsData: data => dispatch(fetchGroupsData(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Groups);