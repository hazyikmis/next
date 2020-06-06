//const Post = ({ postId }) => {
const Post = (props) => {
  return (
    <div>
      <h1>POST PAGE</h1>
      {/* <h3>You are looking at post # {postId}</h3> */}
      <h3>You are looking at post # {props.id}</h3>
    </div>
  );
};

//getInitialProps used for getting query string as object and access the query parameters
Post.getInitialProps = async ({ query }) => {
  //console.log(query); //--> {id: "2"}
  //return { postId: query.id };
  return query;
};

export default Post;

/*
getInitialProps receives a single argument called context, it's an object with the following properties:
>pathname - Current route. That is the path of the page in /pages
>query - Query string section of URL parsed as an object
>asPath - String of the actual path (including the query) shown in the browser
>req - HTTP request object (server only)
>res - HTTP response object (server only)
>err - Error object if any error is encountered during the rendering

https://nextjs.org/docs/api-reference/data-fetching/getInitialProps
*/
