import logo from '../../assets/svg-logo.svg'
import { IoMdArrowDropdown } from 'react-icons/io'
import user from '../../assets/image-user.png'
import { IoMdNotificationsOutline, IoIosSearch } from 'react-icons/io'
// import { IoIosSearch } from 'react-icons/io'
const Navbar = () => {
  return (
    <nav className='nav-container'>
      <div className='logo-nav'>
        <img src={logo} alt='' />
      </div>
      <div className='search-container'>
        <input type='text' className='search-input ' />
        <button className='search-btn'>
          <IoIosSearch className='search-icon' />
        </button>
      </div>
      <div className='docs-container'>
        <p className='docs'>docs</p>
        <div>
          <IoMdNotificationsOutline className='notification-icon' />
        </div>
        <div>
          <div className='user-profile'>
            <img className='user-image' src={user} alt='' />
            <p className='user-name'>Adedeji</p>
            <div>
              <IoMdArrowDropdown />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
