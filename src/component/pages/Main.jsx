import styles from './Main.module.css';
import mainImg1 from '../../asset/img/mainImg/mainImg_01.png';
import mainImg2 from '../../asset/img/mainImg/mainImg_02.png';
import Button from '../common/button/Button';
import { useNavigate } from 'react-router-dom';

function Main() {
  const navigate = useNavigate();

  return (
    <div className={styles.mainBackground}>
      <div className={styles.mainContents01}>
        <div className={styles.contentsText}>
          <div className={styles.textPoint}>point.01</div>
          <h1 className={styles.textH1}>
            누구나 손쉽게, 온라인
            <br className={styles.textBr} /> 롤링 페이퍼를 만들 수 있어요
          </h1>
          <span className={styles.textSpan}>
            로그인 없이 자유롭게 만들어요.
          </span>
        </div>
        <img src={mainImg1} alt="메인 이미지1"></img>
      </div>
      <div className={`${styles.mainContents01} ${styles.mainContents02}`}>
        <div className={styles.contentsText}>
          <div className={styles.textPoint}>point.02</div>
          <h1 className={styles.textH1}>
            서로에게 이모지로 감정을
            <br className={styles.textBr} /> 표현해보세요
          </h1>
          <span className={styles.textSpan}>
            롤링 페이퍼에 이모지를 추가할 수 있어요.
          </span>
        </div>
        <img src={mainImg2} alt="메인 이미지2"></img>
      </div>
      <div className={styles.mainBottom}>
        <Button
          type="primary"
          width="width280"
          height="tall"
          onClick={() => {
            navigate('/list');
          }}
        >
          구경해보기
        </Button>
      </div>
    </div>
  );
}

export default Main;
