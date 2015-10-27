var React = require('react');
import { Link, RouteHandler, Routes } from 'react-router';
import VelocityTransitionGroup from 'VelocityTransitionGroup';
import 'velocity-animate/velocity.ui';
import socialLinkList from '../data/social_links.js';
import styles from '../styles/about.css';

var Bio = React.createClass({
  render: function() {
    return (
      <div className='about text-measure intro'>
        <h1>joshuar</h1>
        <p>AKA Josh, or Joshua Richey. A designer, front-end developer, artist,
          and visual craftsman living in Portland, Oregon, and working
          at <a href='http://idealist.org' target='_blank'>Idealist</a>.
          Beyond <Link  to='design' tabIndex='4'>design</Link>, he likes
          to <Link to='art' tabIndex='4'>draw</Link>,
          take <Link to='photography' tabIndex='6'>photographs</Link>, and sometimes
          write about his <Link to='words' tabIndex='7'>thoughts</Link>.
        </p>
      </div>
    );
  }
});

var SocialLinks = React.createClass({
  render: function() {
    var links = socialLinkList.map(function (l, i) {
      return (
        <li key={'link-' + i} className='social-link-item'>
          <a
            className={'social-link icon ' + l.class }
            href={l.url}
            rel='external'
            target='_blank'
          >
            <span className='social-link-text'>
              {l.title}
            </span>
          </a>
        </li>
      )
    });

    return (
      <ul className='social-links'>
        { links }
      </ul>
    );
  }
});

var Home = React.createClass({
  render: function() {
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
        <div className='page homeabout-page'>
          <Bio key='bio' />
          <SocialLinks key='socialLinks' />
        </div>
      </VelocityTransitionGroup>
    );
  }
});

module.exports = Home;