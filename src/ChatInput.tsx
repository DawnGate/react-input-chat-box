import { ReactNode } from 'react'
import styles from './ChatInput.module.css'

import Icon from './Icon'
import SmileIcon from './assets/smile.svg'
import SendIcon from './assets/send.svg'

function ChatInput({ children }: { children: ReactNode }) {
    return (
        <div className={styles.chatInput}>
            <Icon>
                <SmileIcon />
            </Icon>
            {children}
            <Icon>
                <SendIcon />
            </Icon>
        </div>
    )
}

export default ChatInput
