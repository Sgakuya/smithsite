import { Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import homeStyles from "../styles/Home.module.css"
// import { Alert } from 'react-bootstrap';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';



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
                
                <h2 className='title'> <i>Laboratory Instructor</i><br/>Middlebury College CS Department</h2>
                <div className='flex-child'>
                    <img 
                    className={homeStyles.portrait} 
                    src={require("../data/portrait.jpg")} alt='Smith Gakuya Middlebury Grad and Software Engineer'></img>
                </div>
                <div className='flex-child2' >
                    <br></br>
        
                    <p> <strong>Office:</strong> 75 Shannon Street 221 </p>
                    <p><strong>Office Hours</strong> M 11:00AM-12:00PM, 2:00PM-4:00PM; T 9:00AM-12:00PM; W 10:00AM-12:00PM, 2:00PM-3:00PM, TR 9:00AM-12:00PM, F 2:00PM-4:00PM or by appointment</p>
                    
                    <p><strong>Email:</strong> sgakuya@middlebury.edu </p>
                    
                    <p>I'm happy to chat about courses, the CS major, or offer any insights I can as a Midd alum. I can confidently help with CS 145, 200, 201, 202, 302, and 312, and I'm also open to collaborating with you to tackle problems in CS 301.
                        For more effective support, feel free to email me in advance with the topics or questions you're struggling with.
                    </p>
                    <p>That said, you likely have a stronger grasp of these courses than I do: CS 416, 442, 451, 457, and 461.</p>
                    
                    <p> <strong>More about me:</strong> <br></br>
                        I am a recent graduate of Middlebury College with a strong passion for technology and creativity. Originally from Kenya, I have always enjoyed exploring new challenges and pushing my limits, whether through academics, research, or 
                        personal hobbies. I am an avid skateboarder and snowboarder, an occasional artist, and a dedicated enthusiast of customized e-bikes, constantly looking for ways to innovate and personalize my rides.
                    </p> 
                    <p>Professionally, my interests span a wide range of fields, including Software and Web Development, Algorithm Design, Cybersecurity, Natural Language Processing (NLP), and Large Language Models (LLMs). I am particularly fascinated by the 
                        intersection of AI and security, as well as the evolving landscape of intelligent systems and their real-world applications. I am always eager to learn, collaborate, and contribute to projects that push the boundaries of technology.
                    </p>

                    <div id="former-content">
                        {/* <h3><strong>IMPORTANT UPDATE: Office Hours will temporarily be over Zoom</strong></h3>
                        <p><strong>Zoom Link: </strong> <a className='zoom' href='https://middlebury.zoom.us/j/96998040243?pwd=SDdVZ2VVK3o3WUQxZjBCNWhpTytOdz09'>link</a></p>
                        <p><strong>Password: </strong> 958144 </p>
                        <p><strong>Meeting ID: </strong> 969 9804 0243 </p> */}

                        {/* <p>I am available to talk about the courses, the major or offer any insights I can as a Midd alum. I can comfortably offer help in 145, 200, 201, 202, 302, and 312. I can also work together with you to solve problems in 301. 
                            It might be helpful to send me an email with the topics/questions you are struggling with so I can help you more efficiently.<br></br><br></br>
                            You probably know more about these topics than I do: 416, 442, 451, 457, 461</p> */}

                        {/* <p><strong>CS 311 Office Hours:</strong> M 2:00PM-4:00PM, T 10:00AM-12:00PM</p> */}

                        {/* <p> <strong>Exam Week Office Hours:</strong> Monday - Friday 1:30-4:30PM</p> */}
                        {/* <p><strong>SPRING SYMPOSIUM Friday(4/19): </strong> Email to schedule a meeting </p> */}

                        {/* <div >
                            <Alert variant="filled" severity="info"> 
                                <AlertTitle>Happy Winter Break! &#x1F384;&#x1F386;&#x26C4;</AlertTitle>
                                There will be no Office Hours starting Thursday 12/12/24 until Spring '25'.</Alert>
                        </div> */}
                    </div>
                </div>
            </div>
            

        
        </>
    )
}