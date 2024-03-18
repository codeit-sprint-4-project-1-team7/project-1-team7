import checkIcon from '../../../asset/img/optionIcon/check_Icon.png';
import styles from './ColorOption.module.css';

const COLOR_NAME = ['beige', 'purple', 'blue', 'green'];

function ColorOption({ clickItem, onClick }) {

  return (
    <div className={styles.backgroundOptions}>
      {COLOR_NAME.map((item) => {
        return (
          <button
            type='button'
            value={item}
            className={`${styles.option} ${styles[item]}`}
            onClick={onClick}>
            {item === clickItem
              && <img className={styles.backgroundChecked} src={checkIcon} alt="check" />}
          </button>
        )
      })}
    </div>
  );
}

export default ColorOption;
