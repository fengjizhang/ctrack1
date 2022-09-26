import React, { useState, Fragment } from 'react';

import { Dialog, Transition } from '@headlessui/react'
import {
  CalendarIcon,
  // ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  UsersIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline';
import Dropdown from './Dropdown.jsx';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const navigation = [
    { name: 'All Objects', href: '#', icon: HomeIcon, current: true },
    { name: 'ISS', href: '#', icon: UsersIcon, current: false },
    { name: 'Planes', href: '#', icon: FolderIcon, current: false },
    { name: 'Ships', href: '#', icon: CalendarIcon, current: false },
    { name: 'Others', href: '#', icon: InboxIcon, current: false },
]


function Sidebar(props) {


    const [sidebarOpen, setSidebarOpen] = useState(false)

    return (
        <div>



            <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
            {/* Sidebar component, swap this element with another sidebar if you like */}
            <div className="flex flex-grow flex-col overflow-y-auto border-r border-gray-200 bg-white pt-5">
                <div className="flex flex-shrink-0 items-center px-4">
                    <div className="text-3xl font-sans font-bold tracking-wide text-yellow-500">
                        CTrack
                    </div>
                
                </div>
                <div className="mt-5 flex flex-grow flex-col">
                <Dropdown />
                            {/* //---------------------------------------------------------------- */}
            <button
                type="button"
                className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
                Filter
                <AdjustmentsHorizontalIcon className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
            </button>
            {/* //---------------------------------------------------------------- */}
                </div>
            </div>
            </div>

        </div>
    );
}

export default Sidebar;



