import { FaBars } from 'react-icons/fa';
import NavLinks from './NavLinks';
import { useGlobalContext } from './Context';

const Navbar = () => {
  const { showSidebar, setPageId } = useGlobalContext();

  const handleSubmenu = (e) => {
    if (!e.target.classList.contains('nav-link')) {
      setPageId(null);
    }
  };
  return (
    <nav className='nav' onMouseOver={handleSubmenu}>
      <div className='nav-center'>
        <h3 className='logo'>strapi</h3>
        <button className='toggle-btn' onClick={showSidebar}>
          <FaBars />
        </button>

        {/* nav links */}
        <NavLinks />
      </div>
    </nav>
  );
};
export default Navbar;
