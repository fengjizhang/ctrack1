import React, {  } from 'react';
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'
import '../cssFiles/map.css';
// import issLogo from '../imgFiles/ISS.png';
import {
    CalendarIcon,
    // ChartBarIcon,
    FolderIcon,
    HomeIcon,
    InboxIcon,
    UsersIcon,
    XMarkIcon,
  } from '@heroicons/react/24/outline';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}



function Dropdown(props) {
    

    const navigation = [
        { name: 'All Objects', href: '#', icon: HomeIcon, current: true },
        { name: 'ISS', href: '#', icon: UsersIcon, current: false },
        { name: 'Planes', href: '#', icon: FolderIcon, current: false },
        { name: 'Ships', href: '#', icon: CalendarIcon, current: false },
        { name: 'Others', href: '#', icon: InboxIcon, current: false },
    ]

    return (
        <div>
            <nav className="flex-1 space-y-1 px-2 pb-4">
                    {navigation.map((item) => (
                    <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                        item.current ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                        'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                        )}
                    >
                        <item.icon
                        className={classNames(
                            item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                            'mr-3 flex-shrink-0 h-6 w-6'
                        )}
                        aria-hidden="true"
                        />
                        {item.name}
                    </a>
                    ))}
                </nav>
        </div>
    );
}

export default Dropdown;
