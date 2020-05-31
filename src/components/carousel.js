import React from 'react';

const Carousel = () => {

  return (
  
    <div id="myCarousel" className="carousel slide mt-5 pt-5"  data-ride="carousel" >
      
      <ol class="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
        <li data-target="#myCarousel" data-slide-to="3"></li>
      </ol>
      <div className="carousel-inner" role="listbox" style={{ maxHeight: "800px", marginTop:"24px"}}>
        <div className="item active" >
          <img className="d-block  img-fluid" src="./images/bg1.jpg" alt="First slide" />
          <div class="carousel-caption">
            <h3>Chania</h3>
            <p>The atmosphere in Chania has a touch of Florence and Venice.</p>
          </div>
        </div>

        <div className="item " >
          <img className="d-block  img-fluid" src="./images/bg5.jpg" alt="First slide" />
          <div class="carousel-caption">
            <h3>Chania</h3>
            <p>The atmosphere in Chania has a touch of Florence and Venice.</p>
          </div>
        </div>

        <div className="item " >
          <img className="d-block  img-fluid" src="./images/bg7.jpg" alt="First slide" />
          <div class="carousel-caption">
            <h3>Chania</h3>
            <p>The atmosphere in Chania has a touch of Florence and Venice.</p>
          </div>
        </div>
        <div className="item " >
          <img className="d-block  img-fluid" src="./images/bg4.jpg" alt="First slide" />
          <div class="carousel-caption">
            <h3>Chania</h3>
            <p>The atmosphere in Chania has a touch of Florence and Venice.</p>
          </div>
        </div>
        

        <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
          <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
          <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>

      </div>
    </div>
  )

};
export default Carousel;