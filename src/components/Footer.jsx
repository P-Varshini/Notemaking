const react = require("react");

function Footer() {
  const currYear = new Date().getFullYear();
  return (
    <footer>
      <p>Application Build By Varshini</p>
      <p>Copyright @ {currYear} </p>
    </footer>
  );
}

export default Footer;
