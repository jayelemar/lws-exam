'use client';
import React from 'react'
import { Sheet, SheetContent } from '../ui/sheet'
import { useMobileNavStore } from '@/store/MobileNavStore';

const MobileNav = ({children}: {children: React.ReactNode}) => {
  const {isOpen, setIsOpen} = useMobileNavStore()
  const handleNavClick = () => {
    setIsOpen(!isOpen)
  };

  return (
    <div className=''>
      <Sheet open={isOpen} onOpenChange={handleNavClick}>
        <SheetContent>
          <div className="flex flex-col items-center justify-between h-full py-0 gap-x-4 gap-y-0">
            <div className="flex flex-col items-center h-full justify-center">
              {children}
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}
export default MobileNav





