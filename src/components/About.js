import { Link } from 'react-router-dom';
import aboutStyles from "../styles/About.module.css"
import { useRef } from 'react';

export function About({user}) {
    let track = useRef();
    let scrollBox = useRef();

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

    const mouseDown = e => {
        track.current.dataset.mouseDownAt = e.clientY;
    }

    const mouseUp = e => {
        track.current.dataset.mouseDownAt = "0";
        track.current.dataset.prevPercentage = track.current.dataset.percentage;
    }

    const mouseMove = e => {
        if(track.current.dataset.mouseDownAt === "0") return;

        const mouseDelta = parseFloat(track.current.dataset.mouseDownAt) - e.clientY;
        const maxDelta = window.innerHeight / 2;

        const percentage = (mouseDelta/maxDelta) * -100;
        let nextPercentage = parseFloat(track.current.dataset.prevPercentage) + percentage;

        if(nextPercentage < -80) { nextPercentage = -80; }
        if(nextPercentage > 0) { nextPercentage = 0; }
        track.current.dataset.percentage = nextPercentage;
        console.log(track);

        track.current.animate({
            transform: `translate(0%, ${nextPercentage}%)`
        }, {duration:1200, fill:"forwards"});

        const nextScroll = nextPercentage*-2.3;
        scrollBox.current.animate({
            transform: `translate(0%, ${nextScroll}%)`
        }, {duration:1200, fill:"forwards"});
    }

    const onscroll = e => {
        mouseDown(e);

        const maxDelta = window.innerHeight / 2;
        const percentage = ((e.deltaY)/maxDelta) * -100;
        let nextPercentage = parseFloat(track.current.dataset.prevPercentage) + percentage;

        if(nextPercentage < -80) { nextPercentage = -80; }
        if(nextPercentage > 0) { nextPercentage = 0; }
        track.current.dataset.percentage = nextPercentage;
        console.log(track);

        track.current.animate({
            transform: `translate(0%, ${nextPercentage}%)`
        }, {duration:1200, fill:"forwards"});

        const nextScroll = nextPercentage*-2.3;
        scrollBox.current.animate({
            transform: `translate(0%, ${nextScroll}%)`
        }, {duration:1200, fill:"forwards"});

        mouseUp(e);
    }

    return (
        <div onMouseDown={(e)=>mouseDown(e)}  onMouseUp={(e)=>mouseUp(e)} onMouseMove={(e) => mouseMove(e)} 
        onWheel={e=> onscroll(e)}
        onTouchStart={e=>mouseDown(e)} onTouchEnd={e=>mouseUp(e)} onTouchMove={e=>mouseMove(e)}
        onScrollCapture={(e) => onscroll(e)}
        >

            <h1 className="first"> {user.first} </h1>
            <h1 className="last"> {user.last} </h1>     
            <div className={aboutStyles.links}>
                    <Link className='link' to="/">Home</Link>            
                    {/* <Link className='link' to="/art">Art</Link> */}
            </div> 
            <div ref={scrollBox} className='scroll-box'></div>
            <div className='scroll'>
                {content}
            </div>
            <div ref={track} data-prev-percentage="0" data-mouse-down-at="0" className={aboutStyles.about}
                 
                 >     
                {content}
            </div>

            </div>

    )
}