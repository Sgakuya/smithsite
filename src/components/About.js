import { Link } from 'react-router-dom';
import aboutStyles from "../styles/About.module.css"
import { useEffect } from 'react';

export function About({user}) {

    const experiences = user.experiences.map( (e, i) => {
        return (
        <div key={i}> 
            <h4> <i>{e.position}</i> || {e.company} </h4>
            <p className='info'> {e.info} </p>
            <p className='date'> {e.start} to {e.stop} </p>
            <br></br>
        </div>)
    });

    const projects = user.projects.map( (e, i) => {
        return (
        <div key={i}> 
            <h3> <i>{e.title}</i> </h3>
            <p className='info'> {e.info} </p>
            <br></br>
        </div>)
    });

    const content = (
        <div>
            <p>{user.about} </p>
            <br/><br/>
            <h2> Working Experience </h2>
            {experiences}
            <br/><br/>
            <h2> Projects Sample </h2>
            {projects}
            <h2> Get in Touch </h2>
            <div className={aboutStyles.contact}>
                <a className="link" href={`mailto: ${user.email}`}>Email</a>
                <a className="link" href={user.linkedin}>LinkedIn</a>
                <a className="link" href={user.github}>GitHub</a> 
                <a className="link" href={`tel:${user.phone}`}>Phone</a>
            </div>
        </div>
    )

    useEffect(()=>{
        const track = document.getElementById("about"), 
            scrollBox = document.getElementById("scroll-box");

        window.onmousedown = e =>{ 
            // console.log(track);
            track.dataset.mouseDownAt = e.clientY;
        }
    
        window.onmouseup = () => {
            track.dataset.mouseDownAt = "0";
            track.dataset.prevPercentage = track.dataset.percentage;
        }
    
        window.onmousemove = e =>{
            if(track.dataset.mouseDownAt === "0") return;

            const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientY;
            const maxDelta = window.innerHeight / 2;

            const percentage = (mouseDelta/maxDelta) * -100;
            let nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage;

            if(nextPercentage < -70) { nextPercentage = -70; }
            if(nextPercentage > 0) { nextPercentage = 0; }
            console.log( nextPercentage);
            track.dataset.percentage = nextPercentage;
            track.animate({
                transform: `translate(0%, ${nextPercentage}%)`
            }, {duration:1200, fill:"forwards"});

            const nextScroll = nextPercentage*-2.3;
            scrollBox.animate({
                transform: `translate(0%, ${nextScroll}%)`
            }, {duration:1200, fill:"forwards"});

        }

        
    }, [])

    return (
        <div>

            <h1 className="first"> {user.first} </h1>
            <h1 className="last"> {user.last} </h1>     
            <div className={aboutStyles.links}>
                    <Link className='link' to="/">Glimpse</Link>            
                    <Link className='link' to="/about">About</Link>
            </div> 
            <div id="scroll-box" className='scroll-box'></div>
            <div className='scroll'>
                {content}
            </div>
            <div id="about" data-prev-percentage="0" data-mouse-down-at="0" className={aboutStyles.about}>     
                {content}
            </div>

            </div>

    )
}