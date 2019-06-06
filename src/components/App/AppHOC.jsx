import { cloneElement } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import {pathOr} from "ramda";

import { logoutAction } from './action';

const AppHOC = ({ children, isAuthenticated, logoutAction, data }) => cloneElement(children, {
    isAuthenticated,
    logoutCallback: () => logoutAction(data),
});

AppHOC.propTypes = {
    isAuthenticated: PropTypes.bool,
    logoutAction: PropTypes.func,
    children: PropTypes.any,
    data: PropTypes.any,
};

const mapStateToProps = state => ({
    isAuthenticated: pathOr(false, ['appReducer', 'authorization', 'isAuthenticated'], state),
    data: pathOr(false, ['appReducer', 'authorization', 'data'], state),
});

const mapDispatchToProps = (dispatch) => ({
    logoutAction: (data) => dispatch(logoutAction(data))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AppHOC));
