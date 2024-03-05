
import comImg from '../assets/images/a.jpg'
export const Community = () => {
  return (
    <section id="blog" className="mb-4">
        <div className="container">
            <h2 className="text-center mb-4 fw-bold display-5">Caring is the new marketing</h2>
            <p className="text-center">The Nextcent blog is the best place to read about the latest membership insights,
                <br />
                trends and more. See who's joining the community, read about how our community <br /> are increasing their
                membership income and lot's more.​
            </p>
            <div className="row text-center">
                <div className="col-12 col-md-4 mb-3">
                    <div className="card">
                        <img src={comImg} className="card-img-top" alt="..." />
                        <div className="card-body mx-4 rounded bg-light">
                            <h5 className="card-text">What are your safeguarding <br/>responsibilities and how can <br/> you
                                manage them?</h5>
                            <a className="btn text-success fs-6" href="#" role="button">Read More <i
                                    className="bi bi-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-4 mb-3">
                    <div className="card">
                        <img src={comImg} className="card-img-top" alt="..." />
                        <div className="card-body mx-4 rounded bg-light">
                            <h5 className="card-text">What are your safeguarding <br />responsibilities and how can <br /> you
                                manage them?</h5>
                            <a className="btn text-success fs-6" href="#" role="button">Read More <i
                                    className="bi bi-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-4 mb-3">
                    <div className="card">
                        <img src={comImg} className="card-img-top" alt="..." />
                        <div className="card-body mx-4 rounded bg-light">
                            <h5 className="card-text">What are your safeguarding <br />responsibilities and how can <br /> you
                                manage them?</h5>
                            <a className="btn text-success fs-6" href="#" role="button">Read More <i
                                    className="bi bi-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

  )
}
