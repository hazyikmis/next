const Post = ({id}) => (
  <>
    <h1>POST PAGE</h1>
    <h3>You are looking at post #{id}</h3>
  </>
);

Post.getInitialProps = async({query}) => {
  return query;
}


export default Post;
//using getInitialProps chosen and withRouter hoc solution did not preferred here (check post1.js)
