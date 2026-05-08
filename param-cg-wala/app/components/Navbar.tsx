'use client';

import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import { ShoppingBag, Heart, User, Search, Menu } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">
            <span className="text-gradient-gold">Param</span>
            <span className={styles.logoLight}>CGWala</span>
          </Link>
        </div>

        <div className={styles.links}>
          <Link href="#collections" className={styles.link}>Collections</Link>
          <Link href="#trending" className={styles.link}>Trending</Link>
          <Link href="#about" className={styles.link}>About</Link>
        </div>

        <div className={styles.icons}>
          <button className={styles.iconBtn} aria-label="Search"><Search size={20} /></button>
          <button className={styles.iconBtn} aria-label="Wishlist"><Heart size={20} /></button>
          <button className={styles.iconBtn} aria-label="Cart"><ShoppingBag size={20} /></button>
          <button className={styles.iconBtn} aria-label="User"><User size={20} /></button>
          <button className={`${styles.iconBtn} ${styles.mobileMenu}`} aria-label="Menu"><Menu size={20} /></button>
        </div>
      </div>
    </nav>
  );
}
