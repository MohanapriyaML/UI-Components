import { GlobalStyles, css } from '@mui/material';

const GlobalFont = () => (
    <GlobalStyles
        styles={css`
            @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
            body {
                font-family: 'Poppins', sans-serif;
            }
        `}
    />
);
export default GlobalFont;
