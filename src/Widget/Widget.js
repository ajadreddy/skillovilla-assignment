import React,{useState} from 'react'

const Widget = () => {
    const [inputs, setInputs] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setInputs([...inputs, inputValue]);
        setInputValue('');
    };
  return (
    <div>
        <form>
            <div>
                <img style={{width:'40px',borderRadius:'40px'}} src="https://ionicframework.com/docs/img/demos/avatar.svg" alt="" />
            
                <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                />
                <button type="submit" onClick={handleSubmit}>
                    Submit
                </button>
            </div>
        </form>
        <div>
            {inputs.map((input, index) => (
            <>
            <div>
            <img style={{width:'40px',borderRadius:'40px'}} src="https://ionicframework.com/docs/img/demos/avatar.svg" alt="" />
            <p key={index}>{input}</p>    
            </div>
                
            </>
            ))}
        </div>
    </div>
  )
}

export default Widget