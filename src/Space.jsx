import { useEffect, useState } from 'react';
import Star from './Star.jsx'

const Space = () => {
    const [stars, setStars] = useState([]);

    const destroyStar = (id) => {
        setStars(stars.filter( star => (star.id != id)));
    }

    const createStar = () => {
        const epochTime = Math.floor(Date.now() * 1000);
        const xPosition = (window.innerWidth - 70) * Math.random();
        const yPosition = (window.innerHeight - 70) * Math.random();

        setStars(prevStars => [...prevStars, {id: epochTime, x: xPosition, y:yPosition}]);
    };

    useEffect(() => {
        const interval = setInterval(createStar, 2500);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="space">
            {stars.map((star) => (
                <Star key={star.id} id={star.id} x={star.x} y={star.y} destroyStar={destroyStar}/>
            ))}
        </div>
    );
};

export default Space;