import Link from "next/link";

//Link component causes to run the code load the page only CLIENT SIDE!
//https://www.udemy.com/course/modern-react-bootcamp/learn/lecture/14865353

const Index = () => (
  <div>
    {/* <Link href="/about"><a>About Page</a></Link> */}
    <Link href="/about"><button>About Page</button></Link>
    <Link href="/contact"><a>Contact Page</a></Link>
    <h1>Our Index Page !!!</h1>
  </div>
)

export default Index;