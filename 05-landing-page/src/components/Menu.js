function NavbarHeader() {
  return (
    <div className="navbar-header">
      <button
        type="button"
        className="navbar-toggle collapsed"
        data-toggle="collapse"
        data-target="#bs-example-navbar-collapse-1">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      <a className="navbar-brand page-scroll" href="#page-top">
        React Landing Page
      </a>
    </div>
  );
}

function Navbar() {
  return (
    <div className="container">
      <NavbarHeader />
      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul className="nav navbar-nav navbar-right">
          <MenuItem href="#services" text="Services" />
          <MenuItem href="#testimonials" text="Testimonials" />
          <MenuItem href="#team" text="Team" />
        </ul>
      </div>
    </div>
  );
}

function MenuItem(props) {
  return (
    <li className="">
      <a href={props.href} className="page-scroll">
        {props.text}
      </a>
    </li>
  );
}

export default function Menu() {
  return (
    <div id="menu" className="navbar navbar-default navbar-fixed-top">
      <Navbar />
    </div>
  );
}
