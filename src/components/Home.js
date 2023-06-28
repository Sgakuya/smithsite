import { Link } from 'react-router-dom';
import homeStyles from '../styles/Home.module.css';
import test from "../data/test.json"
import { useEffect, useState } from 'react';
// import img from "../data/umojaGrad.jpg"

export function Main({user }){
    const [startX, setStartX] = useState(0);


    useEffect(()=>{
        const track = document.getElementById("images");

        window.onmousedown = e =>{ 
            console.log(track);
            track.dataset.mouseDownAt = e.clientX;
        }
    
        window.onmouseup = () => {
            track.dataset.mouseDownAt = "0";
            track.dataset.prevPercentage = track.dataset.percentage;
        }
    
        window.onmousemove = e =>{
            if(track.dataset.mouseDownAt === "0") return;

            const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX;
            const maxDelta = window.innerWidth / 2;

            const percentage = (mouseDelta/maxDelta) * -100;
            let nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage;

            // console.log(Math.min(nextPercentage, 100), Math.max(nextPercentage, 0));
            if(nextPercentage < -100) { nextPercentage = -100; }
            if(nextPercentage > 0) { nextPercentage = 0; }
            // console.log(nextPercentage);
            track.dataset.percentage = nextPercentage;
            track.style.transform = `translate(${nextPercentage}%, 10%)`;
        }
    }, [])

    return (
        <>
            <h1 className="first"> {user.first} </h1>
            {/* <h1 className="middle"> {user.middle} </h1> */}
            <h1 className="last"> {user.last} </h1>
            <div className={homeStyles.wrapper}>
                <div className={homeStyles.links}>
                        <div>
                            <Link className='link' to="/">Glimpse</Link>            
                        </div>
                        <div>
                            <Link className='link' to="/about">About</Link>
                        </div>
                </div>
                <div id="images" data-prev-percentage="0" data-mouse-down-at="0" className={homeStyles.images}>
                    <img src={require("../data/grad.jpeg")} alt="My friends and I on grad day" draggable="false"></img>
                    <img src={require("../data/doechii.jpeg")} alt="Me with artist Doechii" draggable="false"></img>
                    <img src={require("../data/heelie.jpeg")} alt="Me doing a heelflip" draggable="false"></img>
                    <img src={require("../data/bsuGrad.jpeg")} alt="Middlebury African class of '23" draggable="false"></img>

                </div>
            </div>
        </>
    )
}

function Art({art}){

    return (
        <ul>
            {art.map((piece, i) => {
                let img = <img src={require(piece)} alt="Me"></img>
                return <li key={i}> {img} </li>;
            })}
        </ul>)
}