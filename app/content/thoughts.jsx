var React = require('react');
var ReactCSSTransitionGroup = require('react/lib/ReactCSSTransitionGroup');

var Thoughts = React.createClass({
  render: function() {
    return (
      <div className="page">
        <ReactCSSTransitionGroup component="div" className="text-measure" transitionName='fade-in' transitionAppear={true}>
          <article className="art">
            <h1 className="intro">art</h1>
            <p>
              Sometimes I draw things, and I wonder if what I’ve drawn is art, or something else. Doodles? Scribbles? Drawings? There must be  something else I can call it besides <em>art</em>. I don’t know why I’m so adverse to that term when referencing my own work — I use it generously when referring to other people’s efforts. But, when it comes up, I don’t call myself an artist. I just say, <em>“I like to draw”</em>.
              </p>
            <p>
              Once or twice I’ve created something I consider  art. For instance, I was recently inspired to drip colored ink onto thin planks of Costa Rican hardwood and then put them on my wall. It’s wood with color on it, and it’s on my wall. For whatever reason, that combination makes it unquestionably art to me. Another time, I drew my mother’s favorite dog who had died of cancer the year before — it made her cry, and she said I’d saved a part of her best friend.
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
        </ReactCSSTransitionGroup>
      </div>
    );
  }
});

module.exports = Thoughts;