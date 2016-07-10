var React = require('react');
var Nav = require('Nav');

// var Main = React.createClass({
//   render: function(){
//     return(
//       <div>
//         <h2>Main Component</h2>
//         <Nav/>
//         {this.props.children}
//       </div>
//     );
//   }
// });

var Main = (props) => {
  return(
    <div>

      <Nav/>
      <div className="row">
        <div className="columns medium-9 large-8 small-centered">
          {props.children}
        </div>
      </div>

    </div>
  )
};

module.exports = Main;
