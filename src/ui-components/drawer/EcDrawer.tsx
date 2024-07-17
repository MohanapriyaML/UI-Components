import { IconButton, Typography } from '@mui/material';
import { EcDrawerProps } from './types';
import CloseIcon from '@mui/icons-material/Close';
import { DrawerContainer, DrawerHeader } from './EcDrawer.styled';


const EcDrawer = (props: EcDrawerProps) => {
    const { title, position = 'right', children, open, onClick} = props;
    return (
        <DrawerContainer anchor={position} open={open}>
            <DrawerHeader>
                <Typography variant="h6" fontWeight="bold" component="h6">
                    {title}
                </Typography>
                <IconButton onClick={onClick}>
                    <CloseIcon />
                </IconButton>
            </DrawerHeader>
            {children}
        </DrawerContainer>
    );
};

export default EcDrawer;
