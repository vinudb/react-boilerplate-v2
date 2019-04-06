import React, { useState } from 'react';

const Ticker = (props) =>{
    const [count, setCount] = useState(props.count);
    const [defaultCount, setDefault] = useState("");

    const increaseCount = ()=>{
        setCount(parseInt(count) + 1);
    };

    const resetCount = ()=>{
        defaultCount.length===0 ? setCount(0) : setCount(defaultCount);
    };

    const decreaseCount = ()=>{
        setCount(count-1);
    };

    const setDefaultCount = (e)=>{
        const val = e.target.value;
        if(val.length===0){
            setCount(props.count);
            setDefault("");
            return;
        }
        if (!val || val.match(/^\d{1,4}(\.\d{0,2})?$/)) {
            setCount(val);
            setDefault(val);
        }
        else{
            setCount(defaultCount);
        }
    };

    return(
        <div className="parent-container">
            <div className="child-container">
                <input className="input-container" placeholder="Default Value" type="text" value={defaultCount} onChange={setDefaultCount}/>
                <p className="counter-container"> {count} </p>

                <div className="buttons-container">
                    <button className="button-panel fa fa-plus fa-2x" onClick={increaseCount}>  </button>
                    <button className="button-panel button--reset fa fa-refresh fa-2x" onClick={resetCount}> </button>
                    <button className="button-panel fa fa-minus fa-2x" onClick={decreaseCount}>  </button>
                </div>
            </div>
        </div>
    );
};

Ticker.defaultProps = {
    count:0
}

export { Ticker as default };