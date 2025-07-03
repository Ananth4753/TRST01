/* tslint:disable:max-line-length */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
    {
        id      : 'admin',
        title   : 'Admin',
        type    : 'collapsable',
        icon    : 'iconsmind:administrator',
        children: [
            {
                id   : 'admin.role',
                title: 'Role',
                type : 'basic',
                link : '/admin/role'
            },
            {
                id   : 'admin.menu',
                title: 'Menu',
                type : 'basic',
                link : '/admin/menu'
            },
            {
                id   : 'admin.rolemenu',
                title: 'Role Menu',
                type : 'basic',
                link : '/admin/role-menu'
            },
            {
                id   : 'admin.user',
                title: 'User',
                type : 'basic',
                link : '/admin/user'
            }
        ]
    },
    {
        id      : 'config',
        title   : 'Configuration',
        type    : 'collapsable',
        icon    : 'heroicons_outline:pencil',
        children: [
            {
                id   : 'config.organization',
                title: 'Organization',
                type : 'basic',
                link : '/config/organization'
            },
            {
                id   : 'config.courses',
                title: 'Courses',
                type : 'basic',
                link : '/config/courses'
            },
            {
                id   : 'config.branches',
                title: 'Branches',
                type : 'basic',
                link : '/config/branches'
            }
        ]
    },
    {
        id   : 'settings',
        title: 'Settings',
        type : 'basic',
        icon : 'heroicons_outline:cog',
        link : '/settings'
    }
];
export const compactNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];
export const futuristicNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];
export const horizontalNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];
