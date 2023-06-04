import { useState } from 'react';

const DropMenuNav = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    setIsHovered(!isHovered);
  };

  return (
    <div className="xm:mx-4 xl:mx-56 xxl:mx-64">
      {/* hover drop down menu */}
      <div className='p-8'>
        <ul>
          <li className='inline-block' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <button
              href='/'
              className='bg-blue-400 px-5 py-2 rounded-lg'
              onClick={handleClick}
            >
              Hover Dropdown
            </button>
            {isHovered && (
              <div className="absolute p-2 bg-blue-200 rounded-md">
                <ul>
                  <li><a href="/">test</a></li>
                  <li><a href="/">test</a></li>
                  <li><a href="/">test</a></li>
                </ul>
              </div>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DropMenuNav;
