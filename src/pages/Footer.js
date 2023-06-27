
const Footer = () => {
  const d = new Date();
  let year = d.toJSON();
  return (
    <>
      <div className="w3-container w3-bar w3-bottom w3-black">
        <h2 className="w3-small">Footer {year}</h2> 
      </div>
    </>
  );
};

export default Footer;
