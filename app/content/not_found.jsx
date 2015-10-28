var React = require('react');


var NotFound = React.createClass({
  render: function() {
    return (
      <div className="not-found page text-measure intro">
        <h1>lost</h1>
        <section key="not-found">
          <p>Sorry, there’s nothing here to be found.</p>
        </section>
      </div>
    );
  }
});

export default NotFound;