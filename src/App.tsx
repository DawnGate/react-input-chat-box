import style from './App.module.css'
import ChatBox from './ChatBox'
import ChatInput from './ChatInput'
import InputTextArea from './InputTextArea'
import InputContentEditable from './InputContentEditable'

function App() {
    return (
        <div>
            <h1 className={style.title}>Hello world!</h1>
            <ChatBox>
                <ChatInput>
                    <InputTextArea />
                </ChatInput>
            </ChatBox>
            <ChatBox>
                <ChatInput>
                    <InputContentEditable />
                </ChatInput>
            </ChatBox>
        </div>
    )
}

export default App
