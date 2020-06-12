import React, { Fragment, useCallback } from 'react'
import { Button } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { profileSelectors } from '../../../Profile'
import { usersSelectors, usersActions } from '../../model'

export const Follow = ({ userHandle }) => {
    const dispatch = useDispatch()
    const friends = useSelector(profileSelectors.friends)
    const authenticated = useSelector(profileSelectors.authenticated)
    const followingInProgress = useSelector(usersSelectors.followingInProgress)

    const isFollowed = friends.some(friend => friend === userHandle)
    const isInProgress = followingInProgress.some(userInProgress => userInProgress === userHandle)

    const handleClick = useCallback(() => {
        if (!authenticated) {
            alert('Нужно войти')
        } else if (isFollowed) {
            dispatch(usersActions.follow(userHandle, false))
        } else {
            dispatch(usersActions.follow(userHandle, true))
        }
    }, [dispatch, authenticated, isFollowed, userHandle])

    return (
        <Fragment>
            {
                isFollowed
                    ? <Button variant='outlined' onClick={handleClick} disabled={isInProgress}>Отписаться</Button>
                    : <Button variant='outlined' color='primary' onClick={handleClick} disabled={isInProgress}>Подписаться</Button>
            }
        </Fragment>

    )

}