import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { connect } from 'react-redux';

import Header from '../../components/Header';
import OptionButton from '../../components/OptionButton'
import AddPopup from '../../components/AddPopup';
import EditPopup from '../../components/EditPopup';
import RemovePopup from '../../components/RemovePopup';
import { instituteTableTitle, optionButtonText } from '../../assets/constants';

import { fetchInstitutesData, createInstitute, changeInstitute, removeInstitute } from './actions';

import getInstitutes from '../../testData/getInstitutes.json'

import './style.less';

class Institute extends Component {
    static propTypes ={
        fetchInstitutesData: PropTypes.func,
        createInstitute: PropTypes.func,
        changeInstitute: PropTypes.func,
        removeInstitute: PropTypes.func,
        institutes: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.string,
                description: PropTypes.string
            })
        )
    };

    state = {
        showAddPopup: false,
        showEditPopup: false,
        showRemovePopup: false,
        selectRow: false,
        selectedRow: null,
        currentInstId: null
    };

    componentWillMount() {
        document.title = `${document.title} - Institute` ;
        /*axios({
            method: 'GET',
            url: 'http://localhost:8080/institutes'
        }).then((res) => {
            this.props.fetchInstitutesData(res);
        })*/
        this.props.fetchInstitutesData(getInstitutes);
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
                currentInstId: null
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
            currentInstId: instId
        });
    };

    render() {
        const { institutes, createInstitute } = this.props;
        const {
            selectRow,
            selectedRow,
            showAddPopup,
            showEditPopup,
            showRemovePopup,
            currentInstId
        } = this.state;

        return (
            <Fragment>
                {showAddPopup && (
                    <AddPopup
                        closePopup={this.toggleAddPopup}
                        resultAction={(newEntry) => createInstitute(institutes, newEntry)}
                    />
                )}

                {showEditPopup && (
                    <EditPopup
                        id={currentInstId}
                        index={selectedRow}
                        closePopup={this.toggleEditPopup}
                        resultAction={(index, newDescription) => changeInstitute(institutes, index, newDescription)}
                    />
                )}

                {showRemovePopup && (
                    <RemovePopup
                        id={currentInstId}
                        index={selectedRow}
                        closePopup={close => this.toggleRemovePopup(close)}
                        resultAction={(index) => removeInstitute(institutes, index)}
                    />
                )}
                <Header />
                <div className="button-wrap">
                    <OptionButton buttonText={optionButtonText.add} clickAction={this.toggleAddPopup} />
                    <OptionButton
                        clickAction={this.toggleEditPopup}
                        buttonText={optionButtonText.edit}
                        disabled={!selectRow}
                    />
                    <OptionButton
                        buttonText={optionButtonText.remove}
                        disabled={!selectRow}
                        clickAction={this.toggleRemovePopup}
                    />
                </div>
                <table className="table">
                    <thead>
                        <tr className="row">
                            {instituteTableTitle.map((item, index) => (
                                <th className="head-cell" key={index}>
                                    {item}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {institutes.map((item, index) => (
                            <tr
                                className={`row ${(index === selectedRow) ? 'selected' : ''}`}
                                key={index}
                                onClick={e => this.selectRow(e.target.tabIndex, item.id)}
                            >
                                <td className="cell" tabIndex={index}>{item.id}</td>
                                <td className="cell" tabIndex={index}>{item.description}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
    institutes: state.institutesReducer.institutes
});

const mapDispatchToProps = (dispatch) => ({
    fetchInstitutesData: (data) => dispatch(fetchInstitutesData(data)),
    createInstitute: (currentData, newEntry) => dispatch(createInstitute(currentData, newEntry)),
    changeInstitute: (allInstitutes, index, newDescription) => dispatch(changeInstitute(allInstitutes, index, newDescription)),
    removeInstitute: (allInstitutes, index) => dispatch(removeInstitute(allInstitutes, index))
});

export default connect(mapStateToProps, mapDispatchToProps)(Institute);
