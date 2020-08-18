// src/sidebar/SidebarMenuDict.js

import React from 'react';

import Timeline from '@material-ui/icons/Timeline';

const SidebarMenuDict = {
    /******************
     * Component Menus
     ******************/
    COMPONENTS: [
        {
            title: 'Sample',
            icon: <Timeline />,
            url: '/sample',
            value: 101,
            need_permission: false,
        },
        {
            title: 'NoteBook',
            icon: <Timeline />,
            url: '/notebook',
            value: 101,
            need_permission: false,
        },
        {
            title: 'Test',
            icon: <Timeline />,
            url: '/test',
            value: 101,
            need_permission: false,
        },
    ],
};

export default SidebarMenuDict;
