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
                    <p>I can comfortably offer help in 110, 145, 150, 200, 201, 202, and 312. I can also work together with you to solve problems in 301, 302, 311, and 313. 
                        It might be helpful to send me an email with the topics/questions you are struggling with so I can help you more efficiently.<br></br><br></br>
                        You probably know more about these topics than I do: 315, 333, 461</p>
                    <br></br>
                    {/* <h3><strong>IMPORTANT UPDATE: Office Hours will temporarily be over Zoom</strong></h3>
                    <p><strong>Zoom Link: </strong> <a className='zoom' href='https://middlebury.zoom.us/j/96998040243?pwd=SDdVZ2VVK3o3WUQxZjBCNWhpTytOdz09'>link</a></p>
                    <p><strong>Password: </strong> 958144 </p>
                    <p><strong>Meeting ID: </strong> 969 9804 0243 </p> */}
                    <br></br>
                    <p>I am a recent graduate from Middlebury College. I grew up in Kenya and am an avid skateboarder/snowboarder, occasional artist, and customized e-bike enthusiast.</p>
                    <p>My professional/research interests include Software & Web Development, Cyber Security, NLP and LLMs. </p>
                </div>
            </div>
            

        
        </>
    )
}