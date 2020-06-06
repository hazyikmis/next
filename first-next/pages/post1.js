import { withRouter } from "next/router";

const Post = (props) => (
  <>
    <h1>POST PAGE</h1>
    <h3>You are looking at post #{props.router.query.id}</h3>
  </>
);

export default withRouter(Post);
//withRouter hoc helps us to access query parameters
//check from the F12-Console-Components, Post component has "router" prop and
//under this props there are many data
