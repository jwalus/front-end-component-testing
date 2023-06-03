import { logo } from '../assets';
import { GiHamburgerMenu } from 'react-icons/gi'


const Nav = () => {
  return (
    <div className='pt-4 pb-4 xm:mx-4 xl:mx-56 xxl:mx-64'>
      <div className='flex w-full justify-between items-center'>
        <div>
          <img src={logo} alt="logo" className='xm:w-[90px] xl:w-[130px]' />
        </div>
        <div className='md:flex hidden items-center'>
          <ul className='flex gap-12 text-white font-semibold'>
            <li className='hover:text-green-300'>Home</li>
            <li className='hover:text-green-300'>About</li>
            <li className='hover:text-green-300'>Products</li>
            <li className='hover:text-green-300'>Help</li>
          </ul>
        </div>
        <div className='flex items-center gap-4'>
          <GiHamburgerMenu color="white" size={18} className='md:hidden flex'/>
          <button className='text-white md:px-5 md:py-2 xm:px-3 xm:py-1 bg-gradient-to-r from-teal-400 to-blue-600 rounded-full font-semibold'>Login</button>
        </div>
      </div>
    </div>
  )
}

export default Nav;
