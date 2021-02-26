import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/Profile.module.css";

export function Profile() {
  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img
        src="https://avatars.githubusercontent.com/u/59886891?s=400&u=c09789e8cff4b19921b167962b5c760176316b5e&v=4"
        alt="Avatar do usuário"
      />
      <div>
        <strong>Caio Lemec</strong>
        <p>
          <img src="icons/level.svg" alt="Seta verde para cima" />
          Level {level}
        </p>
      </div>
    </div>
  );
}
