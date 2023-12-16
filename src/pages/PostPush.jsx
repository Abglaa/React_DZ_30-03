import { useState } from "react"
import axios from "axios"
import PostPage from "./PostPage";
const PostPush = () => {
  const [postData, setPostData] = useState("");


  const inp = (e) => {
    if (e.value.trim() !== "") {
      setPostData(e.value)
    }else{
      alert("Please enter text")
    }
  }
  const handlePostRequest = async () => {
    try {
      const response = await axios.post('https://dummyjson.com/docs/posts', postData);
      console.log('Ответ на POST-запрос:', response.data);
    } catch (error) {
      console.error('Ошибка при выполнении POST-запроса:', error);
    }
  };

  return (
    <div>
      <h1>post push</h1>
      <button onClick={handlePostRequest}>POST-запрос</button>
      <input  onChange={inp} />      {}
      <PostPage setPostData={setPostData} />
    </div>
  );
}

export default PostPush;
