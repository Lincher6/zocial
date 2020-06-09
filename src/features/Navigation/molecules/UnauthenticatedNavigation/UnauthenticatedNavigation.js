import React from 'react'
import { NavLink } from "react-router-dom";
import { Home, Lock, LibraryBooks } from "@material-ui/icons";
import { EditButton } from "../../../common/EditButton";
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';

export const UnauthenticatedNavigation = props => (
    <React.Fragment>
        <NavLink to={'/'}>
            <EditButton tip={'Главная'}>
                <Home />
            </EditButton>
        </NavLink>
        <NavLink to={'/users'}>
            <EditButton tip={'Пользователи'}>
                <PeopleAltIcon />
            </EditButton>
        </NavLink>
        <NavLink to={'/login'}>
            <EditButton tip={'Войти'}>
                <Lock />
            </EditButton>
        </NavLink>
        <NavLink to={'/signUp'}>
            <EditButton tip={'Регистрация'}>
                <LibraryBooks />
            </EditButton>
        </NavLink>
    </React.Fragment>
)