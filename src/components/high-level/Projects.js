import './Projects.css';
import Project from './Project';
import photo1 from '../../img/1.jpeg';
import photo2 from '../../img/2.gif';
import photo3 from '../../img/3.gif';
import photo4 from '../../img/4.gif';
import photo5 from '../../img/5.jpg';



const Projects = () => {
    return (
        <div className='projects-main-container'>
            <h1 className='h1-text-projects'>Here You can find some of my great projects!</h1>
            <div className='project-container label-container'>
                <div className='project-preview'><div>Project Preview</div></div>
                <div className='project-client'><div>Client</div></div>
                <div className='project-technologies'><div>Technologies</div></div>
                <div className='project-description'><div>Description</div></div>
            </div>
            <Project preview={photo1} client={'An individual client'} technologies={'Python, , Flask, HTML, CSS, JS, SQL, AWS, Bootstrap, Git'} description={'A website that helps people find the best medical facilities in Canada and book doctor appointments at the right time in the right city!'}></Project>
            <Project preview={photo2} client={'Medical Organisation'} technologies={'REACT, HTML, CSS, JS, SQL, AWS, Bootstrap, MySQL, jQuery, Git'} description={'Mobile application, created with React Native, that helps people to invistigate mathernal situation in different African Countries (Kenya, Nigeria, South Africa).'}></Project>
            <Project preview={photo3} client={'An individual client'} technologies={'PHP, HTML, CSS, JS, SQL, Bootstrap, jQuery'} description={'Data Analisys tool, that allows predict values of city`s data up to 6 month ahead! You can just input previos data (as more as better) and you will have high accurate prediction with a Graph!'}></Project>
            <Project preview={photo4} client={'Private School'} technologies={'HTML, CSS, JS, Bootstrap, jQuery, Google Sheets, AppScript'} description={'I`ve created tool, that helps school workers manage data, add new lessons and for administration to work with finanse. There are UI Forms, formulas and many more)'}></Project>
            <Project preview={photo5} client={'An individual client'} technologies={'Python, Flask, HTML, CSS, JS, SQL, AWS, Bootstrap'} description={'Simple to use tool, that helps organise workers data, submit vacations, add new workers and their documents with system for the authentication.'}></Project>
        </div>
    )
}

export default Projects;