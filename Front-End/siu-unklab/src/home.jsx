import './home.css'

const Home = () => {
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
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="userDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Welcome, Nama Mahasiswa
                </a>
                <div className="dropdown-menu" aria-labelledby="userDropdown">
                  <a className="dropdown-item" href="#">Change password</a>
                  <a className="dropdown-item" href="./profile.html">Profile</a>
                  <a className="dropdown-item" href="#">Balance</a>
                  <a className="dropdown-item" href="#">My Labor</a>
                  <a className="dropdown-item" href="#">Verification</a>
                  <a className="dropdown-item" href="#">My Document</a>
                  <a className="dropdown-item" href="#">My Non Academic Record</a>
                  <a className="dropdown-item" href="#">Aturan dan Keputusan</a>
                  <a className="dropdown-item" href="./absensi.html">View Absence</a>
                  <a className="dropdown-item" href="login.html">Log Out</a>
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
              <div className="alert alert-primary rounded" role="alert">
                <strong>Teacher Evaluation</strong><br />
                Saat ini pengisian evaluasi dosen telah dibuka. Silahkan mengisi
                evaluasi dosen melalui <a href="#">link ini.</a>
              </div>
              <div className="alert alert-warning rounded" role="alert">
                <strong>Academic</strong><br />
                Maksimum waktu untuk setiap mahasiswa menyelesaikan perkuliahan di
                satu program studi adalah tujuh (7) tahun terhitung sejak
                mahasiswa tersebut terdaftar pada program studi. Informasi lebih
                lanjut dapat dilihat melalui tautan
                <a href="#">Aturan dan Keputusan</a>
              </div>
              <div className="alert alert-primary rounded" role="alert">
                <strong>Academic</strong><br />
                <strong
                  >Periksa kembali jadwal perkuliahan anda sebelum mengikuti
                  perkuliahan.<br />
                  (Please re-check your schedule before class start)</strong
                >
              </div>
              <div className="alert alert-success rounded" role="alert">
                <strong>SIU</strong><br />
                Welcome back <strong>Nama Mahasiswa</strong>, its
                nice to meet you again. This is your last activity using this
                system:<br />
                Last login date: 2024-XX-XX XX:XX:XX
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
  )
}

export default Home;