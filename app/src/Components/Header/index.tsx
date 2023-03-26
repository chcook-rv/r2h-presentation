import { FC } from 'react'
import bankrateLogo from '../../_assets/bankrate-b-logo.svg'
import roadToHireLogo from '../../_assets/roadToHireLogo.png'
import cn from 'classnames'

import styles from './header.module.scss'

const Header: FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header__content}>
        <img
          className={styles.header__logo}
          src={bankrateLogo}
          alt="Header logo"
        />
        <img
          className={cn(styles.header__logo, styles['--right'])}
          src={roadToHireLogo}
          alt="Header logo"
        />
      </div>
    </div>
  )
}

export default Header
