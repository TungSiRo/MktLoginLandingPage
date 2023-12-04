// routes
import { paths } from 'src/routes/paths';
// config
import { PATH_AFTER_LOGIN } from 'src/config-global';
// components
import Iconify from 'src/components/iconify';

//---------------------------------------------------------------------------------------------

export const navConfig = [
    { 
        titile: 'Solutions', 
        icon: <Iconify icon="solar:home-2-bold-duotone"/>,
        path: '/'
    },
    {
        title: 'Resources',
        path: 'Resources',
        icon: <Iconify icon="solar:atom-bold-duotone" />,
        children: [
            {
                title: 'Traffic arbitrage',
                path: '',
                icon: <Iconify icon="solar:home-2-bold-duotone"/>,
            },
            {
                title: 'E-commerce',
                path: '',
                icon: <Iconify icon="solar:home-2-bold-duotone"/>,
            },
            {
                title: 'Betting',
                path: '',
                icon: <Iconify icon="solar:home-2-bold-duotone"/>,
            },
            {
                title: 'Agencies',
                path: '',
                icon: <Iconify icon="solar:home-2-bold-duotone"/>,
            },
            {
                title: 'Web scraping',
                path: '',
                icon: <Iconify icon="solar:home-2-bold-duotone"/>,
            },
            {
                title: 'Onlline advertising',
                path: '',
                icon: <Iconify icon="solar:home-2-bold-duotone"/>,
            },
            {
                title: 'Crypto',
                path: '',
                icon: <Iconify icon="solar:home-2-bold-duotone"/>,
            },
            {
                title: 'Ticketing',
                path: '',
                icon: <Iconify icon="solar:home-2-bold-duotone"/>,
            },
        ]
    },
    {
        title: 'Company',
        path: 'Resources',
        icon: <Iconify icon="solar:atom-bold-duotone" />,
        children: [
            {
                title: 'Traffic arbitrage',
                path: '',
                icon: <Iconify icon="solar:home-2-bold-duotone"/>,
            },
            {
                title: 'E-commerce',
                path: '',
                icon: <Iconify icon="solar:home-2-bold-duotone"/>,
            },
            {
                title: 'Betting',
                path: '',
                icon: <Iconify icon="solar:home-2-bold-duotone"/>,
            },
            {
                title: 'Agencies',
                path: '',
                icon: <Iconify icon="solar:home-2-bold-duotone"/>,
            },
            {
                title: 'Web scraping',
                path: '',
                icon: <Iconify icon="solar:home-2-bold-duotone"/>,
            },
            {
                title: 'Onlline advertising',
                path: '',
                icon: <Iconify icon="solar:home-2-bold-duotone"/>,
            },
            {
                title: 'Crypto',
                path: '',
                icon: <Iconify icon="solar:home-2-bold-duotone"/>,
            },
            {
                title: 'Ticketing',
                path: '',
                icon: <Iconify icon="solar:home-2-bold-duotone"/>,
            },
        ]
    },
]