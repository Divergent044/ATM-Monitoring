import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { connect } from 'react-redux';

import OptionButton from 'src-components/OptionButton'
import Ctx from 'src-components/Ctx';
import AddPopup from './containers/AddPopup/index';
import EditPopup from './containers/EditPopup/index';
import RemovePopup from './containers/RemovePopup/index';

import { fetchInstitutesData, createInstitute, changeInstitute, removeInstitute } from './actions';

import className from 'classnames/bind';
import styles from './style.less';
const cx = className.bind(styles);

class Institute extends Component {
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
        axios({
            method: 'GET',
            url: 'http://localhost:8080/institutes'
        }).then((response) => {
            this.props.fetchInstitutesData(response.data);
        })
    }

    toggleAddPopup = () => this.setState({
        showAddPopup: !this.state.showAddPopup
    });

    toggleEditPopup = (edited = false) => {
        if (edited === true) {
            this.setState({
                showEditPopup: !this.state.showEditPopup,
                selectRow: false,
                selectedRow: null,
                currentInstId: null
            })
        } else {
            this.setState({
                showEditPopup: !this.state.showEditPopup,
            })
        }
    };

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
        const { institutes, createInstitute, changeInstitute, removeInstitute } = this.props;
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
                        closePopup={close => this.toggleEditPopup(close)}
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

                <div className={cx('button-wrap')}>
                    <OptionButton buttonText={Ctx.optionButtonText.add} clickAction={this.toggleAddPopup} />
                    <OptionButton
                        clickAction={this.toggleEditPopup}
                        buttonText={Ctx.optionButtonText.edit}
                        disabled={!selectRow}
                    />
                    <OptionButton
                        buttonText={Ctx.optionButtonText.remove}
                        disabled={!selectRow}
                        clickAction={this.toggleRemovePopup}
                    />
                </div>
                <table className={cx('table')}>
                    <thead>
                        <tr className={cx('row', 'row-head')}>
                            {Ctx.institutes.title.map((item, index) => (
                                <th className={cx('head-cell')} key={index}>
                                    {item}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {institutes.map((item, index) => (
                            <tr
                                className={cx('row', index === selectedRow ? 'selected' : '')}
                                key={index}
                                onClick={e => this.selectRow(e.target.tabIndex, item.id)}
                            >
                                <td className={cx('cell')} tabIndex={index}>
                                    {item.id}
                                </td>
                                <td className={cx('cell')} tabIndex={index}>
                                    {item.description}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Fragment>
        );
    }
}

Institute.propTypes = {
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
