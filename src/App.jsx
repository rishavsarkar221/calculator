import React, { useState } from 'react';
import BackspaceIcon from '@material-ui/icons/Backspace';

const App = () => {
    const [innerHTML, setInnerHTML] = useState("");

    const onClick = (e) => setInnerHTML(innerHTML + e.target.innerHTML);

    return(
        <React.Fragment>
            <div className="outputField">
                {innerHTML}
            </div>
            <div className="buttons">
                <button className="numbers" onClick={onClick}>1</button>
                <button className="numbers" onClick={onClick}>2</button>
                <button className="numbers" onClick={onClick}>3</button>

                <button className="numbers" onClick={onClick}>4</button><br/>
                <button className="numbers" onClick={onClick}>5</button>
                <button className="numbers" onClick={onClick}>6</button>
                <button className="numbers" onClick={onClick}>7</button>
                
                <button className="numbers" onClick={onClick}>8</button><br/>
                <button className="numbers" onClick={onClick}>9</button>
                <button className="numbers" onClick={onClick}>0</button>

                <button className="operators" onClick={onClick}>+</button>
                
                <button className="operators" onClick={onClick}>-</button><br />
                <button className="operators" onClick={onClick}>*</button>
                <button className="operators" onClick={onClick}>/</button>
                <button className="operators" onClick={onClick}>(</button>
                
                <button className="operators" onClick={onClick}>)</button><br/>
                <button onClick={() => setInnerHTML("")}>C</button>
                <button onClick={() => setInnerHTML(innerHTML.slice(0, -1))}><BackspaceIcon /></button>

                <button className="equal" style={{width: '10%', height: '75px', color: 'white'}} onClick={() => setInnerHTML(eval(innerHTML))}>=</button>
            </div>
        </React.Fragment>
    );
}

export default App;