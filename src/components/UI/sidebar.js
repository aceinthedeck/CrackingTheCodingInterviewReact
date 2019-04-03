import React from 'react';
import { Link } from "react-router-dom";


const SideBar = () => {

    return(
        <nav className="col-md-2 d-none d-md-block bg-light sidebar">
            <div className="sidebar-sticky">
                <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                    <span>Chapter 1</span>
                </h6>
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <Link className="nav-link active" to="/isunique">
                            Is Unique
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/checkpermutation">
                            Check Permutation
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/urlify">
                            URLify
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/palindromepermutation">
                            Palrindrome Permutation
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/oneway">
                            One Way
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/stringcompression">
                            String Compression
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/rotatematrix">
                            Rotate Matrix
                        </Link>
                    </li>

                </ul>
        <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
          <span>Chapter 2</span>
        </h6>
        <ul className="nav flex-column mb-2">
          <li className="nav-item">
            <Link className="nav-link" to="/">
                Is Unique
            </Link>
          </li>
        </ul>
      </div>
        </nav>
    );

}

export default SideBar;