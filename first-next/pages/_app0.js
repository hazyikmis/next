//ORIGINALLY THIS FILE COPIED FROM AND PASTED INTO HERE.
//IN EVERY ROUTE, ALL PAGES/ROUTES RENDERED INSIDE THIS MyApp Component
//Means, this is a wrapper class / hoc for all pages. So its a beautiful place to
//put Navbar, footer etc inside here and think this component as a LAYOUT for all pages/routes

//import App, { Container } from "next/app";

function MyApp({ Component, pageProps }) {
  //return <Component {...pageProps} />
  return (
    //<Container>
    <div>
      <p>I AM FROM THE _app.js !!!</p>
      <Component {...pageProps} />
    </div>
    //</Container>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
