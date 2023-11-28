import Head from 'next/head';
import grid_2_image from "public/assets/images/grid_2.png";

const Layout = ({ children }) => {

  return (
    <>
      <Head>
      <title>Hire A Friend</title>
        <meta name="description" content="Checkout our cool page" key="desc" />
        <meta property="og:title" content="Social Title for Cool Page" />
        <meta
          property="og:description"
          content="And a social description for our cool page"
        />
        <meta
          property="og:image"
          content={NEXT_PUBLIC_STATIC_URL + "assets/images/grid_1.png"}
        />
      </Head>
      {children}
    </>
  );
};

export default Layout;
