import React from 'react'

export const Locals = () => {
  return (
    <section id="helpingLocal" className="py-5">
        <div className="container">
            <div className="row align-items-center">
                {/* <!-- Left Column with Title --> */}
                <div className="col-md-6">
                    <h2 className="fw-bold">Helping a local</h2>
                    <h2 className="text-success fw-bold">business reinvent itself</h2>
                    <p>We reached here with our hard work and dedication</p>
                </div>
                {/* <!-- Right Column with Two Sub-Columns --> */}
                <div className="col-md-6">
                    <div className="container">
                        <div className="row">
                            {/* <!-- First Sub-Column --> */}
                            <div className="col d-flex align-items-center mb-4 col">
                                <i className="bi bi-people h1 text-success me-3"></i>
                                <div>
                                    <h3 className="mb-0 counter-count">2245341</h3>
                                    <p className="text-muted">Members</p>
                                </div>
                            </div>
                            <div className="col d-flex align-items-center mb-4 col">
                                <i className="bi bi-person-raised-hand h1 text-success me-3"></i>
                                <div>
                                    <h3 className="mb-0 counter-count">46328</h3>
                                    <p className="text-muted">Clubs</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {/* <!-- Second Sub-Column --> */}
                            <div className="col d-flex align-items-center mb-4 col">
                                <i className="bi bi-hand-index-thumb h1 text-success me-3"></i>
                                <div>
                                    <h3 className="mb-0 counter-count">828867</h3>
                                    <p className="text-muted">Event Booking</p>
                                </div>
                            </div>
                            <div className="col d-flex align-items-center mb-4 col">
                                <i className="bi bi-credit-card h1 text-success me-3"></i>
                                <div>
                                    <h3 className="mb-0 counter-count">1926436</h3>
                                    <p className="text-muted">Payments</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    </section>
  )
}
