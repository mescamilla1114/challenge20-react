import React from 'react';
//import '../styles/Section.css';

// By importing the Section.css file, it is added to the DOM whenever this component loads

// We can also style a component inside of its JavaScript file by adding style properties to its rendered elements
// Unlike regular HTML, a JSX style property must be an object instead of a string
// On a style object, we camelCase all property names, and put all of the values in quotes
// Non quoted values default to "pixels", e.g. height, margin, padding

const styles = {
  sectionStyles: {
    background: 'white',
  },
};

// We use JSX curly braces to evaluate the style object on the JSX tag

function Home() {
  return (
    <section style={styles.sectionStyles} className="section">
      <h2>About me</h2>
      <p>
      Behind the scenes, I live, love, and keep busy in Austin. It’s not just the city my family represents fiercely, but also our hometown. I’ve spent my life in this place - raised by hard working migrant parents, I found adventure, worked long days and nights downtown, pursued business ventures, and established my own family. Along the way, fulfillment has followed from connection with people of diverse backgrounds and overlapping their stories with mine.



In 2021, my story changed when my son, Salem, was born and spent 70 days in the NICU at St. David’s Main, where his life was truly saved. It was a time defined simultaneously by the all-consuming joy of new parenthood and the heartbreak of medical unknowns. This is an experience that will always remain a part of me. I now participate in parent panels and mentoring services through Hand to Hold, a nonprofit that provides support and resources to NICU families.



I’m a father, a husband, a son, a brother, a friend, and a citizen of the world. I’m a seeker of the small but magnificent things, and a champion of the bigger concepts aimed at today’s most pressing problems.



You can find me brainstorming and building my next project for good, losing my voice at an Austin FC soccer game, chasing our endlessly pesky toddler, cheering on my F1 team, and looking forward to that ever-elusive next quiet moment.



Let’s collaborate.



Cheers,



Michael
      </p>
    </section>
  );
}

export default Home;
