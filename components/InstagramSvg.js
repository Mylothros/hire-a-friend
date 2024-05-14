import { useState, useEffect } from "react";

const Instagram = () => {
  const [windowWidth, setWindowWidth] = useState();
  useEffect(() => {
    setWindowWidth(window.innerWidth);
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
    }
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  return (
    <a
      href="https://www.instagram.com/hirea.friend/"
      target="_blank"
      rel="noopener noreferrer"
      name="Instagram button"
      aria-label="Button to go to Instagram page of Hire A Friend"
    >
      <svg
        style={{
          float: "right",
          marginRight: windowWidth <= 800 ? "0px" : "30px",
        }}
        xmlns="http://www.w3.org/2000/svg"
        width="46"
        height="47"
        viewBox="0 0 46 47"
        fill="none"
      >
        <path
          d="M15.0336 4.72461H31.0666C37.1743 4.72461 42.1369 9.68718 42.1369 15.795V31.8279C42.1369 34.7639 40.9706 37.5797 38.8945 39.6558C36.8184 41.7319 34.0026 42.8982 31.0666 42.8982H15.0336C8.92587 42.8982 3.9633 37.9356 3.9633 31.8279V15.795C3.9633 12.8589 5.12964 10.0431 7.20573 7.96704C9.28182 5.89095 12.0976 4.72461 15.0336 4.72461ZM14.6519 8.54197C12.8295 8.54197 11.0818 9.2659 9.7932 10.5545C8.5046 11.8431 7.78066 13.5908 7.78066 15.4132V32.2096C7.78066 36.0079 10.8536 39.0808 14.6519 39.0808H31.4483C33.2707 39.0808 35.0184 38.3569 36.307 37.0683C37.5956 35.7797 38.3195 34.032 38.3195 32.2096V15.4132C38.3195 11.6149 35.2466 8.54197 31.4483 8.54197H14.6519ZM33.0707 11.405C33.7034 11.405 34.3103 11.6564 34.7577 12.1038C35.2052 12.5512 35.4565 13.1581 35.4565 13.7908C35.4565 14.4236 35.2052 15.0305 34.7577 15.4779C34.3103 15.9253 33.7034 16.1767 33.0707 16.1767C32.4379 16.1767 31.831 15.9253 31.3836 15.4779C30.9362 15.0305 30.6848 14.4236 30.6848 13.7908C30.6848 13.1581 30.9362 12.5512 31.3836 12.1038C31.831 11.6564 32.4379 11.405 33.0707 11.405ZM23.0501 14.268C25.5812 14.268 28.0086 15.2735 29.7983 17.0632C31.588 18.8529 32.5935 21.2803 32.5935 23.8114C32.5935 26.3425 31.588 28.7699 29.7983 30.5596C28.0086 32.3493 25.5812 33.3548 23.0501 33.3548C20.519 33.3548 18.0916 32.3493 16.3019 30.5596C14.5122 28.7699 13.5067 26.3425 13.5067 23.8114C13.5067 21.2803 14.5122 18.8529 16.3019 17.0632C18.0916 15.2735 20.519 14.268 23.0501 14.268ZM23.0501 18.0854C21.5315 18.0854 20.075 18.6886 19.0012 19.7625C17.9273 20.8363 17.3241 22.2928 17.3241 23.8114C17.3241 25.33 17.9273 26.7865 19.0012 27.8603C20.075 28.9342 21.5315 29.5374 23.0501 29.5374C24.5687 29.5374 26.0252 28.9342 27.099 27.8603C28.1729 26.7865 28.7761 25.33 28.7761 23.8114C28.7761 22.2928 28.1729 20.8363 27.099 19.7625C26.0252 18.6886 24.5687 18.0854 23.0501 18.0854Z"
          fill="#BE3455"
        />
      </svg>
    </a>
  );
};
export default Instagram;