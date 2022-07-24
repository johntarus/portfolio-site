import Title from '../Common/Title';
import Project from './Project';
import data from '@/data/data.json';

const Projects = () => {
    return (
        <div id="work">
            <Title num={3} title="Some Things I’ve Built" />

            <div className="flex flex-col">
                {data.projects.map((project, i) => (
                    <Project key={i} project={project} />
                ))}
            </div>
        </div>
    );
};

export default Projects;
