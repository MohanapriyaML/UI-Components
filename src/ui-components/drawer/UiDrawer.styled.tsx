import { Drawer } from '@mui/material';
import { styled } from '@mui/material/styles';



export const DrawerContainer = styled(Drawer)(({ theme }) => ({
    width:"450px",
    '& .MuiDrawer-paper': {
        backgroundColor: "white",
        width: "450px",
        boxSizing: 'border-box'
    },

    [theme.breakpoints.down('sm')]: {
        '& .MuiDrawer-paper': {
            backgroundColor: "white",
            width: '100%',
            maxWidth: '300px'
        }
    }

}));

export const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: '0px 20px',
    ...theme.mixins.toolbar,
    justifyContent: 'space-between',
    borderBottom: `1px solid grey`,
    position: 'sticky',
    top: 0,
    background: "white",
    zIndex: 1
}));


