import checkIcon from '../../../asset/img/optionIcon/check_Icon.png';
import styles from './ColorOption.module.css';

const COLOR_NAME = ['beige', 'purple', 'blue', 'green'];

function ColorOption({ clickItem, onClick }) {

  return (
    <div className={styles.backgroundOptions}>
      <button
        type='button'
        value={COLOR_NAME[0]}
        className={`${styles.option} ${styles.colorBeige}`}
        onClick={onClick}>
        {COLOR_NAME[0] === clickItem
          && <img className={styles.backgroundChecked} src={checkIcon} alt="check" />}
      </button>

      <button
        type='button'
        value={COLOR_NAME[1]}
        className={`${styles.option} ${styles.colorPurple}`}
        onClick={onClick}>
        {COLOR_NAME[1] === clickItem
          && <img className={styles.backgroundChecked} src={checkIcon} alt="check" />}
      </button>

      <button
        type='button'
        value={COLOR_NAME[2]}
        className={`${styles.option} ${styles.colorBlue}`}
        onClick={onClick}>
        {COLOR_NAME[2] === clickItem
          && <img className={styles.backgroundChecked} src={checkIcon} alt="check" />}
      </button>

      <button
        type='button'
        value={COLOR_NAME[3]}
        className={`${styles.option} ${styles.colorGreen}`}
        onClick={onClick}>
        {COLOR_NAME[3] === clickItem
          && <img className={styles.backgroundChecked} src={checkIcon} alt="check" />}
      </button>
    </div>
  );
}

export default ColorOption;
