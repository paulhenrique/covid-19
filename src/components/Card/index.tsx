import React from 'react'
import styles from './styles.module.scss';
interface CardProps {
  title: string;
  content: string | number;
}

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className={styles.Card}>
      <p>{title}:</p>
      <h3>{content}</h3>
    </div>
  )
}

export default Card
