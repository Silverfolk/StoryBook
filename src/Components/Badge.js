import PropTypes from 'prop-types';

function Badge({label, backgroundColor = "#3A57E8",fsize}) {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'row', // Horizontal row
    alignItems: 'center', // Align items vertically in the center
    fontFamily: "Inter, sans-serif",
   
  };

  const exampleStyle = {
    marginRight: '10px', // Add spacing between heading and button
    fontWeight: 500,
    fontSize: `${fsize}px`
  };

  const buttonStyle = {
    backgroundColor,
    color: 'white',
    padding: '8px',
    borderRadius: '5px',
    fontWeight: 700
  };

  return (
    <div style={containerStyle}>
      <h1 style={{ ...exampleStyle }}>{label}</h1>
      <div style={{ ...buttonStyle }}>New</div>
    </div>
  );
}

Badge.propTypes = {
    label: PropTypes.string,
    backgroundColor: PropTypes.string,
    w: PropTypes.number,
    h: PropTypes.number,
    fsize: PropTypes.number
};

export default Badge;
