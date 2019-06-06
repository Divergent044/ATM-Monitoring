import axios from 'axios';
import { getCookie } from 'utils/cookie';
import Ctx from 'src-components/Ctx';

export const loginAction = encodedData => dispatch => {
    axios({
        method: 'POST',
        url: 'http://localhost:8080/base-service/login',
        withCredentials: 'true',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Basic ${encodedData}`
        }
    }).then(() => {
        dispatch({
            type: 'AUTH_SUCCESS',
            payload: {
                data: encodedData,
                cookie: getCookie(Ctx.cookieName),
                isAuthenticated: true,
                authResult: 'success',
            }
        });

        return true;
    }).catch(() => {
        dispatch({
            type: 'AUTH_ERROR',
            payload: {
                isAuthenticated: false,
                authResult: 'error',
            }
        });

        return false;
    })
};

export const logoutAction = encodedData => dispatch => {
    axios({
        method: 'POST',
        url: 'http://localhost:8080/base-service/logout',
        withCredentials: 'true',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Basic ${encodedData}`
        }
    }).then(() => dispatch({
        type: 'LOGOUT_SUCCESS',
        payload: {
            isAuthenticated: false,
        }
    })).catch(() => dispatch({
        type: 'LOGOUT_ERROR'
    }))
};
