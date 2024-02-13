import { useState } from "react";
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const Createpost = () => {
  const [formdata, setFormData] = useState("");
  
  const navigate = useNavigate();

  const inputHandler = (e) => {
    setFormData((prev) => {
      return { ...prev, [e.target.name]:e.target.value };
    });
  };
  
  console.log(formdata);


  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
        const response = await axios.post(`${import.meta.env.VITE_REACT_APP_BASE_URL}/api/post`, formdata);
        
        if(response.status == 201){
           navigate("/");
        }
        
    } catch (error) {
        console.log(error);
    }
  }


  return (
    <div className="container">
      <div className="create-post">
        <div className="heading">
          <h2>Create Post</h2>
        </div>
        <div className="form__container">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="title"
              name="title"
              onChange={inputHandler}
            />
            <input
              type="text"
              placeholder="Description here"
              name="desc"
              onChange={inputHandler}
            />
            <button type="submit" className="btns submit__btn">
              Create Post
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Createpost;
