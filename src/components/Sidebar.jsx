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
            <Transition.Root show={sidebarOpen} as={Fragment}>
                <Dialog as="div" className="relative z-40 md:hidden" onClose={setSidebarOpen}>
                    <Transition.Child
                    as={Fragment}
                    enter="transition-opacity ease-linear duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity ease-linear duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    >
                    <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-40 flex">
                    <Transition.Child
                        as={Fragment}
                        enter="transition ease-in-out duration-300 transform"
                        enterFrom="-translate-x-full"
                        enterTo="translate-x-0"
                        leave="transition ease-in-out duration-300 transform"
                        leaveFrom="translate-x-0"
                        leaveTo="-translate-x-full"
                    >
                        <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-white pt-5 pb-4">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-in-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in-out duration-300"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="absolute top-0 right-0 -mr-12 pt-2">
                            <button
                                type="button"
                                className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                onClick={() => setSidebarOpen(false)}
                            >
                                <span className="sr-only">Close sidebar</span>
                                <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                            </button>
                            </div>
                        </Transition.Child>
                        <div className="flex flex-shrink-0 items-center px-4">
                            <img
                            className="h-8 w-auto"
                            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                            alt="Your Company"
                            />
                        </div>
                        <div className="mt-5 h-0 flex-1 overflow-y-auto">
                            <nav className="space-y-1 px-2">
                            {navigation.map((item) => (
                                <a
                                key={item.name}
                                href={item.href}
                                className={classNames(
                                    item.current
                                    ? 'bg-gray-100 text-gray-900'
                                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                                    'group flex items-center px-2 py-2 text-base font-medium rounded-md'
                                )}
                                >
                                <item.icon
                                    className={classNames(
                                    item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                                    'mr-4 flex-shrink-0 h-6 w-6'
                                    )}
                                    aria-hidden="true"
                                />
                                {item.name}
                                </a>
                            ))}
                            </nav>
                        </div>
                        </Dialog.Panel>
                </Transition.Child>
                <div className="w-14 flex-shrink-0" aria-hidden="true">
                    {/* Dummy element to force sidebar to shrink to fit close icon */}
                </div>
                </div>
                </Dialog>
            </Transition.Root>


            <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
            {/* Sidebar component, swap this element with another sidebar if you like */}
            <div className="flex flex-grow flex-col overflow-y-auto border-r border-gray-200 bg-white pt-5">
                <div className="flex flex-shrink-0 items-center px-4">
                    <div className="text-3xl font-sans font-bold tracking-wide text-yellow-500">
                        CTrack
                    </div>
                
                </div>
                <div className="mt-5 flex flex-grow flex-col">
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



