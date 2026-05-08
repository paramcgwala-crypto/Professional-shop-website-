import styles from './Footer.module.css';
import { Camera, Users, MessageCircle, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className={styles.footer} id="about">
      <div className={styles.container}>
        <div className={styles.brandInfo}>
          <h2 className={styles.logo}>
            <span className="text-gradient-gold">Param</span>
            <span className={styles.logoLight}>CGWala</span>
          </h2>
          <p className={styles.description}>
            The ultimate luxury fashion destination. Elevate your style with our premium 4D shopping experience.
          </p>
          <div className={styles.socials}>
            <a href="#" className={styles.socialLink}><Camera size={20} /></a>
            <a href="#" className={styles.socialLink}><Users size={20} /></a>
            <a href="#" className={styles.socialLink}><MessageCircle size={20} /></a>
          </div>
        </div>

        <div className={styles.linksSection}>
          <h3 className={styles.title}>Shop</h3>
          <ul className={styles.list}>
            <li><a href="#">New Arrivals</a></li>
            <li><a href="#">Trending</a></li>
            <li><a href="#">Categories</a></li>
            <li><a href="#">Sale</a></li>
          </ul>
        </div>

        <div className={styles.linksSection}>
          <h3 className={styles.title}>Support</h3>
          <ul className={styles.list}>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Shipping</a></li>
            <li><a href="#">Returns</a></li>
            <li><a href="#">Size Guide</a></li>
          </ul>
        </div>

        <div className={styles.contactInfo}>
          <h3 className={styles.title}>Contact Us</h3>
          <ul className={styles.list}>
            <li className={styles.contactItem}>
              <Phone size={16} className={styles.icon} />
              <span>+91 9617422068</span>
            </li>
            <li className={styles.contactItem}>
              <Mail size={16} className={styles.icon} />
              <span>ParamCGWala@gmail.com</span>
            </li>
            <li className={styles.contactItem}>
              <MapPin size={16} className={styles.icon} />
              <span>Shubham K Mart, Pandri, Raipur, Chhattisgarh, India</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className={styles.bottom}>
        <p>&copy; {new Date().getFullYear()} ParamCGWala. All rights reserved.</p>
        <p className={styles.developer}>Designed for the Elite</p>
      </div>
    </footer>
  );
}
