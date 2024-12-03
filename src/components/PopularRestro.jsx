import React from 'react';
import styles from './PopularRestro.module.css';
import { Link } from 'react-router-dom';

const PopularRestro = () => {
    return (
        <>
            <div className={styles.popularcontainer} >
                <div className={styles.popularrestro} >
                    <div className={styles.popularcard}>
                        <Link to="/productpage" className={styles.link}>
                            <img className={styles.popularimg} src="/assets/McDonald’s London.png" alt="McDonald’s London" />
                            <button className={styles.restrotitle}>McDonald's London</button>
                        </Link>
                    </div>
                    <div className={styles.popularcard}>
                        <img className={styles.popularimg} src="/assets/Papa Johns.png" alt="McDonald’s London " />
                        <button className={styles.restrotitle} >Papa Johns</button>
                    </div>
                    <div className={styles.popularcard}>
                        <img className={styles.popularimg} src="/assets/KFC West London.png" alt="McDonald’s London " />
                        <button className={styles.restrotitle} >KFC West London</button>
                    </div>
                    <div className={styles.popularcard}>
                        <img className={styles.popularimg} src="/assets/Texas Chicken.png" alt="McDonald’s London " />
                        <button className={styles.restrotitle} >Texas Chicken</button>
                    </div>
                    <div className={styles.popularcard}>
                        <img className={styles.popularimg} src="/assets/Burger King.png" alt="McDonald’s London " />
                        <button className={styles.restrotitle} >Burger King</button>
                    </div>
                    <div className={styles.popularcard}>
                        <img className={styles.popularimg} src="/assets/Shaurma 1.png" alt="McDonald’s London " />
                        <button className={styles.restrotitle} >Shaurma 1</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PopularRestro