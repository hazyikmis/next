//import Navbar from "../components/Navbar";
import axios from "axios";

//const Index = () => (
const Index = ({ posts }) => (
  <div>
    {/* <Navbar />  --> moved to _app.js */}
    <h1>Our Index Page !!!</h1>
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  </div>
);

//this static "getInitialProps" works in the server-side at first
//and then the further routes to the same page causes that
//this static function runs on the only client side!
Index.getInitialProps = async () => {
  //console.log("FETCHING YOUR DATA INSIDE getInitialProps");
  //https://jsonplaceholder.typicode.com/posts
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  const { data } = res;
  //console.log(data[0]);

  //return { nothing: "" };  //dummy return
  //return { posts: data, mood: "HAPPY" };
  return { posts: data };
};

export default Index;

/*
If Index had been a class-based component then:
static async getInitialProps() {
  console.log("FETCHING YOUR DATA INSIDE getInitialProps");
}
*/
