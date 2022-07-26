function Testimonial(props) {
  return (
    <div className="col-md-4">
      <div className="testimonial">
        <div className="testimonial-image">
          <img src={props.img} alt="" />
        </div>
        <div className="testimonial-content">
          <p>{props.text}</p>
          <div className="testimonial-meta"> - {props.name}</div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <div id="testimonials">
      <div className="container">
        <div className="section-title text-center">
          <h2>What our clients say</h2>
        </div>
        <div className="row">
          <Testimonial
            img="img/testimonials/01.jpg"
            name="John Doe"
            text='""Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.""'
          />
          <Testimonial
            img="img/testimonials/02.jpg"
            name="Johnathan Doe"
            text='""Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.""'
          />
          <Testimonial
            img="img/testimonials/03.jpg"
            name="John Doe"
            text='""Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.""'
          />
          <Testimonial
            img="img/testimonials/04.jpg"
            name="Johnathan Doe"
            text='""Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.""'
          />
          <Testimonial
            img="img/testimonials/05.jpg"
            name="John Doe"
            text='""Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.""'
          />
          <Testimonial
            img="img/testimonials/06.jpg"
            name="Johnathan Doe"
            text='""Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.""'
          />
        </div>
      </div>
    </div>
  );
}
