// import React, { useState } from 'react'



// function Resume() {
//     // creating three separate use States for interactive parts of the resume which are Show Education and Show Experience 
//     // useState is a built-in hook in React that allows you to add state to a functional component, it returns an array with two elements, the first element is the current state value, and the second element is a function to update that state 
//     const [showEducation, setShowEducation] = useState(true); 
//     const [showExperience, setShowExperience]= useState(true);
//     const [showSkills, setShowSkills] = 
//     useState(true)

//     //create toggle functions for experience and education
//     //targeting setShowEducation, setShowExperience, and setShowSkills to override the original state and set it to false;
//     const toggleEducation = () => {
//         setShowEducation(!showEducation);
//     };

//     const toggleExperience = () => {
//         setShowExperience(!showExperience);
//     };
//     const toggleSkills = () => {
//         setShowSkills(!showSkills)
//     }
//     //"!" is a JS operator that means "not"/"no", adding the ! to the show useStates essentially turns the useState to false
    
    
//   return (
//     <div className = "container">
//         <h1 className= "header">Akili Inniss</h1>
//         <p>(123)456-7890</p>
//         <a href = "https://www.linkedin.com/in/akili-inniss-778611265/"target = "_blank" rel = "noreferrer">LinkedIn</a>
//         <br/>
//         <a href = "https://github.com/Keelsthegreat"target = "_blank" rel = "noreferrer">GitHub</a>
//         <hr/>
//         {/* This part is used to conditionally render education and experience IF experience and education is true if its false it will not render */}
//         {showEducation && (
//             <section>
//                 <h2 className="subHeader">Education</h2>
//                 <h4> Per Scholas -</h4>
//                     <ul>
//                         <li>Software Engineering</li>
//                         <li>Expected graduation May 2022</li>
//                     </ul>
//                  <h4>Kingsborough Community College -</h4>
//                     <ul>
//                         <li>Graduated 2018</li>
//                         <li>Arts Associates</li>
//                         <li>3.9 GPA</li>
//                     </ul>
//                 <h4>Brooklyn Bridge Academy High School -</h4>
//                     <ul>
//                         <li>Graduted 2016</li>
//                         <li>Salutatorian</li>
//                         <li>4.0 GPA</li>    
//                     </ul>   
                
//             </section>
        
//         )}

//         {showExperience && (
//             <section>
//                 <h2 className ="subHeader">Experience</h2>
                
//                 <h4>United States Postal Office -</h4>
//                 <p>PSE/Clerk</p>
//                 <p>Bronx, NY</p>
//                 <p>June 2018 - 2021</p>
//                 <ul>
//                     <li>Sorting Packages/Parcels by date, zip code and routes</li>
//                     <li>Assisting customers with mail forms, tracking lost packages</li>
//                     <li>Restoring damaged parcels/mail</li>
//                     <li>Sorting Envelopes by state zip codes</li>
//                 </ul>

//                 <h4>Parm -</h4>
//                 <p>Cashier/Expediter</p>
//                 <p>Battery Park City, NY</p>
//                 <p>Jan 2018 - Aug 2018</p>
//                 <ul>
//                     <li>Set up, cleaned, and maintained work area for the duration of the shift</li>
//                     <li>Provided excellent customer service, answered questions regarding the products</li>
//                     <li>Supervised cash register which included proficiency in the POS System, counting daily earnings and customer purchases</li>
//                     <li>Manged 5 tablets, 2 cash registers, and telephone</li>
//                     <li>Ability to multitask in fast paced environments</li>
//                     <li>Prepared catering orders, organized products according to list</li>
//                     <li>Expedited orders at fast pace, making sure orders were completed properly before packing</li>
//                 </ul>
//                 <h4>SoleMate -</h4>
//                 <p>Cashier/Saltes Associate/Event Hostess</p>
//                 <p>Brooklyn, NY</p>
//                 <p>June 2012 - Jan 2018</p>
//                 <ul>
//                     <li> Greeted Customers and Provided Assistance</li>
//                     <li>Set up tables, served drinks to guests</li>
//                     <li>Supervised cash register </li>
//                     <li>Keeping track of daily earnings</li>
//                     <li>organizing customer purchases</li>
//                     <li> In charge of SoleMate social media page and promoted multiple products</li>
//                     <li>Answered customer inquiries online pertaining to products</li>
//                 </ul>



//             </section>
            
//         )}

//         {showSkills && (
//         <section>
//             <h2 className = "subHeader">Skills</h2>
//             <p>HTML, CSS, JS, NODE, React</p>
//         </section>
//         )}

//         <section>
//             {/* "?" is a conditional operator in JS also called ternary operater it is the same as the if statement below*/}
//             {/* if (showEducation(true is silent because it was already true in the useState)){
//                 return Hide Education
//             } else {
//                 return Show Education
//             } */}
//             <button className='btn' onClick = {toggleEducation}>
//                 {showEducation ? "Hide Education": "Show Education"}
//             </button>
//             <button className='btn' onClick = {toggleExperience}>
//                 {showExperience ? "Hide Experience": "Show Experience"}
//             </button>
//             <button className='btn' onClick = {toggleSkills}>
//                 {showSkills ? "Hide Skills": "Show Skills"}
//             </button>

//         </section>
//     </div>

    
//   )
// }

// export default Resume