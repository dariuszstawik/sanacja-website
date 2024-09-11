const Hamburger = ({ hasCloseIcon, toggleMobileMenu }) => {
    return (
      <>
        {hasCloseIcon ? (
          <svg
            onClick={toggleMobileMenu}
            className="block w-8 my-4 lg:hidden"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        ) : (
          <svg
            onClick={toggleMobileMenu}
            className="block w-8 my-4 lg:hidden"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            ></path>
          </svg>
        )}
      </>
    );
  };
  export default Hamburger;