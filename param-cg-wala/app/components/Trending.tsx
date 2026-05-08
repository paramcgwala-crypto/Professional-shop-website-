'use client';

import { useRef } from 'react';
import styles from './Trending.module.css';
import { motion, useScroll, useTransform } from 'framer-motion';

const TRENDING_ITEMS = [
  { id: 1, name: 'Cyberpunk Jacket', price: '₹4,999', category: 'Outerwear', image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&q=80&w=800' },
  { id: 2, name: 'Emerald Silk Dress', price: '₹8,499', category: 'Dresses', image: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&q=80&w=800' },
  { id: 3, name: 'Gold Trim Sneakers', price: '₹12,999', category: 'Footwear', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800' },
  { id: 4, name: 'Noir Obsidian Watch', price: '₹24,999', category: 'Accessories', image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&q=80&w=800' },
];

export default function Trending() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section className={styles.trendingSection} ref={containerRef} id="trending">
      <div className={styles.header}>
        <motion.h2 
          className={styles.title}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          Trending <span className="text-gradient-gold">Now</span>
        </motion.h2>
        <p className={styles.subtitle}>Curated luxury picks for the elite</p>
      </div>

      <div className={styles.carouselContainer}>
        <motion.div className={styles.carousel} style={{ x }}>
          {TRENDING_ITEMS.map((item, index) => (
            <motion.div 
              key={item.id} 
              className={`glass-panel ${styles.card}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className={styles.imageContainer}>
                {/* We use standard img for dynamic external urls simply in this demo */}
                <img src={item.image} alt={item.name} className={styles.image} />
                <div className={styles.overlay}>
                  <button className={styles.quickAdd}>Quick Add</button>
                </div>
              </div>
              <div className={styles.info}>
                <span className={styles.category}>{item.category}</span>
                <h3 className={styles.itemName}>{item.name}</h3>
                <span className={styles.price}>{item.price}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
