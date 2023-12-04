import { ListItemButtonProps } from '@mui/material/ListItemButton'
// -------------------------------------------------------------------------------
export type NavItemProps = { 
    title: string;
    path: string;
    icon?: React.ReactElement;
    children?: {
        items: {
            title: string,
            path: string,
            icon?: React.ReactElement,
        }[];
    }[];
};

export interface NavItemDesktopProps extends ListItemButtonProps {
    item: NavItemProps;
    offsetTop?: boolean;
    active?: boolean;
    open?: boolean;
    subItem?: boolean;
    externalLink?: boolean;
}

export interface NavItemMobileProps extends ListItemButtonProps {
    item: NavItemProps;
    active?: boolean;
    open?: boolean;
    externalLink?: boolean;
}

export type NavProps = { 
    offsetTop: boolean;
    data: NavItemProps[];
}