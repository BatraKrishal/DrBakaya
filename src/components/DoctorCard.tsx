"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./DoctorCard.module.css";

interface DoctorCardProps {
  initials: string;
  name: string;
  role: string;
  brief: string;
  qualifications: string;
  degreeLocation?: string;
  experience: string;
  imageUrl?: string;
}

export default function DoctorCard({ initials, name, role, brief, qualifications, degreeLocation, experience, imageUrl }: DoctorCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className={styles.cardContainer} 
      onClick={() => setIsFlipped(!isFlipped)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") setIsFlipped(!isFlipped);
      }}
    >
      <div className={`${styles.cardInner} ${isFlipped ? styles.flipped : ""}`}>
        
        {/* Front of Card */}
        <div className={styles.cardFront}>
          <div className={styles.doctorImagePlaceholder}>
            {imageUrl ? (
              <Image src={imageUrl} alt={name} fill style={{ objectFit: 'contain', backgroundColor: '#fff' }} />
            ) : (
              <span>{initials}</span>
            )}
          </div>
          <div className={styles.doctorInfo}>
            <h3>{name}</h3>
            <p className={styles.doctorRole}>{role}</p>
            <p className={styles.briefText}>{brief}</p>
            <div className={styles.clickHint}>
              <span>Click to view credentials &rarr;</span>
            </div>
          </div>
        </div>

        {/* Back of Card */}
        <div className={styles.cardBack}>
          <div className={styles.backContent}>
            <h3>{name}</h3>
            <p className={styles.doctorRole}>{role}</p>
            
            <div className={styles.detailsGroup}>
              <h4>Qualifications</h4>
              <p>{qualifications}</p>
              {degreeLocation && (
                <p style={{ marginTop: '0.25rem', fontSize: '0.85rem', color: '#aaaaaa' }}>
                  <span aria-hidden="true">&#128205; </span>{degreeLocation}
                </p>
              )}
            </div>
            
            <div className={styles.detailsGroup}>
              <h4>Experience & Expertise</h4>
              <p>{experience}</p>
            </div>
            
            <div className={styles.clickHint}>
              <span>&larr; Back to summary</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
