import React from 'react';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul style={styles.navbarStyles}className="nav nav-tabs">
      <ul style={linkstyles.navlinkStyles}className="nav-item">
        MICHAEL ESCAMILLA
      </ul>
      
        <a style={linkstyles.navlinkStyles}
          href="#home"
          onClick={() => handlePageChange('Home')}
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </a>
     
        <a style={linkstyles.navlinkStyles}
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
          // Check to see if the currentPage is `portfolio`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </a>
     
    
        <a style={linkstyles.navlinkStyles}
          href="#resume"
          onClick={() => handlePageChange('Resume')}
          // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </a>
     
        <a style={linkstyles.navlinkStyles}
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      
    </ul>
  );
}

export default NavTabs;


const styles= {
  navbarStyles:{ margin: 0,
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