import React, { useState } from 'react'
import { useStyles } from '../styles'
import { Favorite, Comment } from '@material-ui/icons'
import { Typography } from '@material-ui/core'
import { useDayjs } from 'lib/hooks/useDayjs'
import { BiteDetails } from 'features/Bites'

export const Notification = ({ sender, read, type, createdAt, biteId }) => {
    const classes = useStyles()
    const [open, setOpen] = useState(false)
    const { dayjs } = useDayjs()
    const color = read ? 'primary' : 'secondary'
    const Icon = (props) => type === 'like' ? <Favorite {...props} /> : <Comment {...props} />
    let notification

    switch (type) {
        case 'like':
            notification = `${sender} лайкнул ваш пост`
            break

        case 'comment':
            notification = `${sender} прокомментировал ваш пост`
            break

        default:
            notification = 'уведомление было удалено'
    }


    return (
        <div>
            <div
                className={classes.notification}
                onClick={() => setOpen(true)}
            >
                <Icon color={color} className='icon' />
                <div>
                    <Typography variant='body1'>
                        {notification}
                    </Typography>
                    <Typography variant='body2' className='date'>
                        {dayjs(createdAt).fromNow()}
                    </Typography>
                </div>
            </div>

            {open && <BiteDetails biteId={biteId} open={open} setOpen={setOpen} />}
        </div >
    )
}