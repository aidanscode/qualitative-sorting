import './index.css';

function Option({ name, choose }) {
    return <div className='comparison-option'>
        <p>{name}</p>
        <button onClick={choose}>Choose</button>
    </div>
}

export default Option;