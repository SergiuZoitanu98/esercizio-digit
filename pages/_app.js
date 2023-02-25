import makeStore from "store";
import withRedux from "next-redux-wrapper";

import "@styles/global.scss";

function MyApp({ Component, pageProps }) {

  return (
    <>
      <Component {...pageProps}/>
    </>
    
  );
}

MyApp.getInitialProps = async ({ Component, ctx }) => {



  let pageProps = {};

  if (Component.getInitialProps) pageProps = await Component.getInitialProps(ctx);



  return { pageProps }

};
export default withRedux(makeStore)(MyApp);
