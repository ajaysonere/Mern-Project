import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const Updatepost = () => {
  const [formdata, setFormData] = useState({ title: "", desc: "" });
  const navigate = useNavigate();
  const { id } = useParams();

  const inputHandler = (e) => {
    setFormData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  useEffect(() => {
    const updatePost = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_REACT_APP_BASE_URL}/api/post/${id}`
        );
        console.log(response);
        if (!response.data) {
          console.log("post is not found by id");
        }

        setFormData({ title: response.data.title, desc: response.data.desc });
      } catch (error) {
        console.log(error);
      }
    };
    updatePost();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.patch(
        `${import.meta.env.VITE_REACT_APP_BASE_URL}/api/post/${id}`,
        formdata
      );

      if (response.status === 200) {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <div className="create-post">
        <div className="heading">
          <h2>Update Post</h2>
        </div>
        <div className="form__container">
          {formdata && (
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="title"
                name="title"
                value={formdata.title}
                onChange={inputHandler}
              />
              <input
                type="text"
                placeholder="Description here"
                name="desc"
                value={formdata.desc}
                onChange={inputHandler}
              />
              <button type="submit" className="btns submit__btn">
                Update Post
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Updatepost;
