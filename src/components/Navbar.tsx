"use client";
import Link from "next/link";
import styles from "./Navbar.module.css";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoText}>Dr. Bakaya</span>
          <span className={styles.logoSubtext}>Skin And Aesthetic Clinic</span>
        </Link>
        <button 
          className={`${styles.hamburger} ${mobileMenuOpen ? styles.hamburgerActive : ""}`} 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation"
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </button>

        <div className={`${styles.navWrapper} ${mobileMenuOpen ? styles.mobileOpen : ""}`}>
          <nav className={styles.nav}>
            <ul className={styles.navList}>
              <li><Link href="/" onClick={() => setMobileMenuOpen(false)}>Home</Link></li>
              <li><Link href="#services" onClick={() => setMobileMenuOpen(false)}>Services</Link></li>
              <li><Link href="#doctors" onClick={() => setMobileMenuOpen(false)}>Our Doctors</Link></li>
              <li><Link href="#locations" onClick={() => setMobileMenuOpen(false)}>Locations</Link></li>
            </ul>
          </nav>
          <a href="tel:+919997700525" className={`btn-primary ${styles.contactBtn}`}>
            Contact: +91 99977 00525
          </a>
        </div>
      </div>
    </header>
  );
}
