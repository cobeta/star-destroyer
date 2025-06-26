import { useRef } from 'react';

const Star = ({ id, x, y, destroyStar}) => {

    const starRef = useRef();

    const handleClick = () => {
        starRef.current.focus();
        setTimeout( () => destroyStar(id), 300);
    };

    return (
        <div className='star' onClick={handleClick} ref={starRef} tabIndex={0} id={id} style={{ position: 'fixed', left: `${x}px`, top: `${y}px`, transform: 'translate(-50%, -50%)'}}>
            ⭐
        </div>);

};

export default Star;