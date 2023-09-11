import { ReactNode } from 'react'

import styles from './ChatBox.module.css'

function ChatBox({ children }: { children: ReactNode }) {
    return (
        <div className={styles.chatBoxWrapper}>
            <div className={styles.chatBox}>
                <div className={styles.chatMessages} />
                {children}
            </div>
        </div>
    )
}

export default ChatBox
