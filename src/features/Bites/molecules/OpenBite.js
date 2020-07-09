import React, { useState, Fragment } from 'react'
import { EditButton } from '../../common'
import { BiteDetails } from '../organisms/BiteDetails'
import OpenInNew from '@material-ui/icons/OpenInNew'

export const OpenBite = ({ biteId }) => {
    const [open, setOpen] = useState(false)

    return (
        <Fragment>
            <EditButton tip={'открыть'} onClick={() => setOpen(true)}>
                <OpenInNew color='primary' className='icon' />
            </EditButton>

            {open && <BiteDetails biteId={biteId} open={open} setOpen={setOpen} />}
        </Fragment>
    )
}