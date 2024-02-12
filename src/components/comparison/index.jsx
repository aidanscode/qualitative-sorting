import './index.css';
import Option from './option';

function Comparison({ leftName, rightName, selectLeft, selectRight }) {
    return <>
        <h3>Sorting...</h3>
        <div className='compare-container'>
            <Option name={leftName} choose={selectLeft} />
            <Option name={rightName} choose={selectRight} />
        </div>
    </>
}

export default Comparison;