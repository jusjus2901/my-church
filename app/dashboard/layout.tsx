import React from 'react'
import Sidebar from '@/components/ui/dashboard/sidebar/sidebar';
import Navbar from '@/components/ui/dashboard/navbar/navbar';
import Styles from "@/app/dashboard/dashboard.module.css"

const layout = ({
     children
    }: {
        children: React.ReactNode;
    }) => {
        return (
            <div className={Styles.container}>
                <div className={Styles.menu}>
                    <Sidebar/>
                </div>
                <div className={Styles.content}>
                    <Navbar/>
                    { children }
                </div>
            </div>
        )
    }

export default layout
