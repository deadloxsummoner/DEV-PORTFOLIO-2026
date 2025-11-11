// Contents.jsx
import { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import LibraryImg from '../assets/LibraryImg.jpg';
import Phisbols from '../assets/Phisbol.webp';
import EOR from '../assets/EOR.png'
import Achieve from '../assets/Achieve.png'

export default function Contents() {
  const [openRows, setOpenRows] = useState({});
  const [hoveredImage, setHoveredImage] = useState(null);

  const toggleRow = (rowNum) => {
    setOpenRows(prev => ({
      ...prev,
      [rowNum]: !prev[rowNum]
    }));
  };

  const rowConfig = {
    1: { name: "CRAFTS", isDropdown: false },
    2: { 
      name: "WEB APPS", 
      isDropdown: true, 
      imageUrl: `${LibraryImg}`, 
      subRows: [
        { name: 'UMak Library System', imageUrl: `${LibraryImg}` },
        { name: 'Sub-row 2.2', url: '/web-apps/project2', imageUrl: '/images/sub-web2.jpg' }
      ] 
    },
    3: { 
      name: "GAME DEV", 
      isDropdown: true, 
      imageUrl: `${EOR}`,
      subRows: [
        { name: 'Echoes of Room 1009', url: '/game-dev/game1', imageUrl: `${EOR}` },
       
      ] 
    },
    4: { 
      name: "DESIGNS", 
      isDropdown: true, 
      imageUrl: '/images/designs.jpg',
      subRows: [
        { name: 'Sub-row 4.1', url: '/designs/design1', imageUrl: '/images/sub-design1.jpg' }
      ] 
    },
    5: { name: "", isDropdown: false },
    6: { name: "ABOUT", isDropdown: false },
    7: { 
      name: "PHISBOL", 
      isDropdown: true, 
      imageUrl: `${Phisbols}`,
      subRows: [
        { name: 'Real Name: Kris Constantine F. Magallon', imageUrl: '/images/sub-phisbol1.jpg' },
        { name: 'Achievement 2023-2024', imageUrl: `${Achieve}` },
        { name: 'Bass', imageUrl: '/images/sub-phisbol3.jpg' },
      ] 
    },
    8: { 
      name: "STACK", 
      isDropdown: true, 
      subRows: [
        { name: 'JAVA / C++ / C / JS (Node, React) / PHP / SQL / PYTHON / FIGMA ',  }
      ] 
    },
    9: { 
      name: "BACKGROUND", 
      isDropdown: true, 
      subRows: [
        { name: '⭐ PUP Sta.Mesa (2024-2029)' }
      ] 
    },
    10: { name: "", isDropdown: false },
    11: { 
      name: "CONTACT", 
      isDropdown: true, 
      subRows: [
        { name: 'EMAIL', url: 'https://mail.google.com/mail/?view=cm&fs=1&to=stan.magallon@gmail.com&su=Hello%20Stan&body=Hi%20Stan!' },
        { name: 'GITHUB', url: 'https://github.com/deadloxsummoner'},
        { name: 'FACEBOOK', url: 'https://www.facebook.com/magallonconstantine/' }
      ] 
    }
  };

  const handleHover = (imageUrl) => {
    setHoveredImage(imageUrl);
  };

  const handleLeave = () => {
    setHoveredImage(null);
  };

  return (
    <div className="contents-container">
      {Object.entries(rowConfig).map(([rowNum, config]) => (
        <div key={rowNum} className="row-wrapper">
          <div
            className={`row-header ${config.isDropdown ? 'dropdown' : 'static'}`}
            onClick={() => config.isDropdown && toggleRow(rowNum)}
            onMouseEnter={() => config.isDropdown && handleHover(config.imageUrl)}
            onMouseLeave={handleLeave}
          >
            <div className="row-title-section">
              <span className="row-title">{config.name}</span>
              {config.isDropdown && (
                <span className="row-count">
                  {config.subRows.length}
                </span>
              )}
            </div>
            
          </div>
          
          {config.isDropdown && openRows[rowNum] && (
            <div className="subrows-container">
              {config.subRows.map((subRow, idx) => (
                <a 
                  target='_blank'
                  key={idx} 
                  href={subRow.url || '#'} // Fallback if no URL
                  className="subrow-link"
                  onMouseEnter={() => handleHover(subRow.imageUrl)}
                  onMouseLeave={handleLeave}
                  title={`Click to go to ${subRow.name}`}
                >
                  <div className="subrow">
                    {subRow.name}
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      ))}

      {/* Floating Image Overlay */}
      {hoveredImage && (
        <div className="floating-image-overlay">
          <img src={hoveredImage} alt="Hovered item" className="floating-image" />
        </div>
      )}
    </div>
  );
}