import React from 'react';
//import '../styles/Section.css';

// By importing the Section.css file, it is added to the DOM whenever this component loads

// We can also style a component inside of its JavaScript file by adding style properties to its rendered elements
// Unlike regular HTML, a JSX style property must be an object instead of a string
// On a style object, we camelCase all property names, and put all of the values in quotes
// Non quoted values default to "pixels", e.g. height, margin, padding

const styles= {
  sectionStyles:{ margin: 0,
 // padding: 0,
  boxsizing: 'border-box',
  background: '#ffffff',
  display: 'flex-wrap',
  'flex-direction':'row',
  'justify-content': 'space-evenly',
  alignitems: 'center',
  padding: '30px 10%',

  },
};

const cardstyle={
  cardStyles:{
    width: '90%',
    margin: '1rem',
    'padding-bottom': '1rem',
    'background-color': '#eaeae8',
    'text-align': 'center',
    border: 'solid 2px #232323',
    'border-radius': '10px',
    'box-shadow': '0px 1px 2px rgba(0, 0, 0, 0.5)'
  }
}

// We use JSX curly braces to evaluate the style object on the JSX tag

function Portfolio() {
  return (
    <section style={styles.sectionStyles} className="section">
      <h1>Portfolio</h1>
      <div style={cardstyle.cardStyles}>
        <h3>Day Scheduler</h3>
        <a href='https://github.com/mescamilla1114/challenge5-day-scheduler'>Github</a>
        <br></br><br></br>
        <a href='https://mescamilla1114.github.io/challenge5-day-scheduler/'>Live</a>
      </div>
      <div style={cardstyle.cardStyles}>
        <h3>ReadME Maker</h3>
        <a href='https://github.com/mescamilla1114/challenge9-readmemaker'>Github</a>
        <br></br><br></br>
        <a href='https://watch.screencastify.com/v/odzNqCyYx0O0R7LKeLTq'>Live</a>
      </div>
      <div style={cardstyle.cardStyles}>
        <h3>Note Saver</h3>
        <a href='https://github.com/mescamilla1114/challenge-11-notetaker'>Github</a>
        <br></br><br></br>
        <a href='https://challenge-11.herokuapp.com/'>Live</a>
      </div>
      <div style={cardstyle.cardStyles}>
        <h3>Blog Posts</h3>
        <a href='https://github.com/mescamilla1114/challenge14-blogs'>Github</a>
        <br></br><br></br>
        <a href='https://challenge-14-mescamilla1114.herokuapp.com/'>Live</a>
      </div>
      <div style={cardstyle.cardStyles}>
        <h3>PWA</h3>
        <a href='https://github.com/mescamilla1114/challenge19-indexeddb'>Github</a>
        <br></br><br></br>
        <a href='https://challenge19-jate.herokuapp.com/'>Live</a>
      </div>
      <div style={cardstyle.cardStyles}>
        <h3>Trivia Tarcker</h3>
        <a href='https://github.com/MZernick/Trivia-Tracker'>Github</a>
        <br></br><br></br>
        <a href='https://trivia-tracker.herokuapp.com/'>Live</a>
      </div>
    </section>
  );
}

export default Portfolio;