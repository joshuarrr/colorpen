var React = require('react');
import { Link, RouteHandler } from 'react-router';
import VelocityTransitionGroup from 'VelocityTransitionGroup';
var Velocity = require('velocity-animate/velocity');
require('velocity-animate/velocity.ui');
import ResponsiveContainer from '../components/ResponsiveContainer'
import ResponsiveImage from '../components/ResponsiveImage'
import projectList from '../data/design.js';
import styles from '../styles/design.css';


var EtcProjects = React.createClass({
  render: function() {
    var thisProject = this.props.index;

    if (projectList[thisProject].etcetera) {
      var etcProject = projectList[thisProject].etcetera;

      var etcProjects = etcProject.map(function (p, i) {
        return (
          <EtcProject
            key={ 'project-' + i }
            class={ p.class }
            title={ p.title }
            description={ p.description }
            role={ p.role }
            tech={ p.tech }
            src={ p.file }
            id={ p.id }
            index={ i }
          />
        )
      });
    }

    return (
      <div className='etc-projects-wrap'>
        <h3 className='sub-project-title'>{ this.props.etcTitle}</h3>
        <div className='etc-projects text-measure'>
          { etcProjects }
        </div>
      </div>
    );
  }
});


var EtcProject = React.createClass({
  getInitialState: function() {
    return { expanded: false };
  },

  handleClick: function() {
    this.setState({ expanded: !this.state.expanded });
  },

  hasRoleOrTech() {
    var role = this.props.role;
    var tech = this.props.tech;
    var index = this.props.index;

    function hasRole() {
      if (role) {
        return [
          (<dt key={'sub-role-dt-' + index}>Role:</dt>),
          (<dd key={'sub-role-dd-' + index}>{ role }</dd>)
        ];
      }
    }

    function hasTech() {
      if (tech) {
        return [
          (<dt key={'sub-tech-dt-' + index}>Tech:</dt>),
          (<dd key={'sub-tech-dd-' + index}>{ tech }</dd>)
        ];
      }
    }

    if (role || tech) {
      return (
        <dl>
          { hasRole() }
          { hasTech() }
        </dl>
      );
    }
  },

  render: function() {
    var projectClass = this.state.expanded ? ' expanded' : '';
    var isMoblie = this.props.class === 'mobile' ? ' mobile' : '';

    return (
      <div className="etc-project">
          <h3 className='etc-project-title'>
            { this.props.title }
          </h3>
        <div className='etc-project-details'>
          <span
            className='etc-project-description'
            dangerouslySetInnerHTML={{__html: this.props.description}}
          />
          { this.hasRoleOrTech() }
        </div>
        <Link
          to={ '/design#' + this.props.id }
          className='img-link'
          onClick={ self.handleClick }
        >
          <ResponsiveContainer class={isMoblie}>
            <ResponsiveImage
              class={ 'img-wrap ' + this.props.class + projectClass + ' img-' + this.props.index}
              src={ this.props.src }
            />
          </ResponsiveContainer>
        </Link>
      </div>
    );
  }
});








var SubProject = React.createClass({
  getInitialState: function() {
    return { expanded: false };
  },

  handleClick: function() {
    this.setState({ expanded: !this.state.expanded });
  },

  hasRoleOrTech() {
    var role = this.props.role;
    var tech = this.props.tech;
    var index = this.props.index;

    function hasRole() {
      if (role) {
        return [
          (<dt key={'sub-role-dt-' + index}>Role:</dt>),
          (<dd key={'sub-role-dd-' + index}>{ role }</dd>)
        ];
      }
    }

    function hasTech() {
      if (tech) {
        return [
          (<dt key={'sub-tech-dt-' + index}>Tech:</dt>),
          (<dd key={'sub-tech-dd-' + index}>{ tech }</dd>)
        ];
      }
    }

    if (role || tech) {
      return (
        <dl>
          { hasRole() }
          { hasTech() }
        </dl>
      );
    }
  },

  render: function() {
    var projectClass = this.state.expanded ? ' expanded' : '';
    var isMoblie = this.props.class === 'mobile' ? ' mobile' : '';

    return (
      <div className="sub-project">
          <h3 className='sub-project-title'>
            { this.props.title }
          </h3>
        <div className='sub-project-details'>
          <span
            className='sub-project-description'
            dangerouslySetInnerHTML={{__html: this.props.description}}
          />
          { this.hasRoleOrTech() }
        </div>
        <Link
          to={ '/design#' + this.props.id }
          className='img-link'
          onClick={ self.handleClick }
        >
          <ResponsiveContainer class={ isMoblie }>
            <ResponsiveImage
              class={ 'img-wrap ' + this.props.class + projectClass + ' img-' + this.props.index}
              src={ this.props.src }
            />
          </ResponsiveContainer>
        </Link>
      </div>
    );
  }
});


var SubProjects = React.createClass({
  render: function() {
    var thisProject = this.props.index;

    if (projectList[thisProject].subprojects) {
      var subProject = projectList[thisProject].subprojects;

      var subProjects = subProject.map(function (p, i) {
        return (
          <SubProject
            key={ 'project-' + i }
            class={ p.class }
            title={ p.title }
            description={ p.description }
            role={ p.role }
            tech={ p.tech }
            src={ p.file }
            id={ p.id }
            index={ i }
          />
        )
      });
    }

    return (
      <div className="sub-projects text-measure">
        { subProjects }
      </div>
    );
  }
});


var ProjectDetails = React.createClass({
  getInitialState: function() {
    return { mounted: false };
  },

  componentDidMount: function() {
    this.setState({ mounted: true });
  },

  hasRoleOrTech() {
    var role = this.props.role;
    var tech = this.props.tech;
    var index = this.props.index;

    function hasRole() {
      if (role) {
        return [
          (<dt key={'role-dt--' + index}>Role:</dt>),
          (<dd key={'role-dd--' + index}>{ role }</dd>)
        ];
      }
    }

    function hasTech() {
      if (tech) {
        return [
          (<dt key={'tech-dt-' + index}>Tech:</dt>),
          (<dd key={'tech-dd-' + index}>{ tech }</dd>)
        ];
      }
    }

    if (role || tech) {
      return (
        <dl>
          { hasRole() }
          { hasTech() }
        </dl>
      );
    }
  },

  render: function() {
    var loadingClass = this.state.mounted ? '' : ' loading';
    var index = store.expandedProjectId;
    var p = projectList[index];

    return (
      <VelocityTransitionGroup
        className="expanded-project-details"
        appear='transition.slideDownBigIn'
        enter='transition.slideDownBigIn'
        enterOptions={{ delay: 300, duration: 500 }}
        leave='transition.slideUpBigOut'
        leaveOptions={{ delay: 0, duration: 400 }}
      >
        {
          this.props.expanded &&
          <div className='project-details-wrap'>
            <div
              className={ 'project-description text-measure' + loadingClass }>
              <span
                dangerouslySetInnerHTML={{__html: this.props.description}}
              />
              { this.hasRoleOrTech() }
              <SubProjects index={this.props.index} />
              <EtcProjects index={this.props.index} etcTitle={this.props.etcTitle} />
            </div>
          </div>
        }
      </VelocityTransitionGroup>
    );
  }
});


var Project = React.createClass({
  getInitialState: function() {
    return {
      expanded: false,
      updated: false,
      imageHeight: ''
    };
  },

  componentDidUpdate: function() {
    this.getDOMNode().addEventListener('transitionend', this.updateImg, false);
  },

  handleClick() {
    this.setState({ expanded: !this.state.expanded });
  },

  updateImg() {

    // render the duplicate the image
    this.setState({
      updated: true
    });

    var img = React.findDOMNode(this.refs.imgContainer);

    // Set a min height on the imagewrapper
    this.setState({
      imageHeight: img.offsetHeight
    });
  },

  render: function() {
    var self = this;
    var projectClass = this.state.expanded ? ' expanded' : '';

    return (
      <div className='project-wrap'>
        <div className={'project' + projectClass} ref='project'>
          <h2 className='project-title'>
            { this.props.title }
          </h2>
          <Link
            to={ '/design#' + this.props.id }
            className='img-link'
            onClick={ self.handleClick }
            ref='imgLink'
            style={{ minHeight: this.state.imageHeight }}
          >
            <ResponsiveContainer
              class={ 'rc rc-' + this.props.index + ' ' }
              key={'rc-' + this.props.index}
              ref='imgContainer'
            >
              <ResponsiveImage
                class={ 'img-wrap ' + this.props.class + ' ' + projectClass + ' img-' + this.props.index}
                src={ this.props.src }
              />
            </ResponsiveContainer>

            {
              this.state.updated &&
              <ResponsiveContainer
                class={ 'expanded rc rc-' + this.props.index + ' ' }
                key={'big-rc-' + this.props.index}
                ref='bigImgContainer'
              >
                <ResponsiveImage
                  class={ 'img-wrap ' + this.props.class + ' ' + projectClass + ' img-' + this.props.index}
                  src={ this.props.src }
                />
              </ResponsiveContainer>
            }

          </Link>
          <ProjectDetails
            description={ this.props.description }
            etcTitle={ this.props.etcTitle }
            expanded={ this.state.expanded }
            index={ this.props.index }
            key={ 'detailed-project-' + this.props.index }
            role={ this.props.role }
            src={ this.props.src }
            tech={ this.props.tech }
          />
        </div>
      </div>
    );
  }
});


var Projects = React.createClass({
  render: function() {
    var projects = projectList.map(function (p, i) {
      return (
        <Project
          class={ p.class }
          description={ p.description }
          etcTitle={ p.etcTitle }
          id={ p.id }
          index={ i }
          key={ 'project-' + i }
          role={ p.role }
          src={ p.file }
          tech={ p.tech }
          title={ p.title }
        />
      )
    });

    return (
      <div className='projects'>
        { projects }
      </div>
    );
  }
});


var Design = React.createClass({
  render: function() {
    return (
      <VelocityTransitionGroup
        appear='transition.fadeIn'
        enter='transition.fadeIn'
        leave='transition.fadeOut'
        defaults={{
          duration: 2000,
          delay: 0
        }}
      >
        <div className={'page design '} key='design-page'>
          <div className='text-measure' key='intro'>
            <h1 className='intro'>design</h1>
            <p>
              At the ripe age of 9 years old, I bought my first copy of Dark Side of the Moon. I'd never heard of Pink Floyd, I just liked the cover: a ray of light entering a prism which divides into a rainbow of frequencies. I studied that cover for a hours and hours, and eventually went on to study light and optics because of it. I became a designer because images like that one captivate me.
            </p>
            <p className='introduction'>
              I see design as problem solving. How can we best communicate complex ideas using simple tools such as color, shape, and text? How can we use imagination and creativity to make those ideas more compelling?
            </p>
            <p>
              Design has heavily influenced who I am today. Below are some of my favorite efforts from the past dozen or so trips around the fat old sun.
            </p>
          </div>
          <Projects key='projects' />
        </div>
      </VelocityTransitionGroup>
    );
  }
});

module.exports = Design;