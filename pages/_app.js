// _app.js
import "../styles/global.scss";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <style global jsx>{`
        body {
          font-family: "Unbounded";
          margin: 0px;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          color: #ffffff;
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
};
export default MyApp;