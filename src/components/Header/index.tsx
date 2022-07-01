import React from 'react'
import styles from './Header.module.css'
import Logo from '../../assets/img/logo-todolist.svg'

export function Header() {
    return (
        <header className={styles.header}>
            <img src={Logo} className={styles.logo} alt="Logotipo da aplicação" />
        </header>
    )
}
