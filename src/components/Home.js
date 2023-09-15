import { Link } from 'react-router-dom';
import homeStyles from "../styles/Home.module.css"

export function Main({user}){


    return(
        <>
            <h1 className="first"> {user.first} </h1>
            <h1 className="last"> {user.last} </h1>  
            <div className="links">
                {/* <Link className='link' to="/art">Art</Link>             */}
                <Link className='link' to="/about">About</Link>
            </div>

            <div className="flex-container">
                <div className='flex-child'>
                    <img 
                    className={homeStyles.portrait} 
                    src={require("../data/portrait.jpg")} alt='Smith Gakuya Middlebury Grad and Software Engineer'></img>
                </div>
                <div className='flex-child2' >
                    <h2 className='title'> <i>Assistant in Instruction</i> - Middlebury College CS Department</h2>
                    <br></br>
                    <p> <strong>Office:</strong> 75 Shannon Street 221 </p>
                    <p><strong>Office Hours:</strong> Monday - Friday = 1:30PM - 4:30PM and by appointment</p>
                    <p><strong>Email:</strong> sgakuya@middlebury.edu </p>
                    <br></br>
                    <p>I am a recent graduate from Middlebury College. I grew up in Kenya and am an avid skateboarder/snowboarder, occasional artist, and customized e-bike enthusiast.</p>
                    <p>My professional/research interests include Software & Web Development, Cyber Security, NLP and LLMs. </p>
                </div>
            </div>
            

        
        </>
    )
}