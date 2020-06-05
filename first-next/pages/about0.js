const AboutPage = () => {
  console.log("ABOUT PAGE RENDERED"); 
  //this run runs on the "node.js" side means on the server, NOT on the console of browser!
  //BUT, when I checked the browser console, I've seen there also. Strange!!!
  //And if you check from the ReactDevTools on the browser(F12), you'll see the components hierarchy
  //This situation definitely cause us to think about that: 
  //THIS CODE HERE WORKS BOTH IN THE SERVER AND IN THE CLIENT!!!
  //If this is the case, it means a problem.
  return <h1>THIS IS THE about PAGE!</h1>;
};
export default AboutPage;
