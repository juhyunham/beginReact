import React, {useState, useRef} from "react";

function InputSample () {
    const [inputs, setInputs] = useState({
        name: "",
        nickname: ""
    })

    const nameInput = useRef();
    const {name, nickname} = inputs

    const onInputChange = (e) => {
        const {name, value} = e.target

        setInputs({
            ...inputs,
            [name]: value
        })
    }

    const onInputReset = (e) => {
        setInputs({
            name: '',
            nickname: ''
        })

        nameInput.current.focus();
    }

    return (
        <div>
            <input name="name" placeholder="이름" onChange={onInputChange} value={name} ref={nameInput}/>
            <input name="nickname" placeholder="닉네임" onChange={onInputChange} value={nickname}/>
            <button onClick = {onInputReset}>초기화</button>
            <div>
                <b>값: </b>
                {name}({nickname})
            </div>
        </div>
    )
}

export default InputSample;