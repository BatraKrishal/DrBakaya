"use client";
import { useState } from "react";
import styles from "./LocationCard.module.css";

interface LocationCardProps {
  time: string;
  name: string;
  address: string;
  hours: string;
  days: string;
  mapQuery: string;
}

export default function LocationCard({ time, name, address, hours, days, mapQuery }: LocationCardProps) {
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
          <div className={styles.locationTime}>{time}</div>
          <h3>{name}</h3>
          <p className={styles.locationAddress}>{address}</p>
          <div className={styles.locationHours}>
            <span>{hours}</span>
            <span>{days}</span>
          </div>
          <div className={styles.clickHint}>
            <span>View on Map &rarr;</span>
          </div>
        </div>

        {/* Back of Card (Map) */}
        <div className={styles.cardBack}>
          <iframe 
            src={`https://maps.google.com/maps?q=${encodeURIComponent(mapQuery)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className={styles.mapIframe}
            onClick={(e) => e.stopPropagation()}
          ></iframe>
          <div className={styles.closeHint} onClick={(e) => { e.stopPropagation(); setIsFlipped(false); }}>
            <span>&larr; Close Map</span>
          </div>
        </div>

      </div>
    </div>
  );
}
