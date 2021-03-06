import { SET_AUTHENTICATED, SET_AUTHENTICATED_PROFILE, LOADING_PROFILE, LOGOUT, MARK_NOTIFICATIONS, SET_IS_ONLINE } from './types'
import { LIKE_BITE, UNLIKE_BITE } from "../../Bites";
import { FOLLOW, UNFOLLOW } from '../../Users';

const initialState = {
    handle: null,
    authenticated: false,
    loadingProfile: false,
    credentials: {},
    likes: [],
    notifications: [],
    images: [],
    friends: [],
    isOnline: false,
    newMessages: 0
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTHENTICATED: return {
            ...state,
            authenticated: action.payload
        }

        case SET_AUTHENTICATED_PROFILE: return {
            ...state,
            handle: action.payload.credentials.handle,
            friends: action.payload.credentials.friends,
            authenticated: true,
            loadingProfile: false,
            ...action.payload
        }

        case SET_IS_ONLINE: return {
            ...state,
            isOnline: action.payload
        }

        case LOGOUT: return {
            ...state,
            handle: null,
            authenticated: false,
            credentials: {},
        }

        case LIKE_BITE:
            const like = {
                biteId: action.payload.biteId,
                userHandle: state.credentials.handle
            }

            return {
                ...state,
                likes: [...state.likes, like]
            }

        case UNLIKE_BITE:
            return {
                ...state,
                likes: state.likes.filter(like => like.biteId !== action.payload.biteId)
            }

        case FOLLOW:
            return {
                ...state,
                friends: [...state.friends, action.payload]
            }

        case UNFOLLOW:
            return {
                ...state,
                friends: state.friends.filter(friend => friend !== action.payload)
            }

        case MARK_NOTIFICATIONS:
            return {
                ...state,
                notifications: state.notifications.map(element => {
                    element.read = true
                    return element
                })
            }

        case LOADING_PROFILE: return {
            ...state,
            loadingProfile: true
        }

        default: return state
    }
}