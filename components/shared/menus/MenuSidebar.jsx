import React, { Component } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {CNavGroup, CNavItem} from '@coreui/react'

const MenuSidebar = () => {
    const router = useRouter();
    const menuItems = [
        {
            text: 'Dashboard',
            url: '/',
            icon: 'icon-home',
        },
        {
            text: 'Products',
            url: '/products',
            icon: 'icon-database',
        },{
        text: 'Users',
        url: '/users',
        icon: 'icon-database',
    },{
    Component:CNavGroup,
    text:'Univers',
    icon:'icon-database',
    url:'/univer',
    items:[
        {
        Component:CNavItem,
        TextDecoder:'Cathegory',
        url:'/users',
        items:[{
            Component:CNavItem,
            text:'Sub-cathegory',
            url:'/users',}

        ]
        }
    ]
},
        {
            text: 'Orders',
            url: '/orders',
            icon: 'icon-bag2',
        },
        {
            text: 'Customers',
            url: '/customers',
            icon: 'icon-users2',
        },
        {
            text: 'Categories',
            url: '/categories',
            icon: 'icon-users2',
        },
        {
            text: 'Settings',
            url: '/settings',
            icon: 'icon-cog',
        },
    ];

    return (
        <ul className="menu">
            {menuItems.map((item, index) => (
                <li
                    key={index}
                    className={router.pathname === item.url ? 'active' : ''}>
                    <Link href={item.url}>
                        <a>
                            <i className={item.icon}></i>
                            {item.text}
                        </a>
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default MenuSidebar;
