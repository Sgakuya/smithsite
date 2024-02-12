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
                <h2 className='title'> <i>Assistant in Instruction</i><br/>Middlebury College CS Department</h2>
                <div className='flex-child'>
                    <img 
                    className={homeStyles.portrait} 
                    src={require("../data/portrait.jpg")} alt='Smith Gakuya Middlebury Grad and Software Engineer'></img>
                </div>
                <div className='flex-child2' >
                    <br></br>
                    <p> <strong>Office:</strong> 75 Shannon Street 221 </p>
                    <p><strong>Office Hours:</strong> M 12:00-3:00PM, T 9:00AM-12:00PM, W 12:00-3:00PM, TR 9:00AM-12:00PM, F 1:00-4:00PM or by appointment</p>
                    <p><strong>Email:</strong> sgakuya@middlebury.edu </p>
                    <p>I can comfortably offer help in 145, 200, 201, 202, 302 and 312. I can also work together with you to solve problems in 301 and 390. 
                        It might be helpful to send me an email with the topics/questions you are struggling with so I can help you more efficiently.<br></br><br></br>
                        You probably know more about these topics than I do: 321, 414, 451, 452, 457</p>
                    <br></br>
                    {/* <h3><strong>IMPORTANT UPDATE: Office Hours will temporarily be over Zoom</strong></h3>
                    <p><strong>Zoom Link: </strong> <a className='zoom' href='https://middlebury.zoom.us/j/96998040243?pwd=SDdVZ2VVK3o3WUQxZjBCNWhpTytOdz09'>link</a></p>
                    <p><strong>Password: </strong> 958144 </p>
                    <p><strong>Meeting ID: </strong> 969 9804 0243 </p> */}
                    <br></br>
                    <p>I am a recent graduate from Middlebury College. I grew up in Kenya and am an avid skateboarder/snowboarder, occasional artist, and customized e-bike enthusiast.</p>
                    <p>My professional/research interests include Software & Web Development, Algorithm Development, Cyber Security, NLP and LLMs. </p>
                </div>
            </div>
            

        
        </>
    )
}