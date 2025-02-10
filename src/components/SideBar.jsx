import React from 'react';

const Sidebar = () => {
    return (
        <div className="h-screen w-64 bg-gray-800 text-white flex flex-col">
            <div className="px-4 py-2">
                <h2 className="text-xl font-bold">My Sidebar</h2>
            </div>
            <nav className="flex-grow">
                <ul className="space-y-2">
                    <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-700">Home</a>
                    </li>
                    <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-700">About</a>
                    </li>
                    <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-700">Services</a>
                    </li>
                    <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-700">Contact</a>
                    </li>
                </ul>
            </nav>
            <div className="px-4 py-2">
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Logout</button>
            </div>
        </div>
    );
};

export default Sidebar;
