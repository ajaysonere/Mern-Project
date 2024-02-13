import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

// eslint-disable-next-line react/prop-types
const Post = ({ id, title, desc }) => {
  const navigate = useNavigate();

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_REACT_APP_BASE_URL}/api/post/${id}`
      );
      if (response.status === 200) {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="post">
      <div className="content">
        <h3 className="title">{title}</h3>
        <p className="desc">{desc}</p>
      </div>
      <div className="buttons">
        <Link to={`/update-post/${id}`} className="btns update">
          update
        </Link>
        <Link to={"/"} className="btns danger" onClick={() => handleDelete(id)}>
          Delete
        </Link>
      </div>
    </div>
  );
};

export default Post;
