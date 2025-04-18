import { FaTimes } from 'react-icons/fa';
import sublinks from './data';
import { useGlobalContext } from './Context';

const Sidebar = () => {
  const { isSidebarOpen, hideSidebar } = useGlobalContext();
  return (
    <aside className={isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}>
      <div className='sidebar-container'>
        {/* close button */}
        <button className='close-btn' onClick={hideSidebar}>
          <FaTimes />
        </button>

        {/* sidebar contents */}
        <div className='sidebar-links'>
          {sublinks.map(({ pageId, page, links }) => {
            return (
              <article key={pageId}>
                <h4>{page}</h4>
                <div className='sidebar-sublinks'>
                  {links.map(({ id, label, icon, url }) => {
                    return (
                      <a href={url} key={id}>
                        {icon}
                        {label}
                      </a>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </aside>
  );
};
export default Sidebar;
