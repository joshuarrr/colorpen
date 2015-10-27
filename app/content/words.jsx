var React = require('react');
import VelocityTransitionGroup from 'VelocityTransitionGroup';
import 'velocity-animate/velocity.ui';
require('../styles/words.css');

var Words = React.createClass({

  componentDidMount: function() {
    // var banner = document.querySelector('.banner');
    // // change the image height on scroll
    // window.addEventListener("scroll", function(event) {
    //   var banner = document.querySelector('.banner');
    //   var top = this.scrollY;
    //   console.log('top = ' + top);
    //   var verticalScroll = document.querySelector(".page");
    //   // console.log('Scroll Y: ' + top + "px");
    //   var imgHeight = banner.clientHeight;
    //   console.log('imgHeight = ' + imgHeight);
    //   var i = top * .1;
    //   console.log('i = ' + i);
    //   var computedHeight = imgHeight - (top * .8);
    //   console.log('computedHeight = ' + computedHeight);
    //   banner.style.height = computedHeight + 'px';
    // }, false);
  },

  render: function() {
    var url = require("file!../img/content/lines.jpg");
    return (
      <VelocityTransitionGroup
        appear="transition.fadeIn"
        enter="transition.fadeIn"
        leave="transition.fadeOut"
        defaults={{
          duration: 2000,
          delay: 0
        }}
      >
        <div className="page" ref="page">
          <h1 className="intro">art</h1>
          <article key="words" className="words text-measure">
            <picture className="banner">
              <img src={url} alt="A drawing of some lines." />
            </picture>
            <p>
              Sometimes I draw things, and I wonder if what I’ve drawn is art, or something else. Doodles? Scribbles? Drawings? There must be  something else I can call it besides <em>art</em>. I don’t know why I’m so adverse to that term when referencing my own work — I use it generously when referring to other people’s efforts. But, when it comes up, I don’t call myself an artist. I just say, <em>“I like to draw”</em>.
            </p>
            <p>
              Once or twice I’ve created something I consider  art. For instance, I was recently inspired to drip colored ink onto thin planks of Costa Rican hardwood and then put them on my wall. It’s wood with color on it, and it’s on my wall. For whatever reason, that combination makes it unquestionably art to me.
            </p>
            <p>
              But most of the time when I make drawings, I reflect upon them perplexedly. “<em>Hmmm. Is this art? It must not be <strong>art</strong>. What is this?</em>” I think it happens because the word <em>art</em> has such lofty cultural connotations and expectations. <em>Art</em> belongs in galleries. <em>Art</em> is expensive. It’s perfect. <em>Art</em> is made by <em>artists</em>, who are geniuses — glorious shooting stars who can barely keep their amazing visions in. That’s not me. I just like to draw. This is just some paper with some scratchy lines placed on it imperfectly. Some of the lines cross unintentionally. It’s definitely imperfect. It’s definitely not <em>art</em>.
            </p>
            <p>
              I hate that aspect of art. I hate the exclusivity and the preclusion it generates. Art that is revered in galleries is wonderful for what it is: expressive creations, typically fashioned by master craftspeople. And there’s nothing wrong with idolizing the pinnacle of our talents. Amazing works should be shared and studied.
            </p>

            <p>But to me, in its ideal state, art is simply an expression of creativity. Creativity is the implementation of imagination. And imagination thrives only  when free of social constructs such as value.
            </p>
            <p><em>— j, July 19, 2015</em></p>
            <hr className="section-break" />
          </article>
        </div>
      </VelocityTransitionGroup>
    );
  }
});

module.exports = Words;