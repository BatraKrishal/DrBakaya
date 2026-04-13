import Image from "next/image";
import styles from "./page.module.css";
import ServiceCard from "@/components/ServiceCard";
import DoctorCard from "@/components/DoctorCard";
import LocationCard from "@/components/LocationCard";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <div className={`container ${styles.heroContent}`}>
          <div className="animate-fade-in delay-100">
            <h1 className={styles.heroTitle}>Premium Skin & Aesthetic Care</h1>
            <p className={styles.heroSubtitle}>
              Experience world-class treatment with Dr. Vijay Bakaya and Dr. Vivasvat Bakaya in Dehradun.
            </p>
            <div className={styles.heroActions}>
              <a href="#services" className="btn-primary">Explore Services</a>
              <a href="tel:+919997700525" className="btn-outline" style={{ color: "var(--bg-white)", borderColor: "var(--bg-white)" }}>
                Book Appointment
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About / Doctors Section */}
      <section id="doctors" className="section" style={{ backgroundColor: "var(--bg-off-white)" }}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Meet Our Experts</h2>
            <div className={styles.titleUnderline}></div>
            <p className={styles.sectionDesc}>With decades of combined experience in clinical and aesthetic dermatology, our specialists provide tailored treatments for your unique needs.</p>
          </div>
          
          <div className={styles.doctorsGrid}>
            <DoctorCard
              initials="V.B"
              name="Dr. Vijay Bakaya"
              role="Senior Dermatologist"
              brief="Specializing in Clinical Dermatology, treating chronic skin conditions and diseases with expert precision."
              qualifications="MBBS, Diploma in Venereal Diseases (DVD), MD/DNB"
              degreeLocation="PGIMER, Chandigarh, India"
              experience="Over 30 years of clinical experience. One of the first dermatologists in the state and former President of the IADVL (UP & UK Branch). Frequent speaker at leading medical conferences."
              imageUrl="/img8.jpeg"
            />
            
            <DoctorCard
              initials="V.B"
              name="Dr. Vivasvat Bakaya"
              role="Aesthetic Dermatologist"
              brief="Expert in treating acne, scars, pigmentation, and enhancing natural beauty through advanced aesthetic procedures."
              qualifications="MBBS, MD/DNB in Dermatology"
              degreeLocation="Subharti Medical College, Meerut, India"
              experience="Specializing in clinical dermatology and aesthetic medicine. Passionate about patient education and actively involved in organizing free medical camps across the state."
              imageUrl="/img9.jpeg"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className={`section ${styles.servicesSection}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Our Services</h2>
            <div className={styles.titleUnderline}></div>
          </div>
          
          <div className={styles.servicesGrid}>
            <ServiceCard 
              title="Clinical Dermatology" 
              description="Comprehensive diagnosis and treatment for Acne, Fungal infections, Melasma, Psoriasis, Vitiligo, and other complex skin diseases."
            />
            <ServiceCard 
              title="Aesthetic Medicine" 
              description="Advanced cosmetic treatments including Acne Scar revision, Laser Hair Reduction, PRP Therapy, and tailored Chemical Peels."
            />
            <ServiceCard 
              title="Dermatosurgery" 
              description="Safe, effective surgical removal of Moles, Warts, and Skin Tags utilizing the latest dermatosurgery techniques."
            />
            <ServiceCard 
              title="Hair Care" 
              description="Specialized treatments addressing Hair Loss and scalp conditions to restore health and confidence."
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="section" style={{ backgroundColor: "var(--primary-black)", color: "var(--bg-white)" }}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle} style={{ color: "var(--accent-gold)" }}>Patient Testimonials</h2>
            <div className={styles.titleUnderline}></div>
            <p className={styles.sectionDesc} style={{ color: "#cccccc" }}>Hear what our patients have to say about their experience with us.</p>
          </div>
          
          <div className={styles.testimonialsGrid}>
            <div className={styles.testimonialCard}>
              <div className={styles.quoteIcon}>&quot;</div>
              <p className={styles.testimonialText}>Excellent clinical care and a wonderful aesthetic procedure. The staff is fantastic!</p>
              <h4 className={styles.patientName}>- A Happy Patient</h4>
            </div>
            <div className={styles.testimonialCard}>
              <div className={styles.quoteIcon}>&quot;</div>
              <p className={styles.testimonialText}>Dr. Bakaya really took the time to understand my skin condition and find the perfect treatment plan.</p>
              <h4 className={styles.patientName}>- Satisfied Customer</h4>
            </div>
            <div className={styles.testimonialCard}>
              <div className={styles.quoteIcon}>&quot;</div>
              <p className={styles.testimonialText}>I have been coming here for laser treatments and the results are phenomenal. Highly recommended!</p>
              <h4 className={styles.patientName}>- Long-time Client</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section id="locations" className="section" style={{ backgroundColor: "var(--bg-off-white)" }}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Visit Us</h2>
            <div className={styles.titleUnderline}></div>
            <p className={styles.sectionDesc}>We offer convenient timings across three well-equipped locations in Dehradun.</p>
          </div>
          
          <div className={styles.locationsGrid}>
            <LocationCard
              time="Morning"
              name="Jogiwala Clinic"
              address="2nd Lane, Badripur Road Jogiwala, Dehradun, Uttarakhand 248001"
              hours="10:30 AM - 1:30 PM"
              days="(Mon - Sat)"
              mapQuery="Dr Bakaya Jogiwala Clinic 2nd Lane, Badripur Road, Dehradun"
            />
            
            <LocationCard
              time="Afternoon"
              name="Tagore Villa Clinic"
              address="Near Levi's Store, 74, Chakarata Road, Tagore Villa, Dehradun, Uttarakhand 248001"
              hours="2:30 PM - 5:00 PM"
              days="(Mon - Sat)"
              mapQuery="Dr. Bakaya Skin And Aesthetic Centre, Tagore Villa, Dehradun"
            />
            
            <LocationCard
              time="Evening"
              name="Nehru Colony Clinic"
              address="Navjyoti Eye Hospital Near LIC Building, Nehru Colony, Haridwar Road, Dehradun, Uttarakhand 248001"
              hours="5:30 PM - 7:30 PM"
              days="(Mon - Sat)"
              mapQuery="Navjyoti Eye Hospital, Nehru Colony, Dehradun"
            />
          </div>
        </div>
      </section>
    </>
  );
}
