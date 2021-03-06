import { Button as rawButton, Typography as rawTypography } from '@material-ui/core'
import styled from 'styled-components'

export const Button = styled(rawButton)`
    box-shadow: 0 0 4px 0 var(--${props => props.color});
    margin: 10px !important;
    @media (max-width: 960px) {
        margin: 5px !important;
        padding: 5px 10px;
    }
    &: hover: focus: active {
        box - shadow: none;
    }
`

export const ButtonSmall = styled(rawButton)`
    padding: 3px 8px;
    font-size: .7rem;
`

export const Typography = styled(rawTypography)`
    text-shadow: 0 0 4px var(--${props => props.color});
`