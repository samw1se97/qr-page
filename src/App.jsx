import { myProjects, mySkills } from './data/data';
import Separator from './components/Separator';
import CvBtn from './components/CvBtn';
import ProjectCard from './components/ProjectCard';
import List from './components/List';
function App() {
  // mySkills.map((skill) => console.log(skill));
  return (
    <>
      <main className='container'>
        <article style={{ textAlign: 'center' }}>
          <h1 className='text_shdw' style={{ fontSize: '2rem' }}>
            <span>Hi</span> i'm Sammy Miodownick
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
            asperiores voluptatem mollitia tempora eius minima, laudantium odio
            doloremque delectus ex magni accusantium in voluptas rem libero
            laboriosam dolor. Eos, eveniet!
          </p>
        </article>

        <Separator />

        <article className='stack_article'>
          <h2 className='text_shdw name'>My Stack</h2>
          <List list={mySkills} />
        </article>

        <Separator />

        <article>
          {/* <h2></h2> */}
          <h2 className='text_shdw name'>My Projects</h2>
          <div className='flex'>
            {myProjects &&
              myProjects.map((project) => <ProjectCard data={project} />)}
          </div>
        </article>

        <Separator />
        <CvBtn />
      </main>
    </>
  );
}

export default App;
