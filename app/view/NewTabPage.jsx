var React = require('react');

var NetworkStatus = require('./NetworkStatus.jsx');
var TopSites = require('./TopSites.jsx');
var Bookmarks = require('./Bookmarks.jsx');
var Footer = require('./Footer.jsx');

module.exports = React.createClass({
  render: function () {
    return (
      <div>
        <NetworkStatus />
        <TopSites />
        <Bookmarks />
        <Footer />
      </div>
    );
  }
});
