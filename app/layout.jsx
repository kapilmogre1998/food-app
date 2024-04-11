import MainHeader from '@/components/main-header/mainHeader';
import './globals.css';

export const metadata = {
  title: 'NextLevel Food',
  description: 'Delicious meals, shared by a food-loving community.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="header-background">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop
                  offset="0%"
                  style={{ stopColor: '#59453c', stopOpacity: '1' }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: '#8f3a09', stopOpacity: '1' }}
                />
              </linearGradient>
            </defs>
            <path
              fill="url(#gradient)"
              d="M0,256L48,240C96,224,192,192,288,181.3C384,171,480,181,576,186.7C672,192,768,192,864,181.3C960,171,1056,149,1152,133.3C1248,117,1344,107,1392,101.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            ></path>
          </svg>
        </div>

        <MainHeader />
        {children}
      </body>
    </html>
  );
}


// 1. File Base Routing.
// 2. Page, Layout, not-found, error this are reserved file name in nextJS
// 3. Instead of a (anchor tag) -> Link, image tag => Image
// 4. we create our own dynamic meta-data or seperate meta-data
// 5. use client -> Next JS allow component to render on client browser 
// for example a component relies on usestate , event handling behaviour because these features require JavaScript execution, which is not directly available in SSR rendering.
// 6. In Next JS components execute on the server during the initial render or during build time. There are two primary ways to utilize `use server` in Next.js
// Function level(at top of the function)   2. File level (add ‘use server’ at the top of the file.)
// 7.Handling form submission on server side rather than performing on client side