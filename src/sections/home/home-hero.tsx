import { Typography } from "@mui/material";
import {  styled, alpha } from "@mui/material/styles";
import { textGradient, bgGradient, bgBlur } from 'src/theme/css';
import Box from "@mui/material/Box";

export default function HomeHero() {

    const StyledRoot = styled('div')(({ theme }) => ({
        ...bgGradient({
          color: alpha(theme.palette.background.default, theme.palette.mode === 'light' ? 0.9 : 0.94),
          imgUrl: '/assets/background/roughbg.jpg',
        }),
        width: '100%',
        height: '100vh',
        position: 'relative',
        [theme.breakpoints.up('md')]: {
          top: 0,
          left: 0,
          position: 'fixed',
        },
    }));

    return (<>
        <StyledRoot ></StyledRoot>
        <Box sx= {{ height: { md: '100vh' } }} >
            
        </Box> 
     </>)
}