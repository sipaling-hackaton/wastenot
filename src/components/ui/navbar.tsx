'use client'

import Link from 'next/link'
import {usePathname} from 'next/navigation'

interface NavbarRouteTypes {
  path: string
  name: string
}

function Navbar({routes}: Readonly<{ routes: NavbarRouteTypes[] }>) {
  let currentPath: string = usePathname().split('/')[1]
  return (
      <nav
          className={
            `flex justify-center items-center  
            bg-transparent gap-4 p-4 relative z-10 w-full h-16 mt-auto position-fixed bottom-0` 
          }
          style={{backgroundColor:"white",marginTop:"auto",position:"fixed",bottom:"0"}}
      >
        <div
            className={"transform-gpu transition-transform hover:scale-110"}
        />

        {
          routes.map((page, index) => {
                if (page.path === currentPath) {
                  return (
                      <Link
                          className='active
                          rounded-md transform-gpu transition-transform
                          flex flex-row'
                          key={index} href={`/${page.path}`}>

                        {page.path === '/' && <img src="/image/homeIconActive.png" alt={page.name} />}
                        {page.path === 'nearby' && <img src="/image/nearbyIconActive.png" alt={page.name} />}
                        {page.path === 'shop' && <img src="/image/shopIconActive.png" alt={page.name} />}

                      </Link>
                  )
                }
                return (
                    <UrlLink
                        key={index}
                        path={page.path}
                        name={page.name.toLowerCase()}
                    />
                )
              }
          )
        }
      </nav>
  )
}

function UrlLink({path, name}: NavbarRouteTypes) {
  return (
      <Link
          className={"hover:text-gray-300 global-border"}
          href={`/${path}`}
          key={path}
      >
        {path === '/' && <img src="/image/homeIcon.png" alt={name} />}
        {path === 'nearby' && <img src="/image/nearbyIcon.png" alt={name} />}
        {path === 'shop' && <img src="/image/shopIcon.png" alt={name} />}
      </Link>
  )
}


export {Navbar}
export default Navbar
export type {NavbarRouteTypes}