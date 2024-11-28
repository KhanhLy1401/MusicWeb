import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from '@/components/ui/resizable';
import React from 'react'
import { Outlet } from 'react-router-dom'
const MainLayout = () => {
    const isMobile = false;
    return (
        <div className="h-screen bg-black text-white flex flex-col">
            <ResizablePanelGroup direction='horizontal' className='flex-1 flex h-full overflow-hidden p-2'>
                {/* Left-side bar */}
                <ResizablePanel defaultSize={20} minSize={isMobile ? 0:10} maxSize={30}>
                    Left Sidebar
                </ResizablePanel>

                <ResizableHandle className='w-2 bg-black rounded-lg transition-colors' />

                {/* Main content */}
                <ResizablePanel defaultSize={isMobile ? 80 : 60}>
                    <Outlet />
                </ResizablePanel>
                
                <ResizableHandle className='w-2 bg-black rounded-lg transition-colors' />

                <ResizablePanel defaultSize={20} minSize={0} maxSize={25} collapsedSize={0}>
                    Friends activity
                </ResizablePanel>
            </ResizablePanelGroup>
        MainLayout</div>

    )
}

export default MainLayout