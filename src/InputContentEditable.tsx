import styles from './Input.module.css'
import { ChangeEvent, useEffect, useRef, useState } from 'react'

const MAX_CHAT_BOX_HEIGHT = 100

function InputContentEditable() {
    const inputRef = useRef<HTMLDivElement>(null)
    const scrollRef = useRef<HTMLDivElement>(null)

    const [html, setHtml] = useState<string>('')

    const updateInputHeight = () => {
        if (inputRef.current && scrollRef.current) {
            scrollRef.current.style.overflow = 'hidden'
            console.log(inputRef.current.scrollHeight)
            if (inputRef.current.scrollHeight > MAX_CHAT_BOX_HEIGHT) {
                scrollRef.current.style.overflowY = 'scroll'
                scrollRef.current.style.height = `${MAX_CHAT_BOX_HEIGHT}px`
            }
        }
    }

    useEffect(() => {
        updateInputHeight()
    }, [html])

    const handleChange = (e: ChangeEvent<HTMLDivElement>) => {
        console.log('change')
        const { innerHTML, textContent } = e.currentTarget
        setHtml(innerHTML ?? '')
        // reset input focus
        if (textContent && textContent.length) {
            console.log(textContent)
        }
    }

    return (
        <div ref={scrollRef} className={`${styles.inputWrapper} custom-scroll`}>
            <div
                ref={inputRef}
                className={styles.inputContentEditable}
                contentEditable
                role="textbox"
                aria-label="Message..."
                onChange={handleChange}
            />
        </div>
    )
}

export default InputContentEditable
