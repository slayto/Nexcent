
import pgImg from '../assets/images/a.png'
export const PixelGrade = () => {
  return (
    <div className="container px-4 py-5">
        <div className="row align-items-center g-5 py-5">
            <div className="col-10 col-sm-8 col-lg-5">
                <img src={pgImg} className="d-block mx-lg-auto img-fluid rounded left-ani" alt="Bootstrap Themes"
                    width="700" height="500" loading="lazy" />
            </div>
            <div className="col-lg-7 right-ani">
                <h3 className="display-5 fw-bold lh-1 mb-3">The unseen of spending three years at Pixelgrade</h3>
                <p className="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the
                    world’s most popular front-end open source toolkit, featuring Sass variables and mixins,
                    responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                    <button type="button" className="btn btn-success btn-lg px-4 me-md-2">Learn More</button>
                </div>
            </div>
        </div>
    </div>
  )
}
