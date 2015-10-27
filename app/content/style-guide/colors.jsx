var React = require('react');

var colorList = [
  {
    title: 'Reds',
    subcolors: [
      {
        href: '#',
        title: 'Light Red',
        class: 'light-red'
      }, {
        href: '#',
        title: 'Red',
        class: 'red'
      }, {
        href: '#',
        title: 'Dark Red',
        class: 'dark-red'
      }
    ]
  },
  {
    title: 'Grays',
    subcolors: [
      {
        href: '#',
        title: 'Lightester Gray',
        class: 'lightester-gray'
      }, {
        href: '#',
        title: 'Lightest Gray',
        class: 'lightest-gray'
      }, {
        href: '#',
        title: 'Lighter Gray',
        class: 'lighter-gray'
      }, {
        href: '#',
        title: 'Light Gray',
        class: 'light-gray'
      }, {
        href: '#',
        title: 'Gray',
        class: 'gray'
      }, {
        href: '#',
        title: 'Dark Gray',
        class: 'dark-gray'
      }
    ]
  }
];

var Colors = React.createClass({
  getDefaultProps: function () {
    return {
      config: colorList
    }
  },
  propTypes: {
    config: React.PropTypes.array
  },

  render: function () {
    var config = this.props.config;
    var items = config.map(function (item) {
      var subcolors, swatches;
      if (item.subcolors) {
        subcolors = item.subcolors.map(function (color) {
          return (
            <li className="color-variant" key={ color.title }>
              <p className="color-swatch-title">{ color.title }</p>
              <div className={"color-swatch " + color.class }>
                <p className="color-swatch-variable">${ color.class }</p>
              </div>
            </li>
          );
        });
        swatches = (
          <ul className="color-variants">
            { subcolors }
          </ul>
        );
      }
      return (
        <li className={"color-category " + item.title} key={ item.title }>
        <h3 className="color-category-name">{ item.title }</h3>
          { swatches }
        </li>
        );
    });

    return (
      <section className="guide-section colors">
        <h2 className="guide-section-title">Colors</h2>
        <div className="guide-section-demo">
          <ul className="colors">
            { items }
          </ul>
        </div>
      </section>
    );
  }
});

export default Colors;