import styles from './header.module.css'
import Link from 'next/link'

export default function Header() {
    return(
        <div className={`${styles.header}`}>
            <nav className={`${styles.nav}`}>
                <div className={`${styles.logo}`}>
                     <h2>Papyrus.</h2>
                </div>
                <div className={``} id="nav_menu">
                    <button className={`close_btn`} id="close_btn">
                        <i className="ri-close-fill" />
                    </button>

                  <ul className={`${styles.nav_menu_list}`}>
                    <li className={`${styles.nav_menu_item}`}>
                      <Link href="/account" className={`${styles.nav_menu_link}`} style={{ whiteSpace: 'nowrap' }}>
                        sign up
                      </Link>
                    </li>

                    <li className={`${styles.nav_menu_item}`}>
                      <Link href="/about" className={`${styles.nav_menu_link}`}>
                         about
                      </Link>
                    </li>

                    <li className={`${styles.nav_menu_item}`}>
                      <Link href="/service" className={`${styles.nav_menu_link}`}>
                        service
                      </Link>
                    </li>
                    <li className={`${styles.nav_menu_item}`}>
                      <Link href="#" className={`${styles.nav_menu_link}`}>
                        contact
                      </Link>
                    </li>
                  </ul>
                </div>
                <button className="toggle_btn" id="toggle_btn">
                  <i className="ri-menu-line" />
                </button>
            </nav>
        </div>
    )
}