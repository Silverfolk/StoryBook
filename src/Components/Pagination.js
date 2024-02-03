// Pagination.js

import React from 'react';
import PropTypes from 'prop-types';

const Pagination = ({ currentPage, totalPages = 3, mode, backgroundColor = "white", color = "#3A57E8", onPageChange }) => {

  const style = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "5px",
   
  };

  const defaultButtonStyle = {
    backgroundColor,
    color,
    padding: "4px",
    border: "1px solid #DEE2E6",
    
  };
  const defaultButtonStyleLeft = {
    backgroundColor,
    color,
    padding: "4px",
    border: "1px solid #DEE2E6",
    borderRadius:"3px 0px 0px 3px"
    
  };
  const defaultButtonStyleRight = {
    backgroundColor,
    color,
    padding: "4px",
    border: "1px solid #DEE2E6",
    borderRadius:"0px 3px 3px 0px"
    
  };

  const selectedButtonStyle = {
    backgroundColor: "#3A57E8",
    color: "white",
    padding: "4px",
    border: "1px solid #DEE2E6",
  };

  const handleButtonClick = (pageNumber) => {
    onPageChange(pageNumber);
  };

  return (
    <div style={style}>
      {mode === "Previous" && (
        <div
          style={currentPage === 1 ? { ...defaultButtonStyleLeft, opacity: 0.5 } : defaultButtonStyleLeft}
          onClick={() => handleButtonClick(currentPage - 1)}
        >
          Previous
        </div>
      )}

      {mode === "Secondary" && (
        <div style={defaultButtonStyleLeft} onClick={() => handleButtonClick(1)}>
          {"<<"}
        </div>
      )}

      {Array.from({ length: totalPages }, (_, index) => (
        <div
          key={index + 1}
          style={currentPage === index + 1 ? selectedButtonStyle : defaultButtonStyle}
          onClick={() => handleButtonClick(index + 1)}
        >
          {index + 1}
        </div>
      ))}

      {mode === "Previous" && (
        <div
          style={currentPage === totalPages ? { ...defaultButtonStyleRight, opacity: 0.5 } : defaultButtonStyleRight}
          onClick={() => handleButtonClick(currentPage + 1)}
        >
          Next
        </div>
      )}

      {mode === "Secondary" && (
        <div style={defaultButtonStyleRight} onClick={() => handleButtonClick(totalPages)}>
          {">>"}
        </div>
      )}
    </div>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  mode: PropTypes.oneOf(["Previous", "Primary", "Secondary"]),
};

export default Pagination;
