'use client';

//@mui 
import Box from '@mui/material/Box';
// routes
import { usePathname } from 'src/routes/hooks';
// 
// import Footer from './footer';
import Header from './header';

//------------------------------------------------------------
type Props = {
    children: React.ReactNode;
}

export default function MainLayout({ children }: Props) {
    const pathname = usePathname();

    const isHome = pathname === '/';

    return (
        <Box sx={{dislay: 'flex', flexDirection: 'column', height: 1 }}>
            
            <Header/>

            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    ...(!isHome && {
                        pt: { xs: 8, md: 10 }
                    }) 
                }}
            >
                {children}
            </Box>
            <Box sx= {{ py: 20 }}>
                Chao mung anh em den voi trang home nay 
            </Box>
        </Box>
    )
}