import { useNavigate } from "react-router-dom";

import styles from "./Kim.module.css";

import { SyncLoader } from "react-spinners";

export function Kim({}) {
  return (
    <>
      <div className={styles.cardBox}>
        {Array(6)
          .fill(null)
          .map((_, index) => (
            <div key={index} className={styles.cardContainerLoading}>
              <SyncLoader color="#ab57ff" />
            </div>
          ))}
      </div>
    </>
  );
}
