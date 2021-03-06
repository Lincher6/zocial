import React, { useCallback, useEffect } from 'react'
import Grid from '@material-ui/core/Grid';
import { Login } from "features/Authentication";
import { profileActions } from 'features/Profile'
import { uiSelectors, uiActions } from 'features/Navigation'
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { ErrorBoundary } from 'features/common';

export const LoginPage = props => {
    const history = useHistory()
    const dispatch = useDispatch()
    const { errors, loading } = useSelector(uiSelectors.ui)

    const login = useCallback(async (credentials) => {
        dispatch(profileActions.login(credentials, history))

    }, [dispatch, history])

    useEffect(() => {
        return () => dispatch(uiActions.clearErrors_AC())
    }, [login, dispatch])

    return (
        <Grid container>
            <Grid item sm />
            <Grid item sm>
                <ErrorBoundary>
                    <Login
                        login={login}
                        loginError={errors.error}
                        isLoading={loading}
                    />
                </ErrorBoundary>
            </Grid>
            <Grid item sm />
        </Grid>
    )
}