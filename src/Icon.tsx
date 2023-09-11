import { ReactNode } from 'react'
import styles from './Icon.module.css'

function Icon({ children }: { children: ReactNode }) {
    return <div className={styles.iconWrapper}>{children}</div>
}

export default Icon
