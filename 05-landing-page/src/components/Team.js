function Member(props) {
  return (
    <div className="col-md-3 col-sm-6 team">
      <div className="thumbnail">
        <img src={props.img} alt="..." className="team-img" />
        <div className="caption">
          <h4>{props.name}</h4>
          <p>{props.job}</p>
        </div>
      </div>
    </div>
  );
}

export default function Team() {
  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>Meet the Team</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.</p>
        </div>
        <div id="row">
          <Member img="img/team/01.jpg" name="John Doe" job="Director" />
          <Member img="img/team/02.jpg" name="Mike Doe" job="Senior Designer" />
          <Member img="img/team/03.jpg" name="Jane Doe" job="Senior Designer" />
          <Member img="img/team/04.jpg" name="Karen Doe" job="Project Manager" />
        </div>
      </div>
    </div>
  );
}
