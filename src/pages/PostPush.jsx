import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PostPush = () => {
  const [postData, setPostData] = useState({ title: "", body: "" });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setPostData({ ...postData, [e.target.name]: e.target.value });
  };

  const handlePostRequest = async () => {
    try {
      const response = await axios.post('https://dummyjson.com/posts/', postData);
      console.log('Ответ на POST-запрос:', response.data);
      navigate('/posts');
    } catch (error) {
      console.error('Ошибка при выполнении POST-запроса:', error);
    }
  };

  console.log(postData);
  
  return (   
    <div>
      <h1>Create Post</h1>
      <label>Title: </label>
      <input type="text" name="title" value={postData.title} onChange={handleInputChange} />
      <br />
      <label>Body: </label>
      <textarea name="body" value={postData.body} onChange={handleInputChange} />
      <br />
      <button onClick={handlePostRequest}>Create Post</button>
    </div>
  );
};

export default PostPush;








// import { useState } from "react"
// import axios from "axios"
// import PostPage from "./PostPage";
// const PostPush = () => {
//   const [postData, setPostData] = useState("");


//   const inp = (e) => {
//     if (e.value.trim() !== "") {
//       setPostData(e.value)
//     }else{
//       alert("Please enter text")
//     }
//   }
//   const handlePostRequest = async () => {
//     try {
//       const response = await axios.post('https://dummyjson.com/docs/posts', postData);
//       console.log('Ответ на POST-запрос:', response.data);
//     } catch (error) {
//       console.error('Ошибка при выполнении POST-запроса:', error);
//     }
//   };

//   return (
//     <div>
//       <h1>post push</h1>
//       <button onClick={handlePostRequest}>POST-запрос</button>
//       <input  onChange={inp} />      {}
//       <PostPage setPostData={setPostData} />
//     </div>
//   );
// }

// export default PostPush;
