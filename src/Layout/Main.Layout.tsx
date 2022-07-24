import { Header } from '@/components/nav';
import SideBar from '@/components/nav/Sidebar.nav';
import React, { FC } from 'react';

interface ILayoutProps {
    children: React.ReactNode;
}

const Layout: FC<ILayoutProps> = ({ children }) => {
    return (
        <>
            <Header />
            <SideBar />
            <div className="flex flex-col items-center justify-center mt-40 space-y-10 md:justify-start md:items-start md:ml-20 ml-10 mb-10">
                {children}
            </div>
        </>
    );
};

export default Layout;
