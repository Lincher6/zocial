import { makeStyles } from "@material-ui/core/styles";
import { theme } from '../../ui/theme'

export const useStyles = makeStyles({
    grid: {
        display: `grid`,
        gridGap: 10,
        gridTemplateColumns: `1fr 350px`,
        [theme.breakpoints.down('sm')]: {
            '& .list': {
                gridArea: 'a'
            },
            '& .search': {
                gridArea: 'b',
                maxWidth: 350,
                margin: `0 auto`
            },
            gridTemplateAreas: ` 'b b' 
                                 'a a' `,
        }
    }
})