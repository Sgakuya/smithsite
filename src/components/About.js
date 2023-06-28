import { Link } from 'react-router-dom';
import aboutStyles from "../styles/About.module.css"

export function About({user}) {

    return (
        <>
            <h1 className="first"> {user.first} </h1>
            {/* <h1 className="middle"> {user.middle} </h1> */}
            <h1 className="last"> {user.last} </h1>      
            <div className={aboutStyles.wrapper}>
                <div className={aboutStyles.links}>
                        <div>
                            <Link className='link' to="/">Glimpse</Link>            
                        </div>
                        <div>
                            <Link className='link' to="/about">About</Link>
                        </div>
                </div>
                <p>{user.about}</p>
                <h2> Working Experience </h2>
                <h2> Get in Touch </h2>
                <div className={aboutStyles.contact}>
                    <a className="link" href={`mailto: ${user.email}`}>Email</a>
                    <a className="link" href={user.linkedin}>LinkedIn</a>
                    <a className="link" href={user.github}>GitHub</a> 
                    <a className="link" href={`tel:${user.phone}`}>Phone</a>
                </div>
            </div>
            
            
        </>
    )
}