import {
    ADD_BITE, DELETE_BITE, LIKE_BITE, LOADING_BITES,
    LOADING_COMMENT, SET_BITES, SET_BITE, UNLIKE_BITE,
    ADD_COMMENT, CLEAR_BITES, SET_BITE_FILTER, ActionType, BitesStateType
} from './types'
import { SET_ERRORS } from '../../Navigation'

const initialState: BitesStateType = {
    bites: [],
    bite: {
        biteId: 0,
        comments: [],
        commentsCount: 0,
        likesCount: 0,
        imageUrl: '',
        userHandle: '',
        createdAt: new Date(),
        body: '',
    },
    biteFilter: 'desc',
    haveMoreBites: true,
    loadingBites: false,
    loadingComment: false,
    offset: 0
}

export const reducer = (state = initialState, action: ActionType): BitesStateType => {
    switch (action.type) {
        case SET_BITES: return {
            ...state,
            bites: [...state.bites, ...action.payload],
            loadingBites: false,
            haveMoreBites: action.payload && action.payload.length === 10
        }

        case SET_BITE: return {
            ...state,
            bite: action.payload,
            loadingBites: false
        }

        case SET_BITE_FILTER: return {
            ...state,
            biteFilter: action.payload,
        }

        case ADD_BITE: return {
            ...state,
            bites: [action.payload, ...state.bites]
        }

        case ADD_COMMENT: {
            const newBite = {
                ...state.bite,
                comments: [action.payload, ...state.bite.comments],
                commentsCount: state.bite.commentsCount + 1
            }

            const biteIndex = state.bites.findIndex(bite => bite.biteId === action.payload.biteId)
            state.bites[biteIndex] = newBite

            return {
                ...state,
                bite: newBite,
                bites: [...state.bites],
                loadingComment: false
            }
        }

        case LOADING_BITES: return {
            ...state,
            loadingBites: true
        }

        case LOADING_COMMENT: return {
            ...state,
            loadingComment: true
        }

        case LIKE_BITE:
        case UNLIKE_BITE:
            const biteIndex = state.bites.findIndex(bite => bite.biteId === action.payload.biteId)
            state.bites[biteIndex] = action.payload
            return {
                ...state,
                bites: [...state.bites],
                bite: {
                    ...state.bite,
                    likesCount: action.payload.likesCount
                }
            }

        case DELETE_BITE: return {
            ...state,
            bites: state.bites.filter(bite => bite.biteId !== action.payload)
        }

        case SET_ERRORS: return {
            ...state,
            loadingBites: false,
            loadingComment: false
        }

        case CLEAR_BITES: return {
            ...state,
            bites: [],
        }

        default: return state
    }
}