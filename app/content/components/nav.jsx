import React, { Component } from 'react';
import { Link } from 'react-router';
require('../../styles/components/nav.css');

export class Nav extends Component {
	render() {
		return (
			<nav>
				<ul className="site-nav">
					<li>
						<Link
							to="/home"
							className="site-nav-link"
							activeClassName="active"
						>
							Home
						</Link>
					</li>
					<li>
						<Link
							to="/info"
							className="site-nav-link"
							activeClassName="active"
						>
							Info
						</Link>
					</li>
					<li>
						<Link
							to="/about"
							className="site-nav-link"
							activeClassName="active"
						>
							About
						</Link>
					</li>
				</ul>
			</nav>
		);
	}
}
