import axios from "axios";

const Post = ({ id, comments }) => (
  <>
    <h1>POST PAGE</h1>
    <h3>See below the comments for post #{id}</h3>
    {comments.map((comment) => (
      // <ul>
      //   <li key={comment.id}>{comment.name}</li>
      // </ul>
      <Comment {...comment} key={comment.id} />
    ))}
  </>
);

//This tiny component below might be moved under the "components" folder and import here from there
const Comment = ({ email, name, body }) => (
  <div>
    <span>
      <h4>
        <strong>{email}</strong>
      </h4>
      <h5>{name}</h5>
    </span>
    <p>{body}</p>
  </div>
);

Post.getInitialProps = async ({ query }) => {
  //return query;
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/comments?postId=${query.id}`
  );
  //return { id: query.id, comments: res.data };
  const { data } = res;
  return { ...query, comments: data };
  //using ""...query", rather than "id: query.id" is better because, if there is another
  //query parameter added to the query string, then it will automatically send as props
  //to the Post component. For example: "post?id=26" now, but might be "post?id=26&color=red"
};

export default Post;
//using getInitialProps chosen and withRouter hoc solution did not preferred here (check post1.js)
