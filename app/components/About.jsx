var React = require('react');

// var About = React. createClass({
//
//   render: function(){
//     return(
//
//     )
//   }
// });

var About = (props) => {
  return(
    <div>
      <h1 className="text-center page-title">About React Weather</h1>
      <p>Example React weather application that uses "openweathermap"</p>
      <p>Weather API is simple, clear and free.</p>

      <h3>Usage</h3>
      <p>Click the location text to show the location search input. Click anywhere on app itself to show an hourly breakdown of the weather for the next 24 hours.</p>

      <h3>Contributors</h3>
      <ul>
        <li>Juliana Leon</li>
      </ul>

      <h3>Here some of tools I use:</h3>
      <ul>
        <li><a href="https://facebook.github.io/react/">React (Javascript Framework)</a></li>
        <li><a href="http://openweathermap.org/api"></a>Openweathermap to setup the search weather</li>

      </ul>

    </div>
  )
};

module.exports = About;
