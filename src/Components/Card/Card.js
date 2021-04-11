import React from 'react';
import styles from './Card.module.scss';
const Card = ({ girls, onDelete, side }) => {
  return (
    <div
      id={girls.id}
      className={styles.card}
      onClick={() => onDelete(side, girls.name)}
      style={{
        backgroundImage: `url(${girls.img})`,
      }}
    >
      <div className={styles.cardDescription}>
        <h3 className={styles.cardName}>{girls.name}</h3>
      </div>
    </div>
  );
};

export default Card;
