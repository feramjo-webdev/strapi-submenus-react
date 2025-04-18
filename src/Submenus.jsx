import { useRef } from 'react';
import { useGlobalContext } from './Context';
import sublinks from './data';

const Submenus = () => {
  const { pageId, setPageId } = useGlobalContext();
  const relevantSubLink = sublinks.find((sublink) => sublink.pageId === pageId);

  const submenuRef = useRef(null);

  const handleMouseLeave = (e) => {
    const submenu = submenuRef.current;
    const { left, right, bottom } = submenu.getBoundingClientRect();
    // console.log(left, right, bottom);

    const { clientX, clientY } = e;
    // console.log(clientX, clientY);

    if (clientX < left + 1 || clientX > right - 1 || clientY > bottom - 1) {
      setPageId(null);
    }
  };

  if (relevantSubLink) {
    const { page, links } = relevantSubLink;
    return (
      <div
        className='submenu show-submenu'
        onMouseLeave={handleMouseLeave}
        ref={submenuRef}
      >
        <h5>{page}</h5>
        <div
          className={
            links?.length > 3 ? 'submenu-links col-2' : 'submenu-links'
          }
        >
          {links?.map(({ id, label, icon, url }) => {
            return (
              <a href={url} key={id}>
                {icon}
                {label}
              </a>
            );
          })}
        </div>
      </div>
    );
  }
};
export default Submenus;
