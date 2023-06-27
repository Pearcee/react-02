
const Footer = () => {
  const d = new Date();
  let year = d.toJSON();
  return (
    <>
      <div className="w3-bar w3-bottom w3-black">
        <h1>Footer </h1> 
        <h2>{year}</h2>
      </div>
    </>
  );
};

export default Footer;
