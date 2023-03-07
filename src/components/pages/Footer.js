import React from 'react';
//import '.../styles';

// By importing the Navbar.css file, it is added to the DOM whenever this component loads

// We can also style a component inside of its JavaScript file by adding style properties to its rendered elements
// Unlike regular HTML, a JSX style property must be an object instead of a string
// On a style object, we camelCase all property names, and put all of the values in quotes
// Non quoted values default to "pixels", e.g. height, margin, padding

const styles= {
  footerStyle:{ margin: 0,
 // padding: 0,
  boxsizing: 'border-box',
  background: '#24252A',
  display: 'flex',
  'flex-direction':'row',
  'justify-content': 'space-evenly',
  alignitems: 'center',
  padding: '30px 10%',
  },
};

const linkstyles={
  navlinkStyles:{
    fontfamily: 'Inter, sans-serif',
  fontweight: 500,
  fontsize: '16px',
  color: 'white',
  },
};


// We use JSX curly braces to evaluate the style object on the JSX tag

function Footer() {
  return (
    <nav style={styles.footerStyle} className="footer">
      <a style={linkstyles.navlinkStyles} href="https://www.linkedin.com/in/michael-escamilla/">LinkedIn</a>
      <a style={linkstyles.navlinkStyles} href="https://www.michael-escamilla.com/">In Depth</a>
      <a style={linkstyles.navlinkStyles} href="https://github.com/mescamilla1114?tab=repositories">github</a>
    </nav>
  );
}

export default Footer;
