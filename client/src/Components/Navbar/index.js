import React,{useState} from 'react'
import {FaUserAlt} from 'react-icons/fa'
import {HiLocationMarker} from 'react-icons/hi'
import {IoMdArrowDropdown,IoMdArrowDropup} from 'react-icons/io'
import {RiSearch2Line} from 'react-icons/ri'


function MobileNav(props) {
    const user=props.user
    const isDropDownOpen=props.isDropDownOpen
    const setIsDropDownOpen=props.setIsDropDownOpen
    return (
        <>
          <div className='flex w-full items-center justify-between lg:hidden'>
            <div className='w-28'>
                <img src='https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png' alt='logo' className='w-full h-full'  />
            </div>
            <div className='flex items-center gap-3 relative'>
                <button className='bg-zomato-500 px-3 py-2 rounded-full text-white'>
                    Use App
                </button>
                {user ? (
                    <>
                    <div onClick={()=> setIsDropDownOpen((prev)=>!prev)} className='border p-2 border-gray-300 text-zomato-400 w-16 h-16 rounded-full'>
                        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Avatar_icon_green.svg/1024px-Avatar_icon_green.svg.png' alt='avatar' className='w-full h-full rounded-full object-cover' />
                    </div>
                    {isDropDownOpen && (
                        <div className='absolute top-16 right-1 shadow-lg py-2 pl-3 bg-white w-32 z-30 flex-col gap-2 border-2 border-gray-300 rounded'>
                        <button>Sign out</button>
                        {/* <button>Sign in</button> */}
                    </div>
                    )}
                    </>
                ) : (<>
                    <span onClick={()=> setIsDropDownOpen((prev)=>!prev)} className='border p-2 border-gray-300 text-zomato-400 rounded-full'>
                        <FaUserAlt />
                    </span>
                    {isDropDownOpen && (
                        <div className='absolute shadow-lg py-3 -bottom-20 -right-4 w-full bg-white flex flex-col gap-2'>
                            <button>Sign in</button>
                            <button>Sign out</button>
                        </div>
                    )}
                </>)}
            </div>
          </div>  
        </>
    )
}

function LargeNav(props) {
    const user=props.user
    const isDropDownOpen=props.isDropDownOpen
    const setIsDropDownOpen=props.setIsDropDownOpen
    return (
        <>
        <div className='hidden lg:inline container px-20 mx-auto'>
          <div className='hidden gap-4 w-full items-center justify-around lg:flex'>
                <div className='w-28'>
                    <img src='https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png' alt='logo' className='w-full h-full'/>
                </div>
                <div className='w-3/4 bg-white shadow-md p-3 flex items-center gap-3 border border-gray-300 rounded'>
                    <div className='flex items-center gap-2 border-r-2 border-gray-300 pr-2'>
                        <span className='text-zomato-300'>
                            <HiLocationMarker />
                        </span>
                        <input type='text' placeholder='Delhi NCR' className='focus:outline-none'/>
                        <IoMdArrowDropdown />
                    </div>
                    <div className='flex w-full items-center gap-2'>
                        <RiSearch2Line />
                        <input type='text' placeholder='Search for restaurant cuisine or a dish' className='w-full focus:outline-none' />
                    </div>
                </div>
                {user ? (<div className='relative w-16'>
                        <div onClick={()=> setIsDropDownOpen((prev) =>!prev)} className='border p-2  border-gray-300 text-zomato-400 w-full h-16 rounded-full'>
                            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Avatar_icon_green.svg/1024px-Avatar_icon_green.svg.png' className='w-full h-full rounded-full object-cover' />
                        </div>
                        {isDropDownOpen && (
                            <div className='absolute top-20 shadow-lg py-2 pl-3 bg-white w-32 z-30 flex-col gap-2 border-2 border-gray-300 rounded'>
                                <button>Sign up</button>
                                {/* <button>Sign in</button> */}
                            </div>
                        )}
                </div>) : (
                    <div className='ml-25 flex gap-4'>
                        <button className='text-xl text-gray-500 hover:text-gray-800'>
                            Login
                        </button>
                        <button className='text-xl text-gray-500 hover:text-gray-800'>
                            Sign up
                        </button>
                    </div>
                )
                }
          </div>
        </div>  
      </>
    )
}

function Navbar() {
    const [user,setuser]=useState(null)
    const [isDropDownOpen,setIsDropDownOpen]=useState(false)
    return (
        <>
            <nav className='p-4 flex bg-white shadow-md lg:shadow-none w-full items-center'>
                <MobileNav user={user} isDropDownOpen={isDropDownOpen} setIsDropDownOpen={setIsDropDownOpen} />
                <LargeNav user={user} isDropDownOpen={isDropDownOpen} setIsDropDownOpen={setIsDropDownOpen} />
            </nav>
        </>
    )
}

export default Navbar
