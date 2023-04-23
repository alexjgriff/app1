'use client';

import { ThemeProvider } from 'next-themes'

export default function Providers({children}) {
  return (
    <ThemeProvider enableSystem={true} attribute='class'>
        
      <div className='dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300 min-h-screen'> {children} </div>  

    </ThemeProvider>
  )
}
