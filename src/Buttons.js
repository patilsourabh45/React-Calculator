function Buttons(props){
    return(
<div className="button">
            <button name="1" onClick={props.handle}>1</button>
            <button name="2" onClick={props.handle}>2</button>
            <button name="3" onClick={props.handle}>3</button>
            <button name="+" onClick={props.handle}>+</button>
            <button name="-" onClick={props.handle}>-</button>
            <button name="4" onClick={props.handle}>4</button>
            <button name="5" onClick={props.handle}>5</button>
            <button name="6" onClick={props.handle}>6</button>
            <button name="*" onClick={props.handle}>×</button>
            <button name="/" onClick={props.handle}>÷</button>
            <button name="7" onClick={props.handle}>7</button>
            <button name="8" onClick={props.handle}>8</button>
            <button name="9" onClick={props.handle}>9</button>
            <button name="0" onClick={props.handle}>0</button>
            <button className="highlight" name="=" onClick={props.cal}>=</button>
            <button name="." onClick={props.handle}>.</button>
            <button name="Clear" onClick={props.cle}>Clear</button>
            </div>
);
}

export default Buttons;