import { makeStyles } from "@material-ui/core/styles";
import { theme } from 'ui/theme'

export const useStyles = makeStyles({
    profile: {
        marginTop: 110,
        marginBottom: 20,
        textAlign: `center`,
        padding: 20,
        position: `relative`,
        [theme.breakpoints.down('xs')]: {
            padding: 5,
        },
    },

    grid: {
        display: `grid`,
        gridTemplateAreas: `
            'a b b b c'
            `,
        [theme.breakpoints.down('xs')]: {
            gridTemplateAreas: `
            'b b b b'
            'a a c c'
            `,
        },

    },

    profileCard: {
        textAlign: `center`,
        padding: 20,
        position: `relative`,
        '& button': {
            margin: 10
        }
    },

    profileInfo: {
        textAlign: 'center',
        '& svg, span': {
            verticalAlign: 'middle'
        },
        '& a': {
            '&:hover': {
                color: 'var(--primary)',
            }
        },
        '& hr': {
            border: 'none',
            marginBottom: 5
        },
        '& svg.button': {
            '&:hover': {
                cursor: 'pointer'
            }
        },
        '& .disabled': {
            opacity: .5
        }
    },

    profilePicture: {
        textAlign: 'center',
        position: 'relative',
        marginBottom: 10,
        '& .profile-image': {
            width: '200px',
            height: '200px',
            objectFit: 'cover',
            maxWidth: '100%',
            borderRadius: `50%`,
            [theme.breakpoints.down('xs')]: {
                width: '120px',
                height: '120px',
            },
        },
        '& .image-edit:hover': {
            opacity: .4,
            transition: `opacity .3s`,
            cursor: 'pointer'
        },
        '& .image-edit': {
            opacity: 0,
            transition: `opacity .3s`,
            width: '200px',
            height: '200px',
            [theme.breakpoints.down('xs')]: {
                width: '120px',
                height: '120px',
            },
            objectFit: 'cover',
            maxWidth: '100%',
            borderRadius: `50%`,
            position: 'absolute',
            margin: 'auto',
            top: 0, left: 0, bottom: 5, right: 0
        }
    },

    profilePictureBig: {
        textAlign: 'center',
        position: 'relative',
        marginBottom: 10,
        marginTop: -120,
        [theme.breakpoints.down('xs')]: {
            marginTop: -80,
        },
        '& .profile-image': {
            border: `5px solid ivory`,
            width: '200px',
            height: '200px',
            [theme.breakpoints.down('xs')]: {
                width: '120px',
                height: '120px',
            },
            objectFit: 'cover',
            maxWidth: '100%',
            boxShadow: `0 15px 30px 0 rgba(0, 0, 0, .5)`,
        },
        '& .image-edit:hover': {
            opacity: .4,
            transition: `opacity .3s`,
            cursor: 'pointer'
        },
        '& .image-edit': {
            opacity: 0,
            transition: `opacity .3s`,
            width: '200px',
            height: '200px',
            [theme.breakpoints.down('xs')]: {
                width: '120px',
                height: '120px',
            },
            objectFit: 'cover',
            maxWidth: '100%',
            position: 'absolute',
            margin: 'auto',
            top: 0, left: 0, bottom: 5, right: 0
        }
    },

    album: {
        margin: 10,
    },

    friendsList: {
        textAlign: `left`,
        maxHeight: 500
    },

    friend: {
        width: 250,
        display: `flex`,
        '& .friend-image-container': {
            position: `relative`,
            '& .isOnline': {
                position: "absolute",
                right: `15%`,
                bottom: `15%`,
                height: 15,
                width: 15,
                backgroundColor: `var(--primary)`,
                borderRadius: `50%`,
                border: `2px solid var(--paper)`
            }
        },
        '& .friend-image': {
            width: 70,
            height: 70,
            borderRadius: `50%`,
            boxShadow: `-5px 5px 1px 0 rgba(0, 0, 0, .5)`,
            objectFit: 'cover',
            marginRight: 10
        },
        '& .friend-info': {
            textAlign: 'left',
            flexGrow: 1
        },
        '& .friend-handle': {
            marginBottom: 5
        }
    },

    noProfile: {
        '& .buttons': {
            margin: 5
        },
        textAlign: "center",
    },

    loading: {
        textAlign: "center",
    },

    exitButton: {
        position: `absolute !important`,
        top: 0,
        right: 0
    }
})