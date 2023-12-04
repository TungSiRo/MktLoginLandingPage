import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Badge, { badgeClasses } from '@mui/material/Badge';
// hooks
import { useOffSetTop } from 'src/hooks/use-off-set-top';
import { useResponsive } from 'src/hooks/use-responsive';
// theme
import { bgBlur } from 'src/theme/css';
// routes
import { paths } from 'src/routes/paths';
// components
import Logo from 'src/components/logo';
import Label from 'src/components/label';
//
import { HEADER } from '../config-layout';
import { navConfig } from './config-navigation';
// import NavMobile from './nav/mobile';
// import NavDesktop from './nav/desktop';
//
import { SettingsButton, HeaderShadow, LoginButton } from 'src/layouts/_common';
import { Typography } from '@mui/material';
//------------------------------------------------------------------

export default function Header() {
    const theme = useTheme();

    const mdUp = useResponsive('up', 'md');

    const offsetTop = useOffSetTop(HEADER.H_DESKTOP);

    return (
        <AppBar>
            <Toolbar
                disableGutters
                sx={{
                    height: {
                        xs: HEADER.H_MOBILE,
                        md: HEADER.H_DESKTOP,
                    },
                    transition: theme.transitions.create(['height'], {
                        easing: theme.transitions.easing.easeInOut,
                        duration: theme.transitions.duration.shorter,
                    }),
                    ...(offsetTop && {
                        ...bgBlur({
                            color: theme.palette.background.default,
                          }),
                          height: {
                            md: HEADER.H_DESKTOP_OFFSET,
                          },
                        }),
                    }}
            >
                <Container sx={{ height: 1, display: 'flex', alignItem: 'center'}}>
                    <Badge
                        sx={{
                        [`& .${badgeClasses.badge}`]: {
                            top: 8,
                            right: -16,
                        },
                        }}
                        badgeContent={
                        <Link
                            href={'google.com'} //{paths.changelog}
                            target="_blank"
                            rel="noopener"
                            underline="none"
                            sx={{ ml: 1 }}
                        >
                        </Link>
                        }
                    >
                        <Logo />
                    </Badge>
                    <Typography variant='subtitle1' color={'white'} sx={{ pt: 1, ml: 0.5 }}>MKTLogin</Typography>
                    <Box sx={{flexGrow: 1}} />
                    {mdUp && <NavDeskTop offsetTop={offsetTop} data={navConfig} />}
                </Container>
            </Toolbar>
        </AppBar>
    )
}