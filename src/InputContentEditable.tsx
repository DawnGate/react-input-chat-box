import styles from './Input.module.css'
import { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from 'react'

const MAX_CHAT_BOX_HEIGHT = 100

function InputContentEditable() {
    const inputRef = useRef<HTMLDivElement>(null)
    const scrollRef = useRef<HTMLDivElement>(null)

    const [html, setHtml] = useState<string>('')

    const updateInputHeight = () => {
        if (inputRef.current && scrollRef.current) {
            scrollRef.current.style.overflow = 'hidden'
            scrollRef.current.style.height = `${inputRef.current.scrollHeight}px`
            if (inputRef.current.scrollHeight > MAX_CHAT_BOX_HEIGHT) {
                scrollRef.current.style.overflowY = 'scroll'
                scrollRef.current.style.height = `${MAX_CHAT_BOX_HEIGHT}px`
            }
        }
    }

    useEffect(() => {
        // reset input box
        if (inputRef.current && html !== inputRef.current.innerHTML) {
            inputRef.current.innerHTML = html
        }

        updateInputHeight()
    }, [html])

    const handleChange = (e: ChangeEvent<HTMLDivElement>) => {
        const { innerHTML, textContent } = e.currentTarget
        setHtml(innerHTML ?? '')
        if (textContent && textContent.length) {
            console.log(textContent)
        }
    }

    const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault()
            console.log('send')
            setHtml('')
        }
    }

    return (
        <div ref={scrollRef} className={`${styles.inputWrapper} scrollbar`}>
            <div
                ref={inputRef}
                className={styles.inputContentEditable}
                contentEditable
                role="textbox"
                aria-label="Message..."
                onInput={handleChange}
                onKeyDown={handleKeyDown}
            />
        </div>
    )
}

export default InputContentEditable
