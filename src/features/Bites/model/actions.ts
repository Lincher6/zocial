import { AppDispatch } from './../../../lib/store/store';
import { ADD_BITE, DELETE_BITE, LIKE_BITE, LOADING_BITES, SET_BITES, UNLIKE_BITE, SET_BITE, ADD_COMMENT, LOADING_COMMENT, CLEAR_BITES, SET_BITE_FILTER, BiteType } from "./types"
import { uiActions } from 'features/Navigation'
import { bitesApi } from 'api/bitesApi'

const setBites_AC = (payload: Array<BiteType>) => ({
    type: SET_BITES,
    payload
})

const setBite_AC = (payload: BiteType) => ({
    type: SET_BITE,
    payload
})

export const setBiteFilter_AC = (payload: string) => ({
    type: SET_BITE_FILTER,
    payload
})

const addBite_AC = (payload: BiteType) => ({
    type: ADD_BITE,
    payload
})

const addComment_AC = (payload: any) => ({
    type: ADD_COMMENT,
    payload
})

const likeBite_AC = (payload: number) => ({
    type: LIKE_BITE,
    payload
})

const unlikeBite_AC = (payload: number) => ({
    type: UNLIKE_BITE,
    payload
})

const loadingBites_AC = () => ({
    type: LOADING_BITES,
})

const loadingComment_AC = () => ({
    type: LOADING_COMMENT,
})

const deleteBite_AC = (payload: number) => ({
    type: DELETE_BITE,
    payload
})

export const clearBites_AC = () => ({
    type: CLEAR_BITES
})

export const getBites = (offset = 0, userHandle = '', biteFilter = 'desc') => async (dispatch: AppDispatch) => {
    dispatch(loadingBites_AC())
    const bitesData = await bitesApi.getBites(offset, userHandle, biteFilter)
    if (bitesData.resultCode === 0) {
        dispatch(setBites_AC(bitesData.data))
        dispatch(uiActions.clearErrors_AC())
    } else {
        dispatch(uiActions.setErrors_AC({ error: bitesData.error }))
    }
}

export const getBite = (biteId: number) => async (dispatch: AppDispatch) => {
    dispatch(uiActions.loadingUI_AC())
    const biteData = await bitesApi.getBite(biteId)
    if (biteData.resultCode === 0) {
        dispatch(setBite_AC(biteData.data))
        dispatch(uiActions.clearErrors_AC())
    } else {
        dispatch(uiActions.setErrors_AC({ error: biteData.error }))
    }
}

export const addBite = (bite: { body: string }) => async (dispatch: AppDispatch) => {
    dispatch(uiActions.loadingUI_AC())
    const biteData = await bitesApi.addBite(bite)
    if (biteData.resultCode === 0) {
        dispatch(addBite_AC(biteData.data))
        dispatch(uiActions.clearErrors_AC())
    } else {
        dispatch(uiActions.setErrors_AC({ error: biteData.error }))
    }
}

export const addComment = (biteId: number, comment: { body: string }) => async (dispatch: AppDispatch) => {
    dispatch(loadingComment_AC())
    const commentData = await bitesApi.addComment(biteId, comment)
    if (commentData.resultCode === 0) {
        dispatch(addComment_AC(commentData.data))
        dispatch(uiActions.clearErrors_AC())
    } else {
        dispatch(uiActions.setErrors_AC({ error: commentData.error }))
    }
}

export const likeBite = (biteId: number) => async (dispatch: AppDispatch) => {
    const biteData = await bitesApi.likeBite(biteId)
    if (biteData.resultCode === 0) {
        dispatch(likeBite_AC(biteData.data))
    } else {
        dispatch(uiActions.setErrors_AC({ error: biteData.error }))
    }
}

export const unlikeBite = (biteId: number) => async (dispatch: AppDispatch) => {
    const biteData = await bitesApi.unlikeBite(biteId)
    if (biteData.resultCode === 0) {
        dispatch(unlikeBite_AC(biteData.data))
    } else {
        dispatch(uiActions.setErrors_AC({ error: biteData.error }))
    }
}

export const deleteBite = (biteId: number) => async (dispatch: AppDispatch) => {
    const biteData = await bitesApi.deleteBite(biteId)
    if (biteData.resultCode === 0) {
        dispatch(deleteBite_AC(biteId))
    } else {
        dispatch(uiActions.setErrors_AC({ error: biteData.error }))
    }
}