import '../high-level/Projects.css';

const Project = ({preview, client, technologies, description, type}) => {
    return (
        <div className='project-container'>
            {type !== 'label' &&( <div className='project-preview'>
                <img src={preview} />
            </div>)}
            
            <div className='project-client'><div>{client}</div></div>
            <div className='project-technologies'><div>{technologies}</div></div>
            <div className='project-description'><div>{description}</div></div>
            
        </div>
    )
}

export default Project;