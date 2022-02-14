import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
    const {level} = useContext(ChallengesContext);

    return (
        <div className = {styles.profileContainer}>
            <img src="https://avatars.githubusercontent.com/u/73550778?s=96&v=4" alt="Foto de perfil" />
            <div>
                <strong>Eric Moraes</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level {level}
                </p>
            </div>
        </div>
    );
}