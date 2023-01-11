
const ProjectTile = (props) => {

    return(
        <div id='project-tile'>
            <div id='project-tile-name'>
                {props.name || 'MW Show Tracker'}
            </div>
            <div id='project-tile-inner'>
             
            </div>
        </div>
    )
}
export default ProjectTile