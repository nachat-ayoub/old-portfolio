import axios from "axios";
import ProjectCard from "../../components/ProjectCard";

const projects = ({ projects }) => {
  return (
    <div className="w-full py-4 px-8 md:px-10 flex flex-col">
      <h1 className="text-4xl ml-3 mb-3">Projects</h1>
      <div className="w-full grid gap-2 grid-cols-1 md:grid-cols-2">
        {projects?.map(({ id, attributes }) => {
          const proj = { id, ...attributes };
          return <ProjectCard key={proj.title} project={proj} />;
        })}
      </div>
    </div>
  );
};

export default projects;

export async function getStaticProps(context) {
  const {
    data: { data },
  } = await axios.get(process.env.API_URL + "/projects?populate=image");
  //   console.log(data);
  return {
    props: { projects: data },
    revalidate: 60 * 10,
  };
}
