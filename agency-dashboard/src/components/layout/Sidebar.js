import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
	return (
		<React.Fragment>
			<nav class="col-md-2 d-none d-md-block bg-light sidebar">
				<div class="sidebar-sticky">
					<ul class="nav flex-column">
						<li class="nav-item">
							<Link class="nav-link active" to="/dashboard">
								<span className="mr-2">
									<i class="fas fa-home" />
								</span>
								Dashboard <span class="sr-only">(current)</span>
							</Link>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#">
								<span className="mr-2">
									<i class="fas fa-cog" />
								</span>
								Configure
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</React.Fragment>
	);
};

export default Sidebar;
