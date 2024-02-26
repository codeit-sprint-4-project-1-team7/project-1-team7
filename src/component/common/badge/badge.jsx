import styles from './badge.module.css';

export const Badge = ({ relation }) => {
  let relClass = ``;
  if (relation === '지인') {
    relClass = `${styles.other}`;
  } else if (relation === '동료') {
    relClass = `${styles.coworker}`;
  } else if (relation === '가족') {
    relClass = `${styles.family}`;
  } else if (relation === '친구') {
    relClass = `${styles.friend}`;
  }
  return <div className={`${styles.badgeForm} ${relClass}`}>{relation}</div>;
};
