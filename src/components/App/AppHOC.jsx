import { cloneElement } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {pathOr} from "ramda";

import { logoutAction } from './action';

const AppHOC = ({ children, isAuthenticated, logoutAction }) => cloneElement(children, {
    isAuthenticated,
    logoutCallback: logoutAction,
});

AppHOC.propTypes = {
    isAuthenticated: PropTypes.bool,
    logoutAction: PropTypes.func,
    children: PropTypes.any,
};

const mapStateToProps = state => ({
    isAuthenticated: pathOr(false, ['appReducer', 'authorization', 'isAuthenticated'], state)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    logoutAction: () => { console.log(ownProps); dispatch(logoutAction())}
});

export default connect(mapStateToProps, mapDispatchToProps)(AppHOC);
