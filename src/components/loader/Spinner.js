import React from 'react';
import styles from './spinner.module.scss';

export default function Spinner() {
  return (
    <svg
      className={styles.spinner}
      width="35px"
      height="35px"
      viewBox="0 0 66 66"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        className={styles.path}
        fill="none"
        strokeWidth="6"
        strokeLinecap="round"
        cx="33"
        cy="33"
        r="30"
      />
    </svg>
  );
}
