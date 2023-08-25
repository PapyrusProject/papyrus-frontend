import Image from 'next/image'
import Link from 'next/link';
import link from 'react-router-dom';




export default function Home() {
  return (
    <main>
    <>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Papyrus</title>
  {/* ==== STYLE.CSS ==== */}
  <link rel="stylesheet" href="/main/style.css" />
  {/* ====  REMIXICON CDN ==== */}
  <link
    href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css"
    rel="stylesheet"
  />
  {/* ==== ANIMATE ON SCROLL CSS CDN  ==== */}
  <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
  {/* ==== HEADER ==== */}
  <header className="container header">
   
   
    {/* ==== NAVBAR ==== */}
    <nav className="nav">
      <div className="logo">
        <h2>Papyrus.</h2>
      </div>
      <div className="nav_menu" id="nav_menu">
        <button className="close_btn" id="close_btn">
          <i className="ri-close-fill" />
        </button>

        <ul className="nav_menu_list">
          <li className="nav_menu_item">
            <Link href="/account" className="nav_menu_link" style={{ whiteSpace: 'nowrap' }}>
              sign up
            </Link>
          </li>

          <li className="nav_menu_item">
            <Link href="/about" className="nav_menu_link">
              about
            </Link>
          </li>

          <li className="nav_menu_item">
            <a href="/service" className="nav_menu_link">
              service
            </a>
          </li>
          <li className="nav_menu_item">
            <a href="#" className="nav_menu_link">
              contact
            </a>
          </li>
          <nav className="nav"></nav>
        </ul>
      </div>
      <button className="toggle_btn" id="toggle_btn">
        <i className="ri-menu-line" />
      </button>
    </nav>


  </header>
  <section className="wrapper">
    <div className="container">
      <div className="grid-cols-2">
        <div className="grid-item-1">
          <h1 className="main-heading">
            Welcome to <span>Papyrus.</span>
            <br />
            Develop anything.
          </h1>
          <p className="info-text">
            Build a beautiful, modern website with flexible components built
            from scratch.
          </p>
          

    
        
         
          <div className="btn_wrapper">
            <button className="btn view_more_btn">
              My Notes <i className="" />
            </button>
            <button className="btn documentation_btn">Sign In</button>
          </div>
          




        </div>
        <div className="grid-item-2">
          <div className="team_img_wrapper"></div>
        </div>
      </div>
    </div>
  </section>
  <section className="wrapper">
    <div className="container" data-aos="fade-up" data-aos-duration={1000}>
      <div className="grid-cols-3">
        <div className="grid-col-item">
          <div className="icon">
            <svg>
              <path/>
            </svg>
          </div>
          <div className="featured_info">
            <span></span>
            <p>
            </p>
          </div>
        </div>
        <div className="grid-col-item">
          <div className="icon">
            <svg>
              <path/>
            </svg>
          </div>
          <div className="featured_info">
            <span></span>
            <p></p>
          </div>
        </div>
        <div className="grid-col-item">
          <div className="icon">
            <svg>
              <path/>
            </svg>
          </div>
          <div className="featured_info">
            <span></span>
            <p>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <footer />
  {/* ==== ANIMATE ON SCROLL JS CDN */}
  {/* ==== GSAP CDN ==== */}
  {/* ==== SCRIPT.JS ==== */}
</>

    </main>

    
  )
}
