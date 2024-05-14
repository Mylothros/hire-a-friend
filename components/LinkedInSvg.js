import { useState, useEffect } from "react";

const LinkedIn = () => {
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
      href="https://www.linkedin.com/in/hire-afriend-b5088a293/"
      target="_blank"
      rel="noopener noreferrer"
      name="LinkedIn button"
      aria-label="Button to go to LinkedIn page of Hire A Friend"
    >
      <svg
        style={{
          float: "right",
          marginRight: windowWidth <= 800 ? "30px" : "200px",
        }}
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="47"
        viewBox="0 0 48 47"
        fill="none"
      >
        <path
          d="M39.576 4.72461C40.7331 4.72461 41.8428 5.17148 42.6609 5.96692C43.4791 6.76236 43.9387 7.8412 43.9387 8.96612V38.6567C43.9387 39.7816 43.4791 40.8605 42.6609 41.6559C41.8428 42.4513 40.7331 42.8982 39.576 42.8982H9.03715C7.88009 42.8982 6.77042 42.4513 5.95226 41.6559C5.13409 40.8605 4.67445 39.7816 4.67445 38.6567V8.96612C4.67445 7.8412 5.13409 6.76236 5.95226 5.96692C6.77042 5.17148 7.88009 4.72461 9.03715 4.72461H39.576ZM38.4854 37.5963V26.3563C38.4854 24.5227 37.7361 22.7642 36.4025 21.4676C35.0689 20.1711 33.2602 19.4426 31.3742 19.4426C29.52 19.4426 27.3605 20.5454 26.3134 22.1996V19.8456H20.2275V37.5963H26.3134V27.141C26.3134 25.508 27.6659 24.1719 29.3455 24.1719C30.1554 24.1719 30.9322 24.4847 31.5049 25.0416C32.0776 25.5984 32.3994 26.3535 32.3994 27.141V37.5963H38.4854ZM13.1381 16.516C14.11 16.516 15.0421 16.1406 15.7294 15.4725C16.4167 14.8043 16.8028 13.8981 16.8028 12.9531C16.8028 10.9808 15.1667 9.36906 13.1381 9.36906C12.1604 9.36906 11.2227 9.74667 10.5314 10.4188C9.84 11.091 9.45161 12.0026 9.45161 12.9531C9.45161 14.9254 11.1094 16.516 13.1381 16.516ZM16.1702 37.5963V19.8456H10.1278V37.5963H16.1702Z"
          fill="#BE3455"
        />
      </svg>
    </a>
  );
};
export default LinkedIn;