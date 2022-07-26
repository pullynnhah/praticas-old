function Service(props) {
  return (
    <div className="col-md-4">
      <i className={`fa ${props.icon}`}></i>
      <div className="service-desc">
        <h3>{props.title}</h3>
        <p>{props.desc}</p>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.</p>
        </div>
        <div className="row">
          <Service
            title="Lorem ipsum dolor"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at."
            icon="fa-wordpress"
          />

          <Service
            title="Consectetur adipiscing"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at."
            icon="fa-cart-arrow-down"
          />
          <Service
            title="Lorem ipsum dolor"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at."
            icon="fa-cloud-download"
          />
          <Service
            title="Consectetur adipiscing"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at."
            icon="fa-language"
          />
          <Service
            title="Lorem ipsum dolor"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at."
            icon="fa-plane"
          />
          <Service
            title="Consectetur adipiscing"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at."
            icon="fa-pie-chart"
          />
        </div>
      </div>
    </div>
  );
}
