var React = require('react');

var WeatherForm = React. createClass({
  onFormSubmit: function (e) {
    e.preventDefault();

    var location = this.refs.location.value;

    if (location.length > 0) {
      this.refs.location.value = '';
      this.props.onSearch(location);
    }
  },

  render: function(){
    return(
      <div class="row">
        <div className="columns medium-8 large-8 small-centered">
          <form onSubmit= {this.onFormSubmit}>
            <input type='search' ref="location" placeholder="Search weather by city"></input>
            <button className="button expanded hollow">Get Weather</button>
          </form>
        </div>
      </div>
    )
  }
});

module.exports = WeatherForm;
