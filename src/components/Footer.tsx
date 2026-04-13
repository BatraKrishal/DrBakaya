import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerGrid}`}>
        <div className={styles.footerSection}>
          <h3 className={styles.footerTitle}>Dr. Bakaya Skin And Aesthetic Clinic</h3>
          <p className={styles.footerText}>
            Delivering premium clinical and aesthetic dermatological care with the latest technology in a comfortable environment.
          </p>
          <div className={styles.contactInfo}>
            <p><strong>Phone:</strong> +91 99977 00525</p>
            <p><strong>Email:</strong> info@clinicbakaya.com</p>
          </div>
        </div>
        
        <div className={styles.footerSection}>
          <h3 className={styles.footerTitle}>Our Locations & Timings</h3>
          <ul className={styles.locationsList}>
            <li>
              <strong>Jogiwala (Morning)</strong><br />
              1st Floor, Above Union Bank of India, Haridwar Road<br />
              10:30 AM - 1:30 PM (Mon-Sat)
            </li>
            <li>
              <strong>Tagore Villa (Afternoon)</strong><br />
              Near Doon Hospital, Chuckku Wala<br />
              2:30 PM - 5:00 PM (Mon-Sat)
            </li>
            <li>
              <strong>Nehru Colony (Evening)</strong><br />
              A - Block, Near LIC Building<br />
              5:30 PM - 7:30 PM (Mon-Sat)
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.copyright}>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Dr. Bakaya Skin And Aesthetic Clinic. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
