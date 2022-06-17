import axios from "axios";
import ProjectCard from "../components/ProjectCard";

const projects = ({ projectsData }) => {
  return (
    <div className="py-4 px-8 md:px-12 flex flex-col justify-between">
      <h1 className="text-4xl ml-3 mb-3">Projects</h1>
      <div className="flex flex-wrap">
        {projectsData?.map((proj) => (
          <ProjectCard key={proj.title} project={proj} />
        ))}
      </div>
    </div>
  );
};

export default projects;

export async function getStaticProps(context) {
  const { data } = await axios.get(process.env.JSON_DATA_URL);
  //   console.log(data);
  return {
    props: { projectsData: data },
  };
}
