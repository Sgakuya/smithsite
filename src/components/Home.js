import { Link } from 'react-router-dom';
import homeStyles from '../styles/Home.module.css';
import { useEffect, useState, useRef } from 'react';
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

export function Main({user }){
    const [loading, setLoading] = useState(true);

    let track = useRef();
    const override = {
        position: "absolute",
        top: "42%",
        left: "42%",
    };
    
    useEffect(()=>{
        setLoading(true);
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 2000)

        return function () { clearTimeout(timeout)};
    }, [])

    const mouseDown = e => {
        track.current.dataset.mouseDownAt = e.clientX;
    }

    const mouseUp = e => {
        track.current.dataset.mouseDownAt = "0";
        track.current.dataset.prevPercentage = track.current.dataset.percentage;
    }

    const mouseMove = e => {
        if(track.current.dataset.mouseDownAt === "0") return;

        const mouseDelta = parseFloat(track.current.dataset.mouseDownAt) - e.clientX;
        const maxDelta = window.innerWidth / 2;

        const percentage = (mouseDelta/maxDelta) * -100;
        let nextPercentage = parseFloat(track.current.dataset.prevPercentage) + percentage;

        if(nextPercentage < -135) { nextPercentage = -135; }
        if(nextPercentage > 0) { nextPercentage = 0; }
        track.current.dataset.percentage = nextPercentage;
        track.current.animate({
            transform: `translate(${nextPercentage}%, 2%)`
        }, {duration:1200, fill:"forwards"});

        for(const image of track.current.getElementsByClassName("image")){
            image.animate({
                objectPosition: `${nextPercentage + 100}% 50%`
            }, {duration:1200, fill:"forwards"});
        }
    }

    const images = (
        <div className='imgs-track'>
            <img className="img" src={require("../data/grad.jpeg")} alt="My friends and I on grad day" draggable="false"></img>
            <img className="img" src={require("../data/umojaGrad.jpg")} alt="Middlebury African class of '23" draggable="false"></img>
            <img className="img" src={require("../data/doechii.jpeg")} alt="Me with artist Doechii" draggable="false"></img>
            <img className="img" src={require("../data/board.jpeg")} alt="Snowboard attached to my feet while lying on snow" draggable="false"></img>
            <img className="img" src={require("../data/heelie.jpeg")} alt="Me doing a heelflip" draggable="false"></img>
            <img className="img" src={require("../data/bsuGrad.jpeg")} alt="Middlebury African class of '23" draggable="false"></img>
        </div>
    )

    const onScroll = e => {
        // console.log(e);
        mouseDown(e);

        const maxDelta = window.innerWidth / 2;
        let deltaX;
        e.deltaX < 0 ? deltaX = e.deltaX - 5 : deltaX = e.deltaX + 5;
        const percentage = ((e.deltaX)/maxDelta) * -100;
        let nextPercentage = parseFloat(track.current.dataset.prevPercentage) + percentage;

        if(nextPercentage < -135) { nextPercentage = -135; }
        if(nextPercentage > 0) { nextPercentage = 0; }
        track.current.dataset.percentage = nextPercentage;
        // console.log(nextPercentage);
        track.current.animate({
            transform: `translate(${nextPercentage}%, 2%)`
        }, {duration:1200, fill:"forwards"});

        for(const image of track.current.getElementsByClassName("image")){
            image.animate({
                objectPosition: `${nextPercentage + 100}% 50%`
            }, {duration:1200, fill:"forwards"});
        }

        mouseUp(e);
    }

    return (
        <>
        { loading ? 

        (<ClimbingBoxLoader className="loader" cssOverride={override} color={"#FFFF"} loading={loading} size={10} />)
        :
        (<div>

        <h1 className="first"> {user.first} </h1>
        <h1 className="last"> {user.last} </h1>
        <div className={homeStyles.links}>
                <Link className='link' to="/">Glimpse</Link>            
                <Link className='link' to="/about">About</Link>
        </div>
            <div className={homeStyles.images} ref={track} data-prev-percentage="0" data-mouse-down-at="0" onMouseDown={(e)=>mouseDown(e)} 
            onMouseUp={(e)=>mouseUp(e)} onMouseMove={(e) => mouseMove(e)} onWheel={e=> onScroll(e)}>
            
                <img className="image" src={require("../data/grad.jpeg")} alt="My friends and I on grad day" draggable="false"></img>
                <img className="image" src={require("../data/umojaGrad.jpg")} alt="Middlebury African class of '23" draggable="false"></img>
                <img className="image" src={require("../data/doechii.jpeg")} alt="Me with artist Doechii" draggable="false"></img>
                <img className="image" src={require("../data/board.jpeg")} alt="Snowboard attached to my feet while lying on snow" draggable="false"></img>
                <img className="image" src={require("../data/heelie.jpeg")} alt="Me doing a heelflip" draggable="false"></img>
                <img className="image" src={require("../data/bsuGrad.jpeg")} alt="Middlebury African class of '23" draggable="false"></img>
            </div>
            {images}            
        </div>)
                
        }
        </>
    )
}