import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { ExpandMoreProps } from './types';


export const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expanded, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expanded }) => ({
    transform: !expanded ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest
    })
}));
