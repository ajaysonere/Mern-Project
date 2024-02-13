import { useState, useEffect } from "react";
import Post from "../components/Post";
import axios from "axios";

const Posts = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_REACT_APP_BASE_URL}/api/post`
        );
        const dataPost = response?.data;
        setData(dataPost);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, [data]);

  return (
    <div className="container posts">
      {data.map(({ _id: id, title, desc }, index) => {
        return <Post id={id} key={index} title={title} desc={desc}></Post>;
      })}
    </div>
  );
};

export default Posts;
