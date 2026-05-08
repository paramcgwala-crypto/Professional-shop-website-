'use client';

import styles from './Categories.module.css';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CATEGORIES = [
  {
    id: 1,
    name: 'Men\'s Luxury',
    image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&q=80&w=800',
    className: styles.cardLarge
  },
  {
    id: 2,
    name: 'Women\'s Elegance',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=800',
    className: styles.cardMedium
  },
  {
    id: 3,
    name: 'Accessories',
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=800',
    className: styles.cardSmall
  },
  {
    id: 4,
    name: 'Footwear',
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=800',
    className: styles.cardSmall
  }
];

export default function Categories() {
  return (
    <section className={styles.categoriesSection} id="collections">
      <div className={styles.header}>
        <motion.h2 
          className={styles.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Curated <span className="text-gradient-gold">Collections</span>
        </motion.h2>
        <motion.p 
          className={styles.subtitle}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Explore our exclusive ranges tailored for those with an impeccable taste in luxury and fashion.
        </motion.p>
      </div>

      <div className={styles.grid}>
        {CATEGORIES.map((category, index) => (
          <motion.div
            key={category.id}
            className={`${styles.categoryCard} ${category.className}`}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <img src={category.image} alt={category.name} className={styles.image} />
            <div className={styles.overlay}>
              <h3 className={styles.categoryName}>{category.name}</h3>
              <span className={styles.exploreBtn}>
                Explore Collection <ArrowRight size={16} />
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
