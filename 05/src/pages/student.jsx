import { useParams } from "react-router-dom";

const Student = () => {
  const { studentid } = useParams();
  return <div>This is student page with {studentid} id</div>;
};

export default Student;
