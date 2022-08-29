import axios from "axios";
import StyledButton from "../../components/StyledButton";

const ProjectPage = ({ project }) => {
  return (
    <div className="p-4 md:px-16">
      <h1 className="text-2xl font-bold mb-2"> {project?.title} </h1>
      <p className=""> {project?.description} </p>
      <p className=""> {project?.publishedAt?.split("T")[0]} </p>
      <div
        className="html-content mt-12"
        dangerouslySetInnerHTML={{ __html: project?.content }}
      ></div>
      <div className="mt-10 flex justify-around items-center">
        <StyledButton blank href={project?.code_link}>
          Code Source
        </StyledButton>
        <StyledButton blank href={project?.preview_link}>
          Live Preview
        </StyledButton>
      </div>
    </div>
  );
};

export default ProjectPage;

export async function getStaticProps({ params: { slug } }) {
  const {
    data: {
      data: { id, attributes },
    },
  } = await axios.get(process.env.API_URL + "/projects/" + slug);

  const project = { id, ...attributes };

  return {
    props: { project },
    revalidate: 60 * 10,
  };
}

export const getStaticPaths = async () => {
  const {
    data: { data },
  } = await axios.get(process.env.API_URL + "/projects?populate=image");

  const paths = data.map(({ attributes: { slug } }) => ({ params: { slug } }));

  return {
    paths,
    fallback: true,
  };
};
