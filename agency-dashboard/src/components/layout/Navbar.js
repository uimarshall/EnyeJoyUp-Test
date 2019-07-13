import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

import logo from "../../logo.svg";

const isActive = (history, path) => {
	if (history.location.pathname === path) {
		return { color: "var(--mainWhite) !important" };
	} else {
		return { color: "#ffffff" };
	}
};

const Navbar = ({ history }) => {
	return (
		<React.Fragment>
			<NavContainer className="navbar navbar-expand-sm navbar-dark fixed-top flex-md-nowrap p-0 shadow">
				<Link className="navbar-brand col-sm-3 col-md-2 mr-0" to="/">
					JoyUp
					{/* <img src={logo} alt="logo" /> */}
				</Link>
				<div className="collapse navbar-collapse" id="navbarNavDropdown">
					<ul className="navbar-nav">
						<li className="nav-item">
							<Link className="nav-link" style={isActive(history, "/")} to="/">
								Home <span className="sr-only">(current)</span>
							</Link>
						</li>
					</ul>
				</div>

				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#mobile-nav"
				>
					<span className="navbar-toggler-icon" />
				</button>

				<div className="collapse navbar-collapse" id="mobile-nav">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item dropdown">
							<Link
								className="nav-link dropdown-toggle"
								href="#"
								id="navbarDropdownMenuLink"
								role="button"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false"
							>
								MM
							</Link>
							<div
								className="dropdown-menu"
								aria-labelledby="navbarDropdownMenuLink"
							>
								<Link
									className="dropdown-item"
									className="nav-link"
									style={isActive(history, "/help")}
									to="/help"
								>
									Help
								</Link>
								<Link
									className="dropdown-item"
									className="nav-link"
									style={isActive(history, "/login")}
								>
									LogIn
								</Link>
								<Link
									className="dropdown-item"
									className="nav-link"
									to="/logout"
								>
									Logout
								</Link>
							</div>
						</li>
					</ul>
				</div>
			</NavContainer>
		</React.Fragment>
	);
};

const NavContainer = styled.nav`
	background: var(--lightGreen) !important;
	.nav-link {
		color: var(--mainWhite) !important;
		font-size: 1.3rem;
		text-transform: capitalize;
	}
`;

export default withRouter(Navbar);
