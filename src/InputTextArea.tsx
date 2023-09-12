import { useState, useEffect, useRef, ChangeEvent, KeyboardEvent } from 'react'
import styles from './Input.module.css'

const MAX_CHAT_BOX_HEIGHT = 100

function InputTextArea() {
    const textareaRef = useRef<HTMLTextAreaElement | null>(null)
    // state
    const [inputText, setInputText] = useState<string>('')
    // local variable
    const trimmedText = inputText.trim()

    // event
    const handleSubmit = () => {
        if (!trimmedText) return
        // send message to server
        console.log(trimmedText)
        // reset input text
        setInputText('')
        if (textareaRef.current) {
            textareaRef.current.value = ''
        }
    }

    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setInputText(e.target.value)
    }

    const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault()
            handleSubmit()
        } else if (e.key === 'Enter' && e.shiftKey) {
            setInputText((prev) => `${prev}\t`)
        }
    }

    const adjustTextareaHeight = () => {
        if (textareaRef.current) {
            textareaRef.current.style.overflowY = 'hidden'
            textareaRef.current.style.maxHeight = `${MAX_CHAT_BOX_HEIGHT}px`
            textareaRef.current.style.height = 'auto'
            if (textareaRef.current.scrollHeight >= MAX_CHAT_BOX_HEIGHT) {
                textareaRef.current.style.overflowY = 'scroll'
            }
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
        }
    }

    // effect
    useEffect(() => {
        adjustTextareaHeight()
    }, [inputText])

    return (
        <textarea
            className={`${styles.inputWrapper} ${styles.inputTextArea} scrollbar`}
            rows={1}
            value={inputText}
            placeholder="Message..."
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            ref={textareaRef}
        />
    )
}

export default InputTextArea
