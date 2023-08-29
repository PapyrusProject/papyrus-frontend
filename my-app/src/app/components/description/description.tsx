import styles from './description.module.css'
import Link from 'next/link'

export default function Description() {
    return(
        <div className={`${styles.containerFather}`}>
            <section className={`${styles.wrapper}`}>
                <div className={`${styles.container}`}>
                    <div className={`${styles.grid_cols_2}`}>
                         <div className={`${styles.grid_item_1}`}>
                            <h1 className={`${styles.main_heading}`}>
                                Welcome to <span>Papyrus.</span>
                                <br />
                                Develop anything.
                            </h1>
                            <p className={`${styles.info_text}`}>
                                Build a beautiful, modern website with flexible components built
                                from scratch.
                            </p>




                                <div className={`${styles.btn_wrapper}`}>
                                    <Link href="/mynotes">
                                        <button className={`${styles.view_more_btn} ${styles.btn}`}>
                                        My Notes <i className="" />
                                        </button>
                                    </Link>




                                    <button className={`${styles.documentation_btn} ${styles.btn}`}>Sign In</button>
                            </div>
                        </div>
                        <div className={`${styles.grid_item_2}`}>
                            <div className={`${styles.team_img_wrapper}`}></div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}