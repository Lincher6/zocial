import React from 'react'
import { Card, CardMedia, Typography, Button, Grid } from '@material-ui/core'
import LocationOn from '@material-ui/icons/LocationOn';
import { useStyles } from '../../styles'
import { NavLink } from 'react-router-dom'
import { ReadMore } from '../../../common'
import { Follow } from '../../molecules/Follow';

export const User = ({ imageUrl, handle, bio, location, isMe }) => {
    const classes = useStyles()

    return (
        <Card className={classes.user}>
            <div className="container">
                <div>
                    <CardMedia
                        className='image'
                        image={imageUrl}
                        component={NavLink}
                        to={`/users/${handle}`}
                        title='User image'
                    />
                </div>
                <div className='content'>
                    <div className='title'>
                        <Typography
                            variant='h5'
                            component={NavLink}
                            to={`/users/${handle}`}
                            color='secondary'
                        >
                            {handle}
                        </Typography>
                        <Typography
                            variant='body2'
                            styles={{ verticalAlign: `middle !important` }}
                        >
                            {location || 'нет информации'}&nbsp;<LocationOn color='secondary' />
                        </Typography>

                    </div>
                    <div className='body'>
                        <hr />
                        <ReadMore text={bio || "Новый пользователь"} className='body' />
                    </div >
                </div>


            </div>
            {
                !isMe
                    ? <div className="actions">
                        <Follow userHandle={handle} />
                        <Button variant='outlined' color='secondary'>Написать</Button>
                    </div>
                    : null
            }
        </Card >
    )
}