// import { useState } from "react";

const Mainx = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <div style={styles.mainContainer}>
      <nav style={styles.navbar}>
        <h1 style={styles.navbarHeading}>fakebook</h1>
        <button style={styles.whiteBtn} onClick={handleLogout}>
          Logout
        </button>
      </nav>
    </div>
  );
};

const styles = {
  navbar: {
    width: "100%",
    height: "70px",
    backgroundColor: "#3bb19b",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  navbarHeading: {
    color: "white",
    fontSize: "25px",
    marginLeft: "20px",
  },
  mainContainer: {
    width: "100%",
    padding: "20px",
    backgroundColor: "#f5f5f5",
  },
  whiteBtn: {
    border: "none",
    outline: "none",
    padding: "12px 0",
    backgroundColor: "white",
    borderRadius: "20px",
    width: "120px",
    fontWeight: "bold",
    fontSize: "14px",
    cursor: "pointer",
    marginRight: "20px",
  },
};

export default Mainx;
