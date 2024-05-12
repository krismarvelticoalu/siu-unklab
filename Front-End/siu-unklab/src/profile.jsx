import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css';
import { useState } from 'react';

const Profile = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src="https://student.unklab.ac.id/s1/images/logo.png"
              alt="UNKLAB"
              height="30"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleDropdown}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse justify-content-between ${
              isDropdownOpen ? 'show' : ''
            }`}
            id="navbarNav"
          >
            <ul className="navbar-nav">
              {/* Add your sidebar links here */}
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="userDropdown"
                  role="button"
                  onClick={toggleDropdown}
                >
                  Welcome, Nama Mahasiswa
                </a>
                <div
                  className={`dropdown-menu dropdown-menu-right ${
                    isDropdownOpen ? 'show' : ''
                  }`}
                  aria-labelledby="userDropdown"
                >
                  <a className="dropdown-item" href="#">
                    Change password
                  </a>
                  <a className="dropdown-item" href="./profile.html">
                    Profile
                  </a>
                  <a className="dropdown-item" href="#">
                    Balance
                  </a>
                  <a className="dropdown-item" href="#">
                    My Labor
                  </a>
                  <a className="dropdown-item" href="#">
                    Verification
                  </a>
                  <a className="dropdown-item" href="#">
                    My Document
                  </a>
                  <a className="dropdown-item" href="#">
                    My Non Academic Record
                  </a>
                  <a className="dropdown-item" href="#">
                    Aturan dan Keputusan
                  </a>
                  <a className="dropdown-item" href="./absensi.html">
                    View Absence
                  </a>
                  <a className="dropdown-item" href="login.html">
                    Log Out
                  </a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="fas fa-envelope"></i> 0 Message(s)
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container-fluid my-4">
        <div className="row">
          <div className="col-md-3 col-lg-2">
            <div className="sidebar p-3">
              <div className="academic-section">
                <h5>Academic</h5>
                <ul>
                  <li><a href="#">Registration</a></li>
                  <li><a href="#">Semester Cost Estimation</a></li>
                  <li><a href="./addndrop.html">Add/ Drop Registration Subject</a></li>
                  <li><a href="./drop.html">Drop Subject</a></li>
                  <li><a href="./grade.html">View Grade</a></li>
                  <li><a href="./schedule.html">View Schedule</a></li>
                  <li><a href="#">Teacher Evaluation</a></li>
                  <li><a href="#">View Ospek & KKN/ KKU</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-9 col-lg-10">
            <div className="system-messages mb-4">
              <div className="alert alert-info rounded" role="alert">
                <strong>Profile Information</strong>
                <dl className="row mt-3">
                  <dt className="col-sm-4">ID Student:</dt>
                  <dd className="col-sm-8">123456789</dd>

                  <dt className="col-sm-4">NIM:</dt>
                  <dd className="col-sm-8">123456789</dd>

                  <dt className="col-sm-4">Gender:</dt>
                  <dd className="col-sm-8">Male</dd>

                  <dt className="col-sm-4">Address:</dt>
                  <dd className="col-sm-8">Jl. Example Street No. 123</dd>

                  <dt className="col-sm-4">Faculty:</dt>
                  <dd className="col-sm-8">Faculty of Engineering</dd>

                  <dt className="col-sm-4">Program Study:</dt>
                  <dd className="col-sm-8">Computer Science</dd>

                  <dt className="col-sm-4">Academic Status:</dt>
                  <dd className="col-sm-8">Active</dd>

                  <dt className="col-sm-4">Place, Date of Birth:</dt>
                  <dd className="col-sm-8">City, DD/MM/YYYY</dd>

                  <dt className="col-sm-4">Email:</dt>
                  <dd className="col-sm-8">example@student.unklab.ac.id</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer rounded-top">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p>
                <strong>UNKLAB Student</strong> <em>Final Project for Back-End Web</em>
              </p>
            </div>
            <div className="col-md-6 text-md-right">
              <p>
                <strong>Quick Links:</strong>
                <a href="#">Dashboard</a> |
                <a href="login.html">Log Out</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Profile;
