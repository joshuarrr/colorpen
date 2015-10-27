var React = require('react');

var Typography = React.createClass({
  render: function() {
    return (
      <section className="guide-section typography">
        <h2 className="guide-section-title">Typography</h2>
          <section className='font-stack serif'>
            <dl className="font-list">
              <dt>Serif Font:</dt>
              <dd>font-family: 'EB Garamond', serif;</dd>
              <dd>@mixin serif-font;</dd>
            </dl>
            <section className="type-sample">
              <h1>Heading 1 with a <a href="#">link</a></h1>
              <h2>Heading 2 with a <a href="#">link</a></h2>
              <h3>Heading 3 with a <a href="#">link</a></h3>
              <h4>Heading 4 with a <a href="#">link</a></h4>
              <h5>Heading 5 with a <a href="#">link</a></h5>
              <h6>Heading 6 with a <a href="#">link</a></h6>
              <p>Dark spruce forest frowned on either side of the frozen waterway. The trees had been stripped by a recent wind of their white covering of frost, and they seemed to lean toward each other, black and ominous, in the fading light. A vast silence reigned over the land. The land itself was a desolation, lifeless, without movement, so lone and cold that the spirit of it was not even that of sadness. There was a hint in it of laughter, but of a laughter more terrible than any sadness — a laughter that was mirthless as the smile of the Sphinx, a laughter cold as the frost and partaking of the grimness of infallibility. It was the masterful and incommunicable wisdom of eternity laughing at the futility of life and the effort of life. It was the Wild, the savage, frozen-hearted Northland Wild.
                <br /><em>—Jack London (White Fang)</em></p>
            </section>
          </section>
          <section className='font-stack mono'>
            <dl className="font-list">
              <dt>Monospaced Font:</dt>
              <dd>font-family: 'Fira Mono', monospace, sans-serif;</dd>
              <dd>@mixin mono-font;</dd>
            </dl>
            <section className="type-sample">
              <h1>Heading 1 with a <a href="#">link</a></h1>
              <h2>Heading 2 with a <a href="#">link</a></h2>
              <h3>Heading 3 with a <a href="#">link</a></h3>
              <h4>Heading 4 with a <a href="#">link</a></h4>
              <h5>Heading 5 with a <a href="#">link</a></h5>
              <h6>Heading 6 with a <a href="#">link</a></h6>
              <p>Hand-clapping and pleased cries from the gods greeted the performance. He was surprised, and looked at them in a puzzled way. Then his weakness asserted itself, and he lay down, his ears cocked, his head on one side, as he watched the puppy. The other puppies came sprawling toward him, to Collie's great disgust; and he gravely permitted them to clamber and tumble over him. At first, amid the applause of the gods, he betrayed a trifle of his old self-consciousness and awkwardness. This passed away as the puppies' antics and mauling continued, and he lay with half-shut, patient eyes, drowsing in the sun.
                <br /><em>—Jack London (White Fang)</em></p>
            </section>
          </section>
      </section>
    );
  }
});

export default Typography;