"use client";

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';
import './StaggeredMenu.css';

interface MenuItem {
  label: string;
  href: string;
}

interface StaggeredMenuProps {
  menuItems?: MenuItem[];
  logo?: string;
  position?: 'left' | 'right';
  accentColor?: string;
}

const defaultMenuItems: MenuItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
];

const StaggeredMenu: React.FC<StaggeredMenuProps> = ({
  menuItems = defaultMenuItems,
  logo = '/logo.svg',
  position = 'right',
  accentColor = '#5227ff'
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLAnchorElement[]>([]);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const prelayersRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const menu = menuRef.current;
    if (!menu) return;

    // Set CSS custom property for accent color
    menu.style.setProperty('--sm-accent', accentColor);
    menu.setAttribute('data-position', position);

    const tl = gsap.timeline({ paused: true });
    const panel = panelRef.current;
    const items = itemsRef.current;
    const toggle = toggleRef.current;
    const prelayers = prelayersRef.current;

    if (panel && items.length && toggle && prelayers.length) {
      // Panel animation
      tl.set(panel, { x: position === 'right' ? '100%' : '-100%' });
      tl.to(panel, { x: '0%', duration: 0.6, ease: 'power3.out' });

      // Prelayers animation
      prelayers.forEach((layer, index) => {
        tl.set(layer, { x: position === 'right' ? '100%' : '-100%' }, 0);
        tl.to(layer, { 
          x: '0%', 
          duration: 0.4 + index * 0.1, 
          ease: 'power2.out' 
        }, 0.1 + index * 0.05);
      });

      // Items animation
      items.forEach((item, index) => {
        const label = item.querySelector('.sm-panel-itemLabel');
        if (label) {
          tl.set(label, { y: '100%', rotation: 8 });
          tl.to(label, {
            y: '0%',
            rotation: 0,
            duration: 0.6,
            ease: 'power3.out'
          }, 0.3 + index * 0.1);
        }
      });

      // Toggle animation
      const lines = toggle.querySelectorAll('.sm-icon-line');
      tl.to(lines[0], { rotation: 45, y: 0, duration: 0.3 }, 0);
      tl.to(lines[1], { rotation: -45, y: 0, duration: 0.3 }, 0);

      // Store timeline for later use
      (menu as any).timeline = tl;
    }
  }, [accentColor, position]);

  const toggleMenu = () => {
    const menu = menuRef.current;
    if (!menu) return;

    const tl = (menu as any).timeline;
    if (!tl) return;

    if (isOpen) {
      tl.reverse();
    } else {
      tl.play();
    }
    
    setIsOpen(!isOpen);
    menu.setAttribute('data-open', (!isOpen).toString());
  };

  return (
    <div 
      ref={menuRef}
      className="staggered-menu-wrapper"
      data-open={isOpen}
      data-position={position}
    >
      <div className="sm-header">
        <div className="sm-logo">
          <img src={logo} alt="Logo" className="sm-logo-img" />
        </div>
        <button 
          ref={toggleRef}
          className="sm-toggle"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div className="sm-icon">
            <div className="sm-icon-line"></div>
            <div className="sm-icon-line"></div>
          </div>
        </button>
      </div>

      <div className="sm-prelayers">
        {[...Array(3)].map((_, index) => (
          <div 
            key={index}
            ref={el => { if (el) prelayersRef.current[index] = el; }}
            className="sm-prelayer"
            style={{ 
              backgroundColor: `rgba(0, 0, 0, ${0.1 + index * 0.05})`,
              zIndex: 5 + index
            }}
          />
        ))}
      </div>

      <div ref={panelRef} className="staggered-menu-panel">
        <div className="sm-panel-inner">
          <nav>
            <ul className="sm-panel-list" data-numbering>
              {menuItems.map((item, index) => (
                <li key={index} className="sm-panel-itemWrap">
                  <Link
                    href={item.href}
                    ref={el => { if (el) itemsRef.current[index] = el; }}
                    className="sm-panel-item"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="sm-panel-itemLabel">
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="sm-socials">
          <h3 className="sm-socials-title">Follow Us</h3>
          <ul className="sm-socials-list">
            <li>
              <a href="#" className="sm-socials-link">LinkedIn</a>
            </li>
            <li>
              <a href="#" className="sm-socials-link">Twitter</a>
            </li>
            <li>
              <a href="#" className="sm-socials-link">GitHub</a>
            </li>
            <li>
              <a href="#" className="sm-socials-link">Dribbble</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StaggeredMenu;
