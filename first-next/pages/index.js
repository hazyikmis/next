//import Navbar from "../components/Navbar";
import axios from "axios";
import Link from "next/link";

//const Index = () => (
const Index = ({ posts }) => (
  <div>
    {/* <Navbar />  --> moved to _app.js */}
    <h1>Our Index Page !!!</h1>
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <Link href={`/post?id=${post.id}`} as={`/p/${post.id}`}>
            <a>{post.title}</a>
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

//If you want to hide query string params or page/route names shown in the url-bar from the user
//you can use "as" props of the Link, but not much advised!
//<Link href={`/post?id=${post.id}`} as="doggie">...</Link>


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
