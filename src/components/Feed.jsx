const Feed = () => {
  return (
    <body className="bg-gray postion-relative">
      <div>
        <div className="bg-white d-flex align-items-center fixed-top shadow" style={{minHeight: '56px', zIndex: 5}}>
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col d-flex align-items-center">
                <i className="fab fa-facebook text-primary" style={{fontSize: '3rem'}} />
                <div className="input-group ms-2" type="button">
                  <span className="input-group-prepend d-lg-none" id="searchMenu" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
                    <div className="input-group-text bg-gray border-0 rounded-circle" style={{minHeight: '40px'}}>
                      <i className="fas fa-search text-muted" />
                    </div>
                  </span>
                  <span className="input-group-prepend d-none d-lg-block" id="searchMenu" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
                    <div className="input-group-text bg-gray border-0 rounded-pill" style={{minHeight: '40px', minWidth: '230px'}}>
                      <i className="fas fa-search me-2 text-muted" />
                      <p className="m-0 fs-7 text-muted">Search Flexbook</p>
                    </div>
                  </span>
                  <ul className="dropdown-menu overflow-auto border-0 shadow p-3" aria-labelledby="searchMenu" style={{width: '20em', maxHeight: '600px'}}>
                    <li>
                      <input type="text" className="rounded-pill border-0 bg-gray dropdown-item" placeholder="Search Flexbook..." autoFocus />
                    </li>
                    <li className="my-4">
                      <div className="
                        alert
                        fade
                        show
                        dropdown-item
                        p-1
                        m-0
                        d-flex
                        align-items-center
                        justify-content-between
                        " role="alert">
                        <div className="d-flex align-items-center">
                          <img src="https://source.unsplash.com/random/1" alt="avatar" className="rounded-circle me-2" style={{width: '35px', height: '35px', objectFit: 'cover'}} />
                          <p className="m-0">Lorem ipsum</p>
                        </div>
                        <button type="button" className="btn-close p-0 m-0" data-bs-dismiss="alert" aria-label="Close" />
                      </div>
                    </li>
                    <li className="my-4">
                      <div className="
                        alert
                        fade
                        show
                        dropdown-item
                        p-1
                        m-0
                        d-flex
                        align-items-center
                        justify-content-between
                        " role="alert">
                        <div className="d-flex align-items-center">
                          <img src="https://source.unsplash.com/random/2" alt="avatar" className="rounded-circle me-2" style={{width: '35px', height: '35px', objectFit: 'cover'}} />
                          <p className="m-0">Lorem ipsum</p>
                        </div>
                        <button type="button" className="btn-close p-0 m-0" data-bs-dismiss="alert" aria-label="Close" />
                      </div>
                    </li>
                    <li className="my-4">
                      <div className="
                        alert
                        fade
                        show
                        dropdown-item
                        p-1
                        m-0
                        d-flex
                        align-items-center
                        justify-content-between
                        " role="alert">
                        <div className="d-flex align-items-center">
                          <img src="https://source.unsplash.com/random/3" alt="avatar" className="rounded-circle me-2" style={{width: '35px', height: '35px', objectFit: 'cover'}} />
                          <p className="m-0">Lorem ipsum</p>
                        </div>
                        <button type="button" className="btn-close p-0 m-0" data-bs-dismiss="alert" aria-label="Close" />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col d-none d-xl-flex justify-content-center">
                <div className="mx-4 nav__btn nav__btn-active">
                  <button type="button" className="btn px-4">
                    <i className="fas fa-home text-muted fs-4" />
                  </button>
                </div>
                <div className="mx-4 nav__btn">
                  <button type="button" className="btn px-4">
                    <i className="fas fa-store text-muted fs-4" />
                  </button>
                </div>
                <div className="mx-4 nav__btn">
                  <button type="button" className="btn px-4">
                    <i type="button" className="position-relative fas fa-users text-muted fs-4">
                      <span className="
                        position-absolute
                        top-0
                        start-100
                        translate-middle
                        badge
                        rounded-pill
                        bg-danger
                        " style={{fontSize: '0.5rem'}}>
                        1
                        <span className="visually-hidden" />
                      </span>
                    </i>
                  </button>
                </div>
                <div className="mx-4 nav__btn">
                  <button type="button" className="btn px-4">
                    <i className="fas fa-gamepad text-muted fs-4" />
                  </button>
                </div>
              </div>
              <div className="col d-flex align-items-center justify-content-end">
                <div className="align-items-center justify-content-center d-none d-xl-flex">
                  <img src="https://source.unsplash.com/collection/happy-people" className="rounded-circle me-2" alt="avatar" style={{width: '38px', height: '38px', objectFit: 'cover'}} />
                  <p className="m-0">John</p>
                </div>
                <div className="
                    rounded-circle
                    p-1
                    bg-gray
                    d-flex
                    align-items-center
                    justify-content-center
                    mx-2
                " style={{width: '38px', height: '38px'}} type="button" id="mainMenu" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
                  <i className="fas fa-ellipsis-h" />
                </div>
                <ul className="dropdown-menu border-0 shadow p-3 overflow-auto" aria-labelledby="mainMenu" style={{width: '23em', maxHeight: '600px'}}>
                  <div>
                    <li className="p-1 mx-2">
                      <h2>Menu</h2>
                    </li>
                    <li className="p-1">
                      <div className="input-group-text bg-gray border-0 rounded-pill" style={{minHeight: '40px', minWidth: '230px'}}>
                        <i className="fas fa-search me-2 text-muted" />
                        <input type="text" className="form-control rounded-pill border-0 bg-gray" placeholder="Search Menu" />
                      </div>
                    </li>
                    <h4 className="m-2">Social</h4>
                    <li className="my-2 p-1">
                      <a href="#" className="
                        text-decoration-none text-dark
                        d-flex
                        align-items-center
                        justify-content-between
                        ">
                        <div className="p-2">
                          <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/Y7r38CcFEw5.png" alt="icon from fb" className="rounded-circle" style={{width: '48px', height: '48px', objectFit: 'cover'}} />
                        </div>
                        <div>
                          <p className="m-0">Campus</p>
                          <span className="fs-7 text-muted">Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Odio, commodi.</span>
                        </div>
                      </a>
                    </li>
                    <li className="my-2 p-1">
                      <a href="#" className="
                        text-decoration-none text-dark
                        d-flex
                        align-items-center
                        justify-content-between
                        ">
                        <div className="p-2">
                          <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yx/r/N7UOh8REweU.png" alt="icon from fb" className="rounded-circle" style={{width: '48px', height: '48px', objectFit: 'cover'}} />
                        </div>
                        <div>
                          <p className="m-0">Events</p>
                          <span className="fs-7 text-muted">Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Odio, commodi.</span>
                        </div>
                      </a>
                    </li>
                    <li className="my-2 p-1">
                      <a href="#" className="
                        text-decoration-none text-dark
                        d-flex
                        align-items-center
                        justify-content-between
                        ">
                        <div className="p-2">
                          <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/tSXYIzZlfrS.png" alt="icon from fb" className="rounded-circle" style={{width: '48px', height: '48px', objectFit: 'cover'}} />
                        </div>
                        <div>
                          <p className="m-0">Friends</p>
                          <span className="fs-7 text-muted">Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Odio, commodi.</span>
                        </div>
                      </a>
                    </li>
                    <li className="my-2 p-1">
                      <a href="#" className="
                        text-decoration-none text-dark
                        d-flex
                        align-items-center
                        justify-content-between
                        ">
                        <div className="p-2">
                          <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/Im_0d7HFH4n.png" alt="icon from fb" className="rounded-circle" style={{width: '48px', height: '48px', objectFit: 'cover'}} />
                        </div>
                        <div>
                          <p className="m-0">Groups</p>
                          <span className="fs-7 text-muted">Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Odio, commodi.</span>
                        </div>
                      </a>
                    </li>
                    <li className="my-2 p-1">
                      <a href="#" className="
                        text-decoration-none text-dark
                        d-flex
                        align-items-center
                        justify-content-between
                        ">
                        <div className="p-2">
                          <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yo/r/hLkEFzsCyXC.png" alt="icon from fb" className="rounded-circle" style={{width: '48px', height: '48px', objectFit: 'cover'}} />
                        </div>
                        <div>
                          <p className="m-0">News Feed</p>
                          <span className="fs-7 text-muted">Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Odio, commodi.</span>
                        </div>
                      </a>
                    </li>
                    <li className="my-2 p-1">
                      <a href="#" className="
                        text-decoration-none text-dark
                        d-flex
                        align-items-center
                        justify-content-between
                        ">
                        <div className="p-2">
                          <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/0gH3vbvr8Ee.png" alt="icon from fb" className="rounded-circle" style={{width: '48px', height: '48px', objectFit: 'cover'}} />
                        </div>
                        <div>
                          <p className="m-0">Pages</p>
                          <span className="fs-7 text-muted">Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Odio, commodi.</span>
                        </div>
                      </a>
                    </li>
                    <hr />
                    <h4 className="m-2">Entertainment</h4>
                    <li className="my-2 p-1">
                      <a href="#" className="
                        text-decoration-none text-dark
                        d-flex
                        align-items-center
                        justify-content-between
                        ">
                        <div className="p-2">
                          <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/Y7r38CcFEw5.png" alt="icon from fb" className="rounded-circle" style={{width: '48px', height: '48px', objectFit: 'cover'}} />
                        </div>
                        <div>
                          <p className="m-0">Campus</p>
                          <span className="fs-7 text-muted">Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Odio, commodi.</span>
                        </div>
                      </a>
                    </li>
                    <li className="my-2 p-1">
                      <a href="#" className="
                        text-decoration-none text-dark
                        d-flex
                        align-items-center
                        justify-content-between
                        ">
                        <div className="p-2">
                          <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yx/r/N7UOh8REweU.png" alt="icon from fb" className="rounded-circle" style={{width: '48px', height: '48px', objectFit: 'cover'}} />
                        </div>
                        <div>
                          <p className="m-0">Events</p>
                          <span className="fs-7 text-muted">Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Odio, commodi.</span>
                        </div>
                      </a>
                    </li>
                    <li className="my-2 p-1">
                      <a href="#" className="
                        text-decoration-none text-dark
                        d-flex
                        align-items-center
                        justify-content-between
                        ">
                        <div className="p-2">
                          <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/tSXYIzZlfrS.png" alt="icon from fb" className="rounded-circle" style={{width: '48px', height: '48px', objectFit: 'cover'}} />
                        </div>
                        <div>
                          <p className="m-0">Friends</p>
                          <span className="fs-7 text-muted">Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Odio, commodi.</span>
                        </div>
                      </a>
                    </li>
                  </div>
                  <hr />
                  <div>
                    <li className="p-1 mx-2">
                      <h2>Create</h2>
                    </li>
                    <li className="my-2 p-1">
                      <a href="#" className="
                        text-decoration-none text-dark
                        d-flex
                        align-items-center
                        ">
                        <div className="
                            rounded-circle
                            bg-gray
                            p-1
                            d-flex
                            align-items-center
                            justify-content-center
                            me-3
                        " style={{width: '38px', height: '38px'}}>
                          <i className="fas fa-edit" />
                        </div>
                        <div>
                          <p className="m-0">Post</p>
                        </div>
                      </a>
                    </li>
                    <li className="my-2 p-1">
                      <a href="#" className="
                        text-decoration-none text-dark
                        d-flex
                        align-items-center
                        ">
                        <div className="
                            rounded-circle
                            bg-gray
                            p-1
                            d-flex
                            align-items-center
                            justify-content-center
                            me-3
                        " style={{width: '38px', height: '38px'}}>
                          <i className="fas fa-book-open" />
                        </div>
                        <div>
                          <p className="m-0">Story</p>
                        </div>
                      </a>
                    </li>
                    <li className="my-2 p-1">
                      <a href="#" className="
                        text-decoration-none text-dark
                        d-flex
                        align-items-center
                        ">
                        <div className="
                            rounded-circle
                            bg-gray
                            p-1
                            d-flex
                            align-items-center
                            justify-content-center
                            me-3
                        " style={{width: '38px', height: '38px'}}>
                          <i className="fas fa-video" />
                        </div>
                        <div>
                          <p className="m-0">Video</p>
                        </div>
                      </a>
                    </li>
                    <hr />
                    <li className="my-2 p-1">
                      <a href="#" className="
                        text-decoration-none text-dark
                        d-flex
                        align-items-center
                        ">
                        <div className="
                            rounded-circle
                            bg-gray
                            p-1
                            d-flex
                            align-items-center
                            justify-content-center
                            me-3
                        " style={{width: '38px', height: '38px'}}>
                          <i className="fas fa-flag" />
                        </div>
                        <div>
                          <p className="m-0">Page</p>
                        </div>
                      </a>
                    </li>
                    <li className="my-2 p-1">
                      <a href="#" className="
                        text-decoration-none text-dark
                        d-flex
                        align-items-center
                        ">
                        <div className="
                            rounded-circle
                            bg-gray
                            p-1
                            d-flex
                            align-items-center
                            justify-content-center
                            me-3
                        " style={{width: '38px', height: '38px'}}>
                          <i className="fas fa-bullhorn" />
                        </div>
                        <div>
                          <p className="m-0">Add</p>
                        </div>
                      </a>
                    </li>
                    <li className="my-2 p-1">
                      <a href="#" className="
                        text-decoration-none text-dark
                        d-flex
                        align-items-center
                        ">
                        <div className="
                            rounded-circle
                            bg-gray
                            p-1
                            d-flex
                            align-items-center
                            justify-content-center
                            me-3
                        " style={{width: '38px', height: '38px'}}>
                          <i className="fas fa-users" />
                        </div>
                        <div>
                          <p className="m-0">Group</p>
                        </div>
                      </a>
                    </li>
                    <li className="my-2 p-1">
                      <a href="#" className="
                        text-decoration-none text-dark
                        d-flex
                        align-items-center
                        ">
                        <div className="
                            rounded-circle
                            bg-gray
                            p-1
                            d-flex
                            align-items-center
                            justify-content-center
                            me-3
                        " style={{width: '38px', height: '38px'}}>
                          <i className="fas fa-book" />
                        </div>
                        <div>
                          <p className="m-0">Event</p>
                        </div>
                      </a>
                    </li>
                    <li className="my-2 p-1">
                      <a href="#" className="
                        text-decoration-none text-dark
                        d-flex
                        align-items-center
                        ">
                        <div className="
                            rounded-circle
                            bg-gray
                            p-1
                            d-flex
                            align-items-center
                            justify-content-center
                            me-3
                        " style={{width: '38px', height: '38px'}}>
                          <i className="fas fa-shopping-basket" />
                        </div>
                        <div>
                          <p className="m-0">Marketplace Listing</p>
                        </div>
                      </a>
                    </li>
                    <li className="my-2 p-1">
                      <a href="#" className="
                        text-decoration-none text-dark
                        d-flex
                        align-items-center
                        ">
                        <div className="
                            rounded-circle
                            bg-gray
                            p-1
                            d-flex
                            align-items-center
                            justify-content-center
                            me-3
                        " style={{width: '38px', height: '38px'}}>
                          <i className="fas fa-suitcase" />
                        </div>
                        <div>
                          <p className="m-0">Job</p>
                        </div>
                      </a>
                    </li>
                  </div>
                </ul>
                <div className="
                    rounded-circle
                    p-1
                    bg-gray
                    d-flex
                    align-items-center
                    justify-content-center
                    mx-2
                " style={{width: '38px', height: '38px'}} type="button" id="chatMenu" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
                  <i className="fas fa-comment" />
                </div>
                <ul className="dropdown-menu border-0 shadow p-3 overflow-auto" aria-labelledby="chatMenu" style={{width: '23em', maxHeight: '600px'}}>
                  <li className="p-1">
                    <div className="d-flex justify-content-between">
                      <h2>Message</h2>
                      <div>
                        <i className="fas fa-ellipsis-h text-muted mx-2" type="button" data-bs-toggle="dropdown" />
                        <ul className="dropdown-menu shadow" style={{width: '18em'}}>
                          <div className="p-2">
                            <h5>Chat Settings</h5>
                            <span className="text-muted fs-7">Customize your Messenger experience.</span>
                          </div>
                          <hr />
                          <li>
                            <div className="
                                dropdown-item
                                d-flex
                                align-items-center
                                justify-content-between
                            ">
                              <div className="d-flex align-items-center">
                                <i className="fas fa-phone-alt me-3" />
                                <p className="m-0">Incoming call sounds</p>
                              </div>
                              <div className="form-check form-switch m-0">
                                <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" defaultChecked />
                                <label className="form-check-label" htmlFor="flexSwitchCheckChecked" />
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="
                                dropdown-item
                                d-flex
                                align-items-center
                                justify-content-between
                            ">
                              <div className="d-flex align-items-center">
                                <i className="fas fa-volume-off me-4 fs-4" />
                                <p className="m-0">Message sounds</p>
                              </div>
                              <div className="form-check form-switch m-0">
                                <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" defaultChecked />
                                <label className="form-check-label" htmlFor="flexSwitchCheckChecked" />
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="
                                dropdown-item
                                d-flex
                                align-items-center
                                justify-content-between
                            ">
                              <div className="d-flex align-items-center">
                                <i className="fas fa-spinner me-3" />
                                <p className="m-0">Pop-up new messages</p>
                              </div>
                              <div className="form-check form-switch m-0">
                                <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" defaultChecked />
                                <label className="form-check-label" htmlFor="flexSwitchCheckChecked" />
                              </div>
                            </div>
                            <span className="ms-5 text-muted fs-7">Automatically open new messages.</span>
                          </li>
                          <hr className="m-0" />
                          <li>
                            <div className="
                                dropdown-item
                                d-flex
                                align-items-center
                                justify-content-between
                            ">
                              <div className="d-flex align-items-center">
                                <i className="fas fa-toggle-off me-3" />
                                <p className="m-0">Turn Off Active Status</p>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="
                                dropdown-item
                                d-flex
                                align-items-center
                                justify-content-between
                            ">
                              <div className="d-flex align-items-center">
                                <i className="far fa-comment-alt me-3" />
                                <p className="m-0">Message Request</p>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="
                                dropdown-item
                                d-flex
                                align-items-center
                                justify-content-between
                            ">
                              <div className="d-flex align-items-center">
                                <i className="fas fa-share-square me-3" />
                                <p className="m-0">Message delivery settings</p>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="
                                dropdown-item
                                d-flex
                                align-items-center
                                justify-content-between
                            ">
                              <div className="d-flex align-items-center">
                                <i className="fas fa-shield-alt me-3" />
                                <p className="m-0">Block settings</p>
                              </div>
                            </div>
                          </li>
                        </ul>
                        <i className="fas fa-expand-arrows-alt text-muted mx-2" type="button" />
                        <i className="fas fa-edit text-muted mx-2" type="button" data-bs-toggle="modal" data-bs-target="#newChat" />
                      </div>
                    </div>
                  </li>
                  <li className="p-1">
                    <div className="input-group-text bg-gray border-0 rounded-pill" style={{minHeight: '40px', minWidth: '230px'}}>
                      <i className="fas fa-search me-2 text-muted" />
                      <input type="text" className="form-control rounded-pill border-0 bg-gray" placeholder="Search Messenger" />
                    </div>
                  </li>
                  <li className="my-2 p-1" type="button" data-bs-toggle="modal" data-bs-target="#singleChat1">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center justify-content-evenly">
                        <div className="p-2">
                          <img src="https://source.unsplash.com/random/1" alt="avatar" className="rounded-circle" style={{width: '58px', height: '58px', objectFit: 'cover'}} />
                        </div>
                        <div>
                          <p className="fs-7 m-0">Mike</p>
                          <span className="fs-7 text-muted">Lorem ipsum • 7d</span>
                        </div>
                      </div>
                      <div className="p-2">
                        <img src="https://source.unsplash.com/random/1" alt="avatar" className="rounded-circle" style={{width: '15px', height: '15px', objectFit: 'cover'}} />
                      </div>
                    </div>
                  </li>
                  <li className="my-2 p-1" type="button" data-bs-toggle="modal" data-bs-target="#singleChat2">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center justify-content-evenly">
                        <div className="p-2">
                          <img src="https://source.unsplash.com/random/2" alt="avatar" className="rounded-circle" style={{width: '58px', height: '58px', objectFit: 'cover'}} />
                        </div>
                        <div>
                          <p className="fs-7 m-0">
                            Tuan
                            <span className="fs-7 text-muted">Lorem ipsum • 7d</span>
                          </p>
                        </div>
                      </div>
                      <div className="p-2">
                        <img src="https://source.unsplash.com/random/2" alt="avatar" className="rounded-circle" style={{width: '15px', height: '15px', objectFit: 'cover'}} />
                      </div>
                    </div>
                  </li>
                  <li className="my-2 p-1" type="button" data-bs-toggle="modal" data-bs-target="#singleChat3">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center justify-content-evenly">
                        <div className="p-2">
                          <img src="https://source.unsplash.com/random/3" alt="avatar" className="rounded-circle" style={{width: '58px', height: '58px', objectFit: 'cover'}} />
                        </div>
                        <div>
                          <p className="fs-7 m-0">Jerry</p>
                          <span className="fs-7 text-muted">Lorem ipsum • 7d</span>
                        </div>
                      </div>
                      <div className="p-2">
                        <img src="https://source.unsplash.com/random/3" alt="avatar" className="rounded-circle" style={{width: '15px', height: '15px', objectFit: 'cover'}} />
                      </div>
                    </div>
                  </li>
                  <li className="my-2 p-1" type="button" data-bs-toggle="modal" data-bs-target="#singleChat4">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center justify-content-evenly">
                        <div className="p-2">
                          <img src="https://source.unsplash.com/random/4" alt="avatar" className="rounded-circle" style={{width: '58px', height: '58px', objectFit: 'cover'}} />
                        </div>
                        <div>
                          <p className="fs-7 m-0">Tony</p>
                          <span className="fs-7 text-muted">Lorem ipsum • 7d</span>
                        </div>
                      </div>
                      <div className="p-2">
                        <img src="https://source.unsplash.com/random/4" alt="avatar" className="rounded-circle" style={{width: '15px', height: '15px', objectFit: 'cover'}} />
                      </div>
                    </div>
                  </li>
                  <li className="my-2 p-1" type="button" data-bs-toggle="modal" data-bs-target="#singleChat5">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center justify-content-evenly">
                        <div className="p-2">
                          <img src="https://source.unsplash.com/random/5" alt="avatar" className="rounded-circle" style={{width: '58px', height: '58px', objectFit: 'cover'}} />
                        </div>
                        <div>
                          <p className="fs-7 m-0">Phu</p>
                          <span className="fs-7 text-muted">Lorem ipsum • 7d</span>
                        </div>
                      </div>
                      <div className="p-2">
                        <img src="https://source.unsplash.com/random/5" alt="avatar" className="rounded-circle" style={{width: '15px', height: '15px', objectFit: 'cover'}} />
                      </div>
                    </div>
                  </li>
                  <hr className="m-0" />
                  <a href="#" className="text-decoration-none">
                    <p className="fw-bold text-center pt-3 m-0">See All in Messenger</p>
                  </a>
                </ul>
                <div className="
                    rounded-circle
                    p-1
                    bg-gray
                    d-flex
                    align-items-center
                    justify-content-center
                    mx-2
                " style={{width: '38px', height: '38px'}} type="button" id="notMenu" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
                  <i className="fas fa-bell" />
                </div>
                <ul className="dropdown-menu border-0 shadow p-3" aria-labelledby="notMenu" style={{width: '23em', maxHeight: '600px', overflowY: 'auto'}}>
                  <li className="p-1">
                    <div className="d-flex justify-content-between">
                      <h2>Notifications</h2>
                      <div>
                        <i className="
                            fas
                            fa-ellipsis-h
                            pointer
                            p-2
                            rounded-circle
                            bg-gray
                        " type="button" data-bs-toggle="dropdown" />
                        <ul className="dropdown-menu">
                          <li className="dropdown-item d-flex align-items-center" type="button">
                            <i className="fas fa-check me-3 text-muted" />
                            <p className="m-0">Mark all as read</p>
                          </li>
                          <li className="dropdown-item d-flex align-items-center" type="button">
                            <i className="fas fa-cog me-3 text-muted" />
                            <p className="m-0">Privacy Checkup</p>
                          </li>
                          <li className="dropdown-item d-flex align-items-center" type="button">
                            <i className="fas fa-desktop me-3 text-muted" />
                            <p className="m-0">Privacy Shortcuts</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="d-flex" type="button">
                      <p className="rounded-pill bg-gray p-2">All</p>
                      <p className="ms-3 rounded-pill bg-primary p-2 text-white">
                        Unread
                      </p>
                    </div>
                  </li>
                  <div className="d-flex justify-content-between mx-2">
                    <h5>New</h5>
                    <a href="#" className="text-decoration-none">See All</a>
                  </div>
                  <li className="my-2 p-1">
                    <a href="#" className="
                        d-flex
                        align-items-center
                        justify-content-evenly
                        text-decoration-none text-dark
                    ">
                      <div className="d-flex align-items-center justify-content-evenly">
                        <div className="p-2">
                          <img src="https://source.unsplash.com/random/1" alt="avatar" className="rounded-circle" style={{width: '58px', height: '58px', objectFit: 'cover'}} />
                        </div>
                        <div>
                          <p className="fs-7 m-0">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Harum unde amet at nulla quae porro.
                          </p>
                          <span className="fs-7 text-primary">about an hour ago</span>
                        </div>
                      </div>
                      <i className="fas fa-circle fs-7 text-primary" />
                    </a>
                  </li>
                  <li className="my-2 p-1">
                    <a href="#" className="
                        d-flex
                        align-items-center
                        justify-content-evenly
                        text-decoration-none text-dark
                    ">
                      <div className="d-flex align-items-center justify-content-evenly">
                        <div className="p-2">
                          <img src="https://source.unsplash.com/random/2" alt="avatar" className="rounded-circle" style={{width: '58px', height: '58px', objectFit: 'cover'}} />
                        </div>
                        <div>
                          <p className="fs-7 m-0">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Harum unde amet at nulla quae porro.
                          </p>
                          <span className="fs-7 text-primary">about an hour ago</span>
                        </div>
                      </div>
                      <i className="fas fa-circle fs-7 text-primary" />
                    </a>
                  </li>
                  <li className="my-2 p-1">
                    <a href="#" className="
                        d-flex
                        align-items-center
                        justify-content-evenly
                        text-decoration-none text-dark
                    ">
                      <div className="d-flex align-items-center justify-content-evenly">
                        <div className="p-2">
                          <img src="https://source.unsplash.com/random/3" alt="avatar" className="rounded-circle" style={{width: '58px', height: '58px', objectFit: 'cover'}} />
                        </div>
                        <div>
                          <p className="fs-7 m-0">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Harum unde amet at nulla quae porro.
                          </p>
                          <span className="fs-7 text-primary">about an hour ago</span>
                        </div>
                      </div>
                      <i className="fas fa-circle fs-7 text-primary" />
                    </a>
                  </li>
                  <li className="my-2 p-1">
                    <a href="#" className="
                        d-flex
                        align-items-center
                        justify-content-evenly
                        text-decoration-none text-dark
                    ">
                      <div className="d-flex align-items-center justify-content-evenly">
                        <div className="p-2">
                          <img src="https://source.unsplash.com/random/4" alt="avatar" className="rounded-circle" style={{width: '58px', height: '58px', objectFit: 'cover'}} />
                        </div>
                        <div>
                          <p className="fs-7 m-0">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Harum unde amet at nulla quae porro.
                          </p>
                          <span className="fs-7 text-primary">about an hour ago</span>
                        </div>
                      </div>
                      <i className="fas fa-circle fs-7 text-primary" />
                    </a>
                  </li>
                  <li className="my-2 p-1">
                    <a href="#" className="
                        d-flex
                        align-items-center
                        justify-content-evenly
                        text-decoration-none text-dark
                    ">
                      <div className="d-flex align-items-center justify-content-evenly">
                        <div className="p-2">
                          <img src="https://source.unsplash.com/random/5" alt="avatar" className="rounded-circle" style={{width: '58px', height: '58px', objectFit: 'cover'}} />
                        </div>
                        <div>
                          <p className="fs-7 m-0">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Harum unde amet at nulla quae porro.
                          </p>
                          <span className="fs-7 text-primary">about an hour ago</span>
                        </div>
                      </div>
                      <i className="fas fa-circle fs-7 text-primary" />
                    </a>
                  </li>
                </ul>
                <div className="
                    rounded-circle
                    p-1
                    bg-gray
                    d-flex
                    align-items-center
                    justify-content-center
                    mx-2
                " style={{width: '38px', height: '38px'}} type="button" id="secondMenu" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
                  <i className="fas fa-caret-down" />
                </div>
                <ul className="dropdown-menu border-0 shadow p-3" aria-labelledby="secondMenu" style={{width: '23em'}}>
                  <li className="dropdown-item p-1 rounded d-flex" type="button">
                    <img src="https://source.unsplash.com/collection/happy-people" alt="avatar" className="rounded-circle me-2" style={{width: '45px', height: '45px', objectFit: 'cover'}} />
                    <div>
                      <p className="m-0">John</p>
                      <p className="m-0 text-muted">See your profile</p>
                    </div>
                  </li>
                  <hr />
                  <li className="dropdown-item p-1 rounded d-flex align-items-center" type="button">
                    <i className="fas fa-exclamation-circle bg-gray p-2 rounded-circle" />
                    <div className="ms-3">
                      <p className="m-0">Give Feedback</p>
                      <p className="m-0 text-muted fs-7">
                        Help us improve the new Flexbook.
                      </p>
                    </div>
                  </li>
                  <hr />
                  <li className="dropdown-item p-1 my-3 rounded" type="button">
                    <ul className="navbar-nav">
                      <li className="nav-item">
                        <div className="d-flex" data-bs-toggle="dropdown">
                          <i className="fas fa-cog bg-gray p-2 rounded-circle" />
                          <div className="
                            ms-3
                            d-flex
                            justify-content-between
                            align-items-center
                            w-100
                            ">
                            <p className="m-0">Settings &amp; Privacy</p>
                            <i className="fas fa-chevron-right" />
                          </div>
                        </div>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="dropdown-item d-flex align-items-center" href="#">
                              <div className="
                                rounded-circle
                                p-1
                                bg-gray
                                d-flex
                                align-items-center
                                justify-content-center
                                me-2
                                " style={{width: '38px', height: '38px'}}>
                                <i className="fas fa-cog" />
                              </div>
                              <p className="m-0">Settings</p>
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item d-flex align-items-center" href="#">
                              <div className="
                                rounded-circle
                                p-1
                                bg-gray
                                d-flex
                                align-items-center
                                justify-content-center
                                me-2
                                " style={{width: '38px', height: '38px'}}>
                                <i className="fas fa-lock" />
                              </div>
                              <p className="m-0">Privacy Checkup</p>
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item d-flex align-items-center" href="#">
                              <div className="
                                rounded-circle
                                p-1
                                bg-gray
                                d-flex
                                align-items-center
                                justify-content-center
                                me-2
                                " style={{width: '38px', height: '38px'}}>
                                <i className="fas fa-unlock-alt" />
                              </div>
                              <p className="m-0">Privacy Shortcuts</p>
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item d-flex align-items-center" href="#">
                              <div className="
                                rounded-circle
                                p-1
                                bg-gray
                                d-flex
                                align-items-center
                                justify-content-center
                                me-2
                                " style={{width: '38px', height: '38px'}}>
                                <i className="fas fa-list" />
                              </div>
                              <p className="m-0">Activity Log</p>
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item d-flex align-items-center" href="#">
                              <div className="
                                rounded-circle
                                p-1
                                bg-gray
                                d-flex
                                align-items-center
                                justify-content-center
                                me-2
                                " style={{width: '38px', height: '38px'}}>
                                <i className="fas fa-newspaper" />
                              </div>
                              <p className="m-0">News Feed Preferences</p>
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item d-flex align-items-center" href="#">
                              <div className="
                                rounded-circle
                                p-1
                                bg-gray
                                d-flex
                                align-items-center
                                justify-content-center
                                me-2
                                " style={{width: '38px', height: '38px'}}>
                                <i className="fas fa-globe" />
                              </div>
                              <p className="m-0">Language</p>
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown-item p-1 my-3 rounded" type="button">
                    <ul className="navbar-nav">
                      <li className="nav-item">
                        <div className="d-flex" data-bs-toggle="dropdown">
                          <i className="
                            fas
                            fa-question-circle
                            bg-gray
                            p-2
                            rounded-circle
                            " />
                          <div className="
                            ms-3
                            d-flex
                            justify-content-between
                            align-items-center
                            w-100
                            ">
                            <p className="m-0">Help &amp; Support</p>
                            <i className="fas fa-chevron-right" />
                          </div>
                        </div>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="dropdown-item d-flex align-items-center" href="#">
                              <div className="
                                rounded-circle
                                p-1
                                bg-gray
                                d-flex
                                align-items-center
                                justify-content-center
                                me-2
                                " style={{width: '38px', height: '38px'}}>
                                <i className="fas fa-cog" />
                              </div>
                              <p className="m-0">Settings</p>
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item d-flex align-items-center" href="#">
                              <div className="
                                rounded-circle
                                p-1
                                bg-gray
                                d-flex
                                align-items-center
                                justify-content-center
                                me-2
                                " style={{width: '38px', height: '38px'}}>
                                <i className="fas fa-lock" />
                              </div>
                              <p className="m-0">Privacy Checkup</p>
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item d-flex align-items-center" href="#">
                              <div className="
                                rounded-circle
                                p-1
                                bg-gray
                                d-flex
                                align-items-center
                                justify-content-center
                                me-2
                                " style={{width: '38px', height: '38px'}}>
                                <i className="fas fa-unlock-alt" />
                              </div>
                              <p className="m-0">Privacy Shortcuts</p>
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item d-flex align-items-center" href="#">
                              <div className="
                                rounded-circle
                                p-1
                                bg-gray
                                d-flex
                                align-items-center
                                justify-content-center
                                me-2
                                " style={{width: '38px', height: '38px'}}>
                                <i className="fas fa-list" />
                              </div>
                              <p className="m-0">Activity Log</p>
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item d-flex align-items-center" href="#">
                              <div className="
                                rounded-circle
                                p-1
                                bg-gray
                                d-flex
                                align-items-center
                                justify-content-center
                                me-2
                                " style={{width: '38px', height: '38px'}}>
                                <i className="fas fa-newspaper" />
                              </div>
                              <p className="m-0">News Feed Preferences</p>
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item d-flex align-items-center" href="#">
                              <div className="
                                rounded-circle
                                p-1
                                bg-gray
                                d-flex
                                align-items-center
                                justify-content-center
                                me-2
                                " style={{width: '38px', height: '38px'}}>
                                <i className="fas fa-globe" />
                              </div>
                              <p className="m-0">Language</p>
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown-item p-1 my-3 rounded" type="button">
                    <ul className="navbar-nav">
                      <li className="nav-item">
                        <div className="d-flex" data-bs-toggle="dropdown">
                          <i className="fas fa-moon bg-gray p-2 rounded-circle" />
                          <div className="
                            ms-3
                            d-flex
                            justify-content-between
                            align-items-center
                            w-100
                            ">
                            <p className="m-0">Display &amp; Accessibility</p>
                            <i className="fas fa-chevron-right" />
                          </div>
                        </div>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="dropdown-item d-flex align-items-center" href="#">
                              <div className="
                                rounded-circle
                                p-1
                                bg-gray
                                d-flex
                                align-items-center
                                justify-content-center
                                me-2
                                " style={{width: '38px', height: '38px'}}>
                                <i className="fas fa-cog" />
                              </div>
                              <p className="m-0">Settings</p>
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item d-flex align-items-center" href="#">
                              <div className="
                                rounded-circle
                                p-1
                                bg-gray
                                d-flex
                                align-items-center
                                justify-content-center
                                me-2
                                " style={{width: '38px', height: '38px'}}>
                                <i className="fas fa-lock" />
                              </div>
                              <p className="m-0">Privacy Checkup</p>
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item d-flex align-items-center" href="#">
                              <div className="
                                rounded-circle
                                p-1
                                bg-gray
                                d-flex
                                align-items-center
                                justify-content-center
                                me-2
                                " style={{width: '38px', height: '38px'}}>
                                <i className="fas fa-unlock-alt" />
                              </div>
                              <p className="m-0">Privacy Shortcuts</p>
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item d-flex align-items-center" href="#">
                              <div className="
                                rounded-circle
                                p-1
                                bg-gray
                                d-flex
                                align-items-center
                                justify-content-center
                                me-2
                                " style={{width: '38px', height: '38px'}}>
                                <i className="fas fa-list" />
                              </div>
                              <p className="m-0">Activity Log</p>
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item d-flex align-items-center" href="#">
                              <div className="
                                rounded-circle
                                p-1
                                bg-gray
                                d-flex
                                align-items-center
                                justify-content-center
                                me-2
                                " style={{width: '38px', height: '38px'}}>
                                <i className="fas fa-newspaper" />
                              </div>
                              <p className="m-0">News Feed Preferences</p>
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item d-flex align-items-center" href="#">
                              <div className="
                                rounded-circle
                                p-1
                                bg-gray
                                d-flex
                                align-items-center
                                justify-content-center
                                me-2
                                " style={{width: '38px', height: '38px'}}>
                                <i className="fas fa-globe" />
                              </div>
                              <p className="m-0">Language</p>
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown-item p-1 my-3 rounded" type="button">
                    <ul className="navbar-nav">
                      <li className="nav-item">
                        <a href="./index.html" className="d-flex text-decoration-none text-dark">
                          <i className="fas fa-cog bg-gray p-2 rounded-circle" />
                          <div className="
                            ms-3
                            d-flex
                            justify-content-between
                            align-items-center
                            w-100
                            ">
                            <p className="m-0">Log Out</p>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="modal fade" id="newChat" tabIndex={-1} aria-labelledby="newChatLabel" aria-hidden="true" data-bs-backdrop="false">
          <div className="
            modal-dialog modal-sm
            position-absolute
            bottom-0
            end-0
            w-75
            shadow
            " style={{transform: 'translateX(-80px)'}}>
            <div className="modal-content border-0">
              <div className="modal-header align-items-start">
                <div>
                  <h6 className="modal-title text-dark mb-2" id="newChat1Label">
                    New Message
                  </h6>
                  <label className="text-dark">To:</label>
                  <input type="text" className="border-0" />
                </div>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body shadow m-0 chat-border">
                <p className="m-0 text-primary ms-4">Suggested</p>
              </div>
              <div className="modal-footer border-0" style={{minHeight: '300px'}} />
            </div>
          </div>
        </div>
        <div className="modal fade" id="singleChat1" tabIndex={-1} aria-labelledby="singleChat1Label" aria-hidden="true" data-bs-backdrop="false">
          <div className="modal-dialog modal-sm position-absolute bottom-0 end-0 w-17" style={{transform: 'translateX(-80px)'}}>
            <div className="modal-content border-0 shadow">
              <div className="modal-header">
                <div className="dropdown-item d-flex rounded" type="button" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="left" data-bs-content="
                <div>
                    <div className=&quot;popover-body d-flex flex-column p-0&quot;>
                    <div className=&quot;d-flex align-items-center dropdown-item p-2 rounded pointer&quot;>
                        <i className=&quot;far fa-comment me-3 fs-4&quot;></i>
                        <p className=&quot;m-0&quot;>Open Messenger App</p>
                    </div>
                    <div className=&quot;d-flex align-items-center dropdown-item p-2 rounded pointer&quot;>
                        <i className=&quot;far fa-user me-3 fs-4&quot;></i>
                        <p className=&quot;m-0&quot;>Open Messenger App</p>
                    </div>
                    <hr>
                    <div className=&quot;d-flex align-items-center dropdown-item p-2 rounded pointer&quot;>
                        <i className=&quot;fas fa-fill-drip me-3 fs-4&quot;></i>
                        <p className=&quot;m-0&quot;>Color</p>
                    </div>
                    <div className=&quot;d-flex align-items-center dropdown-item p-2 rounded pointer&quot;>
                        <i className=&quot;far fa-smile-beam me-3 fs-4&quot;></i>
                        <p className=&quot;m-0&quot;>Emoji</p>
                    </div>
                    <div className=&quot;d-flex align-items-center dropdown-item p-2 rounded pointer&quot;>
                        <i className=&quot;fas fa-pencil-alt me-3 fs-4&quot;></i>
                        <p className=&quot;m-0&quot;>Nicknames</p>
                    </div>
                    </div>
                </div>
                " data-bs-html="true">
                  <div className="position-relative">
                    <img src="https://source.unsplash.com/random/1" alt="avatar" className="rounded-circle me-2" style={{width: '38px', height: '38px', objectFit: 'cover'}} />
                    <span className="
                        position-absolute
                        bottom-0
                        translate-middle
                        p-1
                        bg-success
                        border border-light
                        rounded-circle
                    " style={{left: '75%'}}>
                      <span className="visually-hidden">New alerts</span>
                    </span>
                  </div>
                  <div>
                    <p className="m-0">Mike <i className="fas fa-angle-down" /></p>
                    <span className="text-muted fs-7">Active Now</span>
                  </div>
                </div>
                <i className="fas fa-video mx-2 text-muted pointer" />
                <i className="fas fa-phone-alt mx-2 text-muted pointer" />
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body p-0 overflow-auto" style={{maxHeight: '300px'}}>
                <li className="list-group-item border-0 d-flex">
                  <div>
                    <img src="https://source.unsplash.com/random/1" alt="avatar" className="rounded-circle me-2" style={{width: '28px', height: '28px', objectFit: 'cover'}} />
                  </div>
                  <p className="bg-gray p-2 rounded">Lorem, ipsum dolor</p>
                </li>
                <li className="list-group-item border-0 d-flex justify-content-end">
                  <p className="bg-gray p-2 rounded">Lorem, ipsum dolor</p>
                  <div>
                    <img src="https://source.unsplash.com/collection/happy-people" alt="avatar" className="rounded-circle ms-2" style={{width: '28px', height: '28px', objectFit: 'cover'}} />
                  </div>
                </li>
                <li className="list-group-item border-0 d-flex">
                  <div>
                    <img src="https://source.unsplash.com/random/1" alt="avatar" className="rounded-circle me-2" style={{width: '28px', height: '28px', objectFit: 'cover'}} />
                  </div>
                  <p className="bg-gray p-2 rounded">Lorem, ipsum dolor</p>
                </li>
                <li className="list-group-item border-0 d-flex justify-content-end">
                  <p className="bg-gray p-2 rounded">Lorem, ipsum dolor</p>
                  <div>
                    <img src="https://source.unsplash.com/collection/happy-people" alt="avatar" className="rounded-circle ms-2" style={{width: '28px', height: '28px', objectFit: 'cover'}} />
                  </div>
                </li>
                <li className="list-group-item border-0 d-flex">
                  <div>
                    <img src="https://source.unsplash.com/random/1" alt="avatar" className="rounded-circle me-2" style={{width: '28px', height: '28px', objectFit: 'cover'}} />
                  </div>
                  <p className="bg-gray p-2 rounded">Lorem, ipsum dolor</p>
                </li>
                <li className="list-group-item border-0 d-flex justify-content-end">
                  <p className="bg-gray p-2 rounded">Lorem, ipsum dolor</p>
                  <div>
                    <img src="https://source.unsplash.com/collection/happy-people" alt="avatar" className="rounded-circle ms-2" style={{width: '28px', height: '28px', objectFit: 'cover'}} />
                  </div>
                </li>
              </div>
              <div className="modal-footer p-0 m-0 border-0">
                <div className="d-flex">
                  <div className="d-flex align-items-center">
                    <i className="fas fa-plus-circle mx-1 fs-5 text-muted pointer" />
                    <i className="far fa-file-image mx-1 fs-5 text-muted pointer" />
                    <i className="fas fa-portrait mx-1 fs-5 text-muted pointer" />
                    <i className="fas fa-adjust mx-1 fs-5 text-muted pointer" />
                  </div>
                  <div>
                    <input type="text" className="form-control rounded-pill border-0 bg-gray" placeholder="Aa" />
                  </div>
                  <div className="d-flex align-items-center mx-2">
                    <i className="fas fa-thumbs-up fs-5 text-muted pointer" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="modal fade" id="singleChat2" tabIndex={-1} aria-labelledby="singleChat2Label" aria-hidden="true" data-bs-backdrop="false">
          <div className="modal-dialog modal-sm position-absolute bottom-0 end-0 w-17" style={{transform: 'translateX(-80px)'}}>
            <div className="modal-content border-0 shadow">
              <div className="modal-header">
                <div className="dropdown-item d-flex rounded" type="button" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="left" data-bs-content="
                    <div>
                    <div className=&quot;popover-body d-flex flex-column p-0&quot;>
                        <div className=&quot;d-flex align-items-center dropdown-item p-2 rounded pointer&quot;>
                        <i className=&quot;far fa-comment me-3 fs-4&quot;></i>
                        <p className=&quot;m-0&quot;>Open Messenger App</p>
                        </div>
                        <div className=&quot;d-flex align-items-center dropdown-item p-2 rounded pointer&quot;>
                        <i className=&quot;far fa-user me-3 fs-4&quot;></i>
                        <p className=&quot;m-0&quot;>Open Messenger App</p>
                        </div>
                        <hr>
                        <div className=&quot;d-flex align-items-center dropdown-item p-2 rounded pointer&quot;>
                        <i className=&quot;fas fa-fill-drip me-3 fs-4&quot;></i>
                        <p className=&quot;m-0&quot;>Color</p>
                        </div>
                        <div className=&quot;d-flex align-items-center dropdown-item p-2 rounded pointer&quot;>
                        <i className=&quot;far fa-smile-beam me-3 fs-4&quot;></i>
                        <p className=&quot;m-0&quot;>Emoji</p>
                        </div>
                        <div className=&quot;d-flex align-items-center dropdown-item p-2 rounded pointer&quot;>
                        <i className=&quot;fas fa-pencil-alt me-3 fs-4&quot;></i>
                        <p className=&quot;m-0&quot;>Nicknames</p>
                        </div>
                    </div>
                    </div>
                    " data-bs-html="true">
                  <div className="position-relative">
                    <img src="https://source.unsplash.com/random/2" alt="avatar" className="rounded-circle me-2" style={{width: '38px', height: '38px', objectFit: 'cover'}} />
                    <span className="
                        position-absolute
                        bottom-0
                        translate-middle
                        p-1
                        bg-success
                        border border-light
                        rounded-circle
                    " style={{left: '75%'}}>
                      <span className="visually-hidden">New alerts</span>
                    </span>
                  </div>
                  <div>
                    <p className="m-0">Tuan <i className="fas fa-angle-down" /></p>
                    <span className="text-muted fs-7">Active Now</span>
                  </div>
                </div>
                <i className="fas fa-video mx-2 text-muted pointer" />
                <i className="fas fa-phone-alt mx-2 text-muted pointer" />
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body p-0 overflow-auto" style={{maxHeight: '300px'}}>
                <li className="list-group-item border-0 d-flex">
                  <div>
                    <img src="https://source.unsplash.com/random/2" alt="avatar" className="rounded-circle me-2" style={{width: '28px', height: '28px', objectFit: 'cover'}} />
                  </div>
                  <p className="bg-gray p-2 rounded">Lorem, ipsum dolor</p>
                </li>
                <li className="list-group-item border-0 d-flex justify-content-end">
                  <p className="bg-gray p-2 rounded">Lorem, ipsum dolor</p>
                  <div>
                    <img src="https://source.unsplash.com/collection/happy-people" alt="avatar" className="rounded-circle ms-2" style={{width: '28px', height: '28px', objectFit: 'cover'}} />
                  </div>
                </li>
                <li className="list-group-item border-0 d-flex">
                  <div>
                    <img src="https://source.unsplash.com/random/2" alt="avatar" className="rounded-circle me-2" style={{width: '28px', height: '28px', objectFit: 'cover'}} />
                  </div>
                  <p className="bg-gray p-2 rounded">Lorem, ipsum dolor</p>
                </li>
                <li className="list-group-item border-0 d-flex justify-content-end">
                  <p className="bg-gray p-2 rounded">Lorem, ipsum dolor</p>
                  <div>
                    <img src="https://source.unsplash.com/collection/happy-people" alt="avatar" className="rounded-circle ms-2" style={{width: '28px', height: '28px', objectFit: 'cover'}} />
                  </div>
                </li>
                <li className="list-group-item border-0 d-flex">
                  <div>
                    <img src="https://source.unsplash.com/random/2" alt="avatar" className="rounded-circle me-2" style={{width: '28px', height: '28px', objectFit: 'cover'}} />
                  </div>
                  <p className="bg-gray p-2 rounded">Lorem, ipsum dolor</p>
                </li>
                <li className="list-group-item border-0 d-flex justify-content-end">
                  <p className="bg-gray p-2 rounded">Lorem, ipsum dolor</p>
                  <div>
                    <img src="https://source.unsplash.com/collection/happy-people" alt="avatar" className="rounded-circle ms-2" style={{width: '28px', height: '28px', objectFit: 'cover'}} />
                  </div>
                </li>
              </div>
              <div className="modal-footer p-0 m-0 border-0">
                <div className="d-flex">
                  <div className="d-flex align-items-center">
                    <i className="fas fa-plus-circle mx-1 fs-5 text-muted pointer" />
                    <i className="far fa-file-image mx-1 fs-5 text-muted pointer" />
                    <i className="fas fa-portrait mx-1 fs-5 text-muted pointer" />
                    <i className="fas fa-adjust mx-1 fs-5 text-muted pointer" />
                  </div>
                  <div>
                    <input type="text" className="form-control rounded-pill border-0 bg-gray" placeholder="Aa" />
                  </div>
                  <div className="d-flex align-items-center mx-2">
                    <i className="fas fa-thumbs-up fs-5 text-muted pointer" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="modal fade" id="singleChat3" tabIndex={-1} aria-labelledby="singleChat3Label" aria-hidden="true" data-bs-backdrop="false">
          <div className="modal-dialog modal-sm position-absolute bottom-0 end-0 w-17" style={{transform: 'translateX(-80px)'}}>
            <div className="modal-content border-0 shadow">
              <div className="modal-header">
                <div className="dropdown-item d-flex rounded" type="button" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="left" data-bs-content="
                        <div>
                        <div className=&quot;popover-body d-flex flex-column p-0&quot;>
                            <div className=&quot;d-flex align-items-center dropdown-item p-2 rounded pointer&quot;>
                            <i className=&quot;far fa-comment me-3 fs-4&quot;></i>
                            <p className=&quot;m-0&quot;>Open Messenger App</p>
                            </div>
                            <div className=&quot;d-flex align-items-center dropdown-item p-2 rounded pointer&quot;>
                            <i className=&quot;far fa-user me-3 fs-4&quot;></i>
                            <p className=&quot;m-0&quot;>Open Messenger App</p>
                            </div>
                            <hr>
                            <div className=&quot;d-flex align-items-center dropdown-item p-2 rounded pointer&quot;>
                            <i className=&quot;fas fa-fill-drip me-3 fs-4&quot;></i>
                            <p className=&quot;m-0&quot;>Color</p>
                            </div>
                            <div className=&quot;d-flex align-items-center dropdown-item p-2 rounded pointer&quot;>
                            <i className=&quot;far fa-smile-beam me-3 fs-4&quot;></i>
                            <p className=&quot;m-0&quot;>Emoji</p>
                            </div>
                            <div className=&quot;d-flex align-items-center dropdown-item p-2 rounded pointer&quot;>
                            <i className=&quot;fas fa-pencil-alt me-3 fs-4&quot;></i>
                            <p className=&quot;m-0&quot;>Nicknames</p>
                            </div>
                        </div>
                        </div>
                        " data-bs-html="true">
                  <div className="position-relative">
                    <img src="https://source.unsplash.com/random/2" alt="avatar" className="rounded-circle me-2" style={{width: '38px', height: '38px', objectFit: 'cover'}} />
                    <span className="
                        position-absolute
                        bottom-0
                        translate-middle
                        p-1
                        bg-success
                        border border-light
                        rounded-circle
                    " style={{left: '75%'}}>
                      <span className="visually-hidden">New alerts</span>
                    </span>
                  </div>
                  <div>
                    <p className="m-0">Jerry <i className="fas fa-angle-down" /></p>
                    <span className="text-muted fs-7">Active Now</span>
                  </div>
                </div>
                <i className="fas fa-video mx-2 text-muted pointer" />
                <i className="fas fa-phone-alt mx-2 text-muted pointer" />
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body p-0 overflow-auto" style={{maxHeight: '300px'}}>
                <li className="list-group-item border-0 d-flex">
                  <div>
                    <img src="https://source.unsplash.com/random/3" alt="avatar" className="rounded-circle me-2" style={{width: '28px', height: '28px', objectFit: 'cover'}} />
                  </div>
                  <p className="bg-gray p-2 rounded">Lorem, ipsum dolor</p>
                </li>
                <li className="list-group-item border-0 d-flex justify-content-end">
                  <p className="bg-gray p-2 rounded">Lorem, ipsum dolor</p>
                  <div>
                    <img src="https://source.unsplash.com/collection/happy-people" alt="avatar" className="rounded-circle ms-2" style={{width: '28px', height: '28px', objectFit: 'cover'}} />
                  </div>
                </li>
                <li className="list-group-item border-0 d-flex">
                  <div>
                    <img src="https://source.unsplash.com/random/3" alt="avatar" className="rounded-circle me-2" style={{width: '28px', height: '28px', objectFit: 'cover'}} />
                  </div>
                  <p className="bg-gray p-2 rounded">Lorem, ipsum dolor</p>
                </li>
                <li className="list-group-item border-0 d-flex justify-content-end">
                  <p className="bg-gray p-2 rounded">Lorem, ipsum dolor</p>
                  <div>
                    <img src="https://source.unsplash.com/collection/happy-people" alt="avatar" className="rounded-circle ms-2" style={{width: '28px', height: '28px', objectFit: 'cover'}} />
                  </div>
                </li>
                <li className="list-group-item border-0 d-flex">
                  <div>
                    <img src="https://source.unsplash.com/random/3" alt="avatar" className="rounded-circle me-2" style={{width: '28px', height: '28px', objectFit: 'cover'}} />
                  </div>
                  <p className="bg-gray p-2 rounded">Lorem, ipsum dolor</p>
                </li>
                <li className="list-group-item border-0 d-flex justify-content-end">
                  <p className="bg-gray p-2 rounded">Lorem, ipsum dolor</p>
                  <div>
                    <img src="https://source.unsplash.com/collection/happy-people" alt="avatar" className="rounded-circle ms-2" style={{width: '28px', height: '28px', objectFit: 'cover'}} />
                  </div>
                </li>
              </div>
              <div className="modal-footer p-0 m-0 border-0">
                <div className="d-flex">
                  <div className="d-flex align-items-center">
                    <i className="fas fa-plus-circle mx-1 fs-5 text-muted pointer" />
                    <i className="far fa-file-image mx-1 fs-5 text-muted pointer" />
                    <i className="fas fa-portrait mx-1 fs-5 text-muted pointer" />
                    <i className="fas fa-adjust mx-1 fs-5 text-muted pointer" />
                  </div>
                  <div>
                    <input type="text" className="form-control rounded-pill border-0 bg-gray" placeholder="Aa" />
                  </div>
                  <div className="d-flex align-items-center mx-2">
                    <i className="fas fa-thumbs-up fs-5 text-muted pointer" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="modal fade" id="singleChat4" tabIndex={-1} aria-labelledby="singleChat4Label" aria-hidden="true" data-bs-backdrop="false">
          <div className="modal-dialog modal-sm position-absolute bottom-0 end-0 w-17" style={{transform: 'translateX(-80px)'}}>
            <div className="modal-content border-0 shadow">
              <div className="modal-header">
                <div className="dropdown-item d-flex rounded" type="button" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="left" data-bs-content="
                        <div>
                            <div className=&quot;popover-body d-flex flex-column p-0&quot;>
                            <div className=&quot;d-flex align-items-center dropdown-item p-2 rounded pointer&quot;>
                                <i className=&quot;far fa-comment me-3 fs-4&quot;></i>
                                <p className=&quot;m-0&quot;>Open Messenger App</p>
                            </div>
                            <div className=&quot;d-flex align-items-center dropdown-item p-2 rounded pointer&quot;>
                                <i className=&quot;far fa-user me-3 fs-4&quot;></i>
                                <p className=&quot;m-0&quot;>Open Messenger App</p>
                            </div>
                            <hr>
                            <div className=&quot;d-flex align-items-center dropdown-item p-2 rounded pointer&quot;>
                                <i className=&quot;fas fa-fill-drip me-3 fs-4&quot;></i>
                                <p className=&quot;m-0&quot;>Color</p>
                            </div>
                            <div className=&quot;d-flex align-items-center dropdown-item p-2 rounded pointer&quot;>
                                <i className=&quot;far fa-smile-beam me-3 fs-4&quot;></i>
                                <p className=&quot;m-0&quot;>Emoji</p>
                            </div>
                            <div className=&quot;d-flex align-items-center dropdown-item p-2 rounded pointer&quot;>
                                <i className=&quot;fas fa-pencil-alt me-3 fs-4&quot;></i>
                                <p className=&quot;m-0&quot;>Nicknames</p>
                            </div>
                            </div>
                        </div>
                        " data-bs-html="true">
                  <div className="position-relative">
                    <img src="https://source.unsplash.com/random/2" alt="avatar" className="rounded-circle me-2" style={{width: '38px', height: '38px', objectFit: 'cover'}} />
                    <span className="
                        position-absolute
                        bottom-0
                        translate-middle
                        p-1
                        bg-success
                        border border-light
                        rounded-circle
                    " style={{left: '75%'}}>
                      <span className="visually-hidden">New alerts</span>
                    </span>
                  </div>
                  <div>
                    <p className="m-0">Tony <i className="fas fa-angle-down" /></p>
                    <span className="text-muted fs-7">Active Now</span>
                  </div>
                </div>
                <i className="fas fa-video mx-2 text-muted pointer" />
                <i className="fas fa-phone-alt mx-2 text-muted pointer" />
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body p-0 overflow-auto" style={{maxHeight: '300px'}}>
                <li className="list-group-item border-0 d-flex">
                  <div>
                    <img src="https://source.unsplash.com/random/4" alt="avatar" className="rounded-circle me-2" style={{width: '28px', height: '28px', objectFit: 'cover'}} />
                  </div>
                  <p className="bg-gray p-2 rounded">Lorem, ipsum dolor</p>
                </li>
                <li className="list-group-item border-0 d-flex justify-content-end">
                  <p className="bg-gray p-2 rounded">Lorem, ipsum dolor</p>
                  <div>
                    <img src="https://source.unsplash.com/collection/happy-people" alt="avatar" className="rounded-circle ms-2" style={{width: '28px', height: '28px', objectFit: 'cover'}} />
                  </div>
                </li>
                <li className="list-group-item border-0 d-flex">
                  <div>
                    <img src="https://source.unsplash.com/random/4" alt="avatar" className="rounded-circle me-2" style={{width: '28px', height: '28px', objectFit: 'cover'}} />
                  </div>
                  <p className="bg-gray p-2 rounded">Lorem, ipsum dolor</p>
                </li>
                <li className="list-group-item border-0 d-flex justify-content-end">
                  <p className="bg-gray p-2 rounded">Lorem, ipsum dolor</p>
                  <div>
                    <img src="https://source.unsplash.com/collection/happy-people" alt="avatar" className="rounded-circle ms-2" style={{width: '28px', height: '28px', objectFit: 'cover'}} />
                  </div>
                </li>
                <li className="list-group-item border-0 d-flex">
                  <div>
                    <img src="https://source.unsplash.com/random/4" alt="avatar" className="rounded-circle me-2" style={{width: '28px', height: '28px', objectFit: 'cover'}} />
                  </div>
                  <p className="bg-gray p-2 rounded">Lorem, ipsum dolor</p>
                </li>
                <li className="list-group-item border-0 d-flex justify-content-end">
                  <p className="bg-gray p-2 rounded">Lorem, ipsum dolor</p>
                  <div>
                    <img src="https://source.unsplash.com/collection/happy-people" alt="avatar" className="rounded-circle ms-2" style={{width: '28px', height: '28px', objectFit: 'cover'}} />
                  </div>
                </li>
              </div>
              <div className="modal-footer p-0 m-0 border-0">
                <div className="d-flex">
                  <div className="d-flex align-items-center">
                    <i className="fas fa-plus-circle mx-1 fs-5 text-muted pointer" />
                    <i className="far fa-file-image mx-1 fs-5 text-muted pointer" />
                    <i className="fas fa-portrait mx-1 fs-5 text-muted pointer" />
                    <i className="fas fa-adjust mx-1 fs-5 text-muted pointer" />
                  </div>
                  <div>
                    <input type="text" className="form-control rounded-pill border-0 bg-gray" placeholder="Aa" />
                  </div>
                  <div className="d-flex align-items-center mx-2">
                    <i className="fas fa-thumbs-up fs-5 text-muted pointer" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="modal fade" id="singleChat5" tabIndex={-1} aria-labelledby="singleChat5Label" aria-hidden="true" data-bs-backdrop="false">
          <div className="modal-dialog modal-sm position-absolute bottom-0 end-0 w-17" style={{transform: 'translateX(-80px)'}}>
            <div className="modal-content border-0 shadow">
              <div className="modal-header">
                <div className="dropdown-item d-flex rounded" type="button" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="left" data-bs-content="
                            <div>
                                <div className=&quot;popover-body d-flex flex-column p-0&quot;>
                                <div className=&quot;d-flex align-items-center dropdown-item p-2 rounded pointer&quot;>
                                    <i className=&quot;far fa-comment me-3 fs-4&quot;></i>
                                    <p className=&quot;m-0&quot;>Open Messenger App</p>
                                </div>
                                <div className=&quot;d-flex align-items-center dropdown-item p-2 rounded pointer&quot;>
                                    <i className=&quot;far fa-user me-3 fs-4&quot;></i>
                                    <p className=&quot;m-0&quot;>Open Messenger App</p>
                                </div>
                                <hr>
                                <div className=&quot;d-flex align-items-center dropdown-item p-2 rounded pointer&quot;>
                                    <i className=&quot;fas fa-fill-drip me-3 fs-4&quot;></i>
                                    <p className=&quot;m-0&quot;>Color</p>
                                </div>
                                <div className=&quot;d-flex align-items-center dropdown-item p-2 rounded pointer&quot;>
                                    <i className=&quot;far fa-smile-beam me-3 fs-4&quot;></i>
                                    <p className=&quot;m-0&quot;>Emoji</p>
                                </div>
                                <div className=&quot;d-flex align-items-center dropdown-item p-2 rounded pointer&quot;>
                                    <i className=&quot;fas fa-pencil-alt me-3 fs-4&quot;></i>
                                    <p className=&quot;m-0&quot;>Nicknames</p>
                                </div>
                                </div>
                            </div>
                            " data-bs-html="true">
                  <div className="position-relative">
                    <img src="https://source.unsplash.com/random/2" alt="avatar" className="rounded-circle me-2" style={{width: '38px', height: '38px', objectFit: 'cover'}} />
                    <span className="
                        position-absolute
                        bottom-0
                        translate-middle
                        p-1
                        bg-success
                        border border-light
                        rounded-circle
                    " style={{left: '75%'}}>
                      <span className="visually-hidden">New alerts</span>
                    </span>
                  </div>
                  <div>
                    <p className="m-0">Phu <i className="fas fa-angle-down" /></p>
                    <span className="text-muted fs-7">Active Now</span>
                  </div>
                </div>
                <i className="fas fa-video mx-2 text-muted pointer" />
                <i className="fas fa-phone-alt mx-2 text-muted pointer" />
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body p-0 overflow-auto" style={{maxHeight: '300px'}}>
                <li className="list-group-item border-0 d-flex">
                  <div>
                    <img src="https://source.unsplash.com/random/5" alt="avatar" className="rounded-circle me-2" style={{width: '28px', height: '28px', objectFit: 'cover'}} />
                  </div>
                  <p className="bg-gray p-2 rounded">Lorem, ipsum dolor</p>
                </li>
                <li className="list-group-item border-0 d-flex justify-content-end">
                  <p className="bg-gray p-2 rounded">Lorem, ipsum dolor</p>
                  <div>
                    <img src="https://source.unsplash.com/collection/happy-people" alt="avatar" className="rounded-circle ms-2" style={{width: '28px', height: '28px', objectFit: 'cover'}} />
                  </div>
                </li>
                <li className="list-group-item border-0 d-flex">
                  <div>
                    <img src="https://source.unsplash.com/random/5" alt="avatar" className="rounded-circle me-2" style={{width: '28px', height: '28px', objectFit: 'cover'}} />
                  </div>
                  <p className="bg-gray p-2 rounded">Lorem, ipsum dolor</p>
                </li>
                <li className="list-group-item border-0 d-flex justify-content-end">
                  <p className="bg-gray p-2 rounded">Lorem, ipsum dolor</p>
                  <div>
                    <img src="https://source.unsplash.com/collection/happy-people" alt="avatar" className="rounded-circle ms-2" style={{width: '28px', height: '28px', objectFit: 'cover'}} />
                  </div>
                </li>
                <li className="list-group-item border-0 d-flex">
                  <div>
                    <img src="https://source.unsplash.com/random/5" alt="avatar" className="rounded-circle me-2" style={{width: '28px', height: '28px', objectFit: 'cover'}} />
                  </div>
                  <p className="bg-gray p-2 rounded">Lorem, ipsum dolor</p>
                </li>
                <li className="list-group-item border-0 d-flex justify-content-end">
                  <p className="bg-gray p-2 rounded">Lorem, ipsum dolor</p>
                  <div>
                    <img src="https://source.unsplash.com/collection/happy-people" alt="avatar" className="rounded-circle ms-2" style={{width: '28px', height: '28px', objectFit: 'cover'}} />
                  </div>
                </li>
              </div>
              <div className="modal-footer p-0 m-0 border-0">
                <div className="d-flex">
                  <div className="d-flex align-items-center">
                    <i className="fas fa-plus-circle mx-1 fs-5 text-muted pointer" />
                    <i className="far fa-file-image mx-1 fs-5 text-muted pointer" />
                    <i className="fas fa-portrait mx-1 fs-5 text-muted pointer" />
                    <i className="fas fa-adjust mx-1 fs-5 text-muted pointer" />
                  </div>
                  <div>
                    <input type="text" className="form-control rounded-pill border-0 bg-gray" placeholder="Aa" />
                  </div>
                  <div className="d-flex align-items-center mx-2">
                    <i className="fas fa-thumbs-up fs-5 text-muted pointer" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row justify-content-evenly">
            <div className="col-12 col-lg-3">
              <div className="d-none d-xxl-block h-100 overflow-hidden scrollbar" style={{maxWidth: '360px', width: '100%', zIndex: 4}}>
                <ul className="navbar-nav mt-4 ms-3 d-flex flex-column pb-5 mb-5" style={{paddingTop: '56px'}}>
                  <li className="dropdown-item p-1 rounded">
                    <a href="#" className="
                        d-flex
                        align-items-center
                        text-decoration-none text-dark
                    ">
                      <div className="p-2">
                        <img src="https://source.unsplash.com/collection/happy-people" alt="avatar" className="rounded-circle me-2" style={{width: '38px', height: '38px', objectFit: 'cover'}} />
                      </div>
                      <div>
                        <p className="m-0">John</p>
                      </div>
                    </a>
                  </li>
                  <li className="dropdown-item p-1 rounded">
                    <a href="#" className="
                        d-flex
                        align-items-center
                        text-decoration-none text-dark
                    ">
                      <div className="p-2">
                        <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/tSXYIzZlfrS.png" alt="from fb" className="rounded-circle" style={{width: '38px', height: '38px', objectFit: 'cover'}} />
                      </div>
                      <div>
                        <p className="m-0">Friends</p>
                      </div>
                    </a>
                  </li>
                  <li className="dropdown-item p-1 rounded">
                    <a href="#" className="
                        d-flex
                        align-items-center
                        text-decoration-none text-dark
                    ">
                      <div className="p-2">
                        <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/Im_0d7HFH4n.png" alt="from fb" className="rounded-circle" style={{width: '38px', height: '38px', objectFit: 'cover'}} />
                      </div>
                      <div>
                        <p className="m-0">Groups</p>
                        <i className="fas fa-circle text-primary" style={{fontSize: '0.5rem !important'}} />
                        <span className="fs-7 text-primary"> 1 new</span>
                      </div>
                    </a>
                  </li>
                  <li className="dropdown-item p-1">
                    <a href="#" className="
                        d-flex
                        align-items-center
                        justify-content-between
                        text-decoration-none text-dark
                    ">
                      <div className="d-flex align-items-center justify-content-evenly">
                        <div className="p-2">
                          <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/0gH3vbvr8Ee.png" alt="from fb" className="rounded-circle" style={{width: '38px', height: '38px', objectFit: 'cover'}} />
                        </div>
                        <div>
                          <p className="m-0">Pages</p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="dropdown-item p-1">
                    <a href="#" className="
                        d-flex
                        align-items-center
                        justify-content-between
                        text-decoration-none text-dark
                    ">
                      <div className="d-flex align-items-center justify-content-evenly">
                        <div className="p-2">
                          <img src="https://static.xx.fbcdn.net/rsrc.php/v3/y4/r/MN44Sm-CTHN.png" alt="from fb" className="rounded-circle" style={{width: '38px', height: '38px', objectFit: 'cover'}} />
                        </div>
                        <div>
                          <p className="m-0">Marketplace</p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="dropdown-item p-1">
                    <a href="#" className="
                        d-flex
                        align-items-center
                        justify-content-between
                        text-decoration-none text-dark
                    ">
                      <div className="d-flex align-items-center justify-content-evenly">
                        <div className="p-2">
                          <img src="https://static.xx.fbcdn.net/rsrc.php/v3/y-/r/FhOLTyUFKwf.png" alt="from fb" className="rounded-circle" style={{width: '38px', height: '38px', objectFit: 'cover'}} />
                        </div>
                        <div>
                          <p className="m-0">Watch</p>
                          <i className="fas fa-circle text-primary" style={{fontSize: '0.5rem !important'}} />
                          <span className="fs-7 text-primary"> 9+ new videos</span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="p-1" type="button">
                    <div id="accordionFlushExample">
                      <div>
                        <div className="d-flex align-items-center" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                          <div className="p-2">
                            <i className="fas fa-chevron-down rounded-circle p-2" style={{backgroundColor: '#d5d5d5 !important'}} />
                          </div>
                          <div>
                            <p className="m-0">See More</p>
                          </div>
                        </div>
                        <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                          <div>
                            <div className="
                                d-flex
                                align-items-center
                                dropdown-item
                                p-0
                                m-0
                            ">
                              <div className="p-2">
                                <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/Y7r38CcFEw5.png" alt="from fb" className="rounded-circle" style={{width: '38px', height: '38px', objectFit: 'cover'}} />
                              </div>
                              <div>
                                <p className="m-0">Campus</p>
                              </div>
                            </div>
                            <div className="
                                d-flex
                                align-items-center
                                dropdown-item
                                p-0
                                m-0
                            ">
                              <div className="p-2">
                                <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yx/r/N7UOh8REweU.png" alt="from fb" className="rounded-circle" style={{width: '38px', height: '38px', objectFit: 'cover'}} />
                              </div>
                              <div>
                                <p className="m-0">Events</p>
                              </div>
                            </div>
                            <div className="
                                d-flex
                                align-items-center
                                dropdown-item
                                p-0
                                m-0
                            ">
                              <div className="p-2">
                                <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yo/r/hLkEFzsCyXC.png" alt="from fb" className="rounded-circle" style={{width: '38px', height: '38px', objectFit: 'cover'}} />
                              </div>
                              <div>
                                <p className="m-0">Newsfeed</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <hr className="m-0" />
                  <div className="
                    d-flex
                    justify-content-between
                    align-items-center
                    mt-2
                    text-muted
                    edit-heading
                    ">
                    <h4 className="m-0 pointer">Your Shorcuts</h4>
                    <p className="m-0 text-primary me-3 pointer edit-button" type="button" data-bs-toggle="modal" data-bs-target="#shortCutModal">
                      Edit
                    </p>
                    <div className="modal fade" id="shortCutModal" tabIndex={-1} aria-labelledby="shortCutModalLabel" aria-hidden="true" data-bs-backdrop="false">
                      <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                          <div className="modal-header align-items-center">
                            <h5 className="text-dark text-center w-100 m-0" id="exampleModalLabel">
                              Edit Your ShortCuts
                            </h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                          </div>
                          <div className="modal-body">
                            <p className="text-muted">
                              Shortcuts provide quick access to what you do most on
                              Facebook. Your Shortcuts are sorted automatically, but
                              you can pin something so its always shown at the top
                              or hide it from the list.
                            </p>
                            <div className="p-1">
                              <div className="
                                input-group-text
                                bg-gray
                                border-0
                                rounded-pill
                                " style={{minHeight: '40px', minWidth: '230px'}}>
                                <i className="fas fa-search me-2 text-muted" />
                                <input type="text" className="form-control rounded-pill border-0 bg-gray" placeholder="Search your Pages, groups, games, and events" />
                              </div>
                            </div>
                            <li className="my-1 p-1">
                              <div className="
                                d-flex
                                align-items-center
                                justify-content-between
                                text-decoration-none text-dark
                                ">
                                <div className="
                                    d-flex
                                    align-items-center
                                    justify-content-evenly
                                ">
                                  <div className="p-2">
                                    <img src="https://source.unsplash.com/random/1" alt="from fb" className="
                                        rounded
                                        border border-1 border-secondary
                                    " style={{width: '38px', height: '38px', objectFit: 'cover'}} />
                                  </div>
                                  <div>
                                    <p className="m-0">Lorem Ipsum</p>
                                  </div>
                                </div>
                                <select className="form-select w-50 border-0 bg-gray" aria-label="Default select example">
                                  <option selected value={1}>
                                    Short Automatically
                                  </option>
                                  <option value={2}>Pin To Top</option>
                                  <option value={3}>Hide</option>
                                </select>
                              </div>
                            </li>
                            <li className="my-1 p-1">
                              <div className="
                                d-flex
                                align-items-center
                                justify-content-between
                                text-decoration-none text-dark
                                ">
                                <div className="
                                    d-flex
                                    align-items-center
                                    justify-content-evenly
                                ">
                                  <div className="p-2">
                                    <img src="https://source.unsplash.com/random/2" alt="from fb" className="
                                        rounded
                                        border border-1 border-secondary
                                    " style={{width: '38px', height: '38px', objectFit: 'cover'}} />
                                  </div>
                                  <div>
                                    <p className="m-0">Lorem Ipsum</p>
                                  </div>
                                </div>
                                <select className="form-select w-50 border-0 bg-gray" aria-label="Default select example">
                                  <option selected value={1}>
                                    Short Automatically
                                  </option>
                                  <option value={2}>Pin To Top</option>
                                  <option value={3}>Hide</option>
                                </select>
                              </div>
                            </li>
                            <li className="my-1 p-1">
                              <div className="
                                d-flex
                                align-items-center
                                justify-content-between
                                text-decoration-none text-dark
                                ">
                                <div className="
                                    d-flex
                                    align-items-center
                                    justify-content-evenly
                                ">
                                  <div className="p-2">
                                    <img src="https://source.unsplash.com/random/3" alt="from fb" className="
                                        rounded
                                        border border-1 border-secondary
                                    " style={{width: '38px', height: '38px', objectFit: 'cover'}} />
                                  </div>
                                  <div>
                                    <p className="m-0">Lorem Ipsum</p>
                                  </div>
                                </div>
                                <select className="form-select w-50 border-0 bg-gray" aria-label="Default select example">
                                  <option selected value={1}>
                                    Short Automatically
                                  </option>
                                  <option value={2}>Pin To Top</option>
                                  <option value={3}>Hide</option>
                                </select>
                              </div>
                            </li>
                          </div>
                          <div className="modal-footer">
                            <button type="button" className="btn btn-light text-primary" data-bs-dismiss="modal">
                              Close
                            </button>
                            <button type="button" className="btn btn-primary">
                              Save changes
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <li className="dropdown-item p-1">
                    <a href="#" className="
                        d-flex
                        align-items-center
                        text-decoration-none text-dark
                    ">
                      <div className="p-2">
                        <img src="https://source.unsplash.com/random/1" alt="from fb" className="rounded border border-1 border-secondary" style={{width: '38px', height: '38px', objectFit: 'cover'}} />
                      </div>
                      <div>
                        <p className="m-0">Lorem Ipsum</p>
                      </div>
                    </a>
                  </li>
                  <li className="dropdown-item p-1">
                    <a href className="
                        d-flex
                        align-items-center
                        text-decoration-none text-dark
                    ">
                      <div className="p-2">
                        <img src="https://source.unsplash.com/random/2" alt="from fb" className="rounded border border-1 border-secondary" style={{width: '38px', height: '38px', objectFit: 'cover'}} />
                      </div>
                      <div>
                        <p className="m-0">Lorem Ipsum</p>
                      </div>
                    </a>
                  </li>
                  <li className="dropdown-item p-1">
                    <a href className="
                        d-flex
                        align-items-center
                        text-decoration-none text-dark
                    ">
                      <div className="p-2">
                        <img src="https://source.unsplash.com/random/3" alt="from fb" className="rounded border border-1 border-secondary" style={{width: '38px', height: '38px', objectFit: 'cover'}} />
                      </div>
                      <div>
                        <p className="m-0">Lorem Ipsum</p>
                      </div>
                    </a>
                  </li>
                  <li className="p-1" type="button">
                    <div id="accordionFlushExample">
                      <div>
                        <div className="d-flex align-items-center" data-bs-toggle="collapse" data-bs-target="#shortModal" aria-expanded="false" aria-controls="shortModal">
                          <div className="p-2">
                            <i className="fas fa-chevron-down rounded-circle p-2" style={{backgroundColor: '#d5d5d5 !important'}} />
                          </div>
                          <div>
                            <p className="m-0">See More</p>
                          </div>
                        </div>
                        <div id="shortModal" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                          <div>
                            <div className="
                                d-flex
                                align-items-center
                                dropdown-item
                                p-0
                                m-0
                            ">
                              <div className="p-2">
                                <img src="https://source.unsplash.com/random/4" alt="from fb" className="rounded border border-1 border-secondary" style={{width: '38px', height: '38px', objectFit: 'cover'}} />
                              </div>
                              <div>
                                <p className="m-0">Campus</p>
                              </div>
                            </div>
                            <div className="
                                d-flex
                                align-items-center
                                dropdown-item
                                p-0
                                m-0
                            ">
                              <div className="p-2">
                                <img src="https://source.unsplash.com/random/5" alt="from fb" className="rounded border border-1 border-secondary" style={{width: '38px', height: '38px', objectFit: 'cover'}} />
                              </div>
                              <div>
                                <p className="m-0">Events</p>
                              </div>
                            </div>
                            <div className="
                                d-flex
                                align-items-center
                                dropdown-item
                                p-0
                                m-0
                            ">
                              <div className="p-2">
                                <img src="https://source.unsplash.com/random/6" alt="from fb" className="rounded border border-1 border-secondary" style={{width: '38px', height: '38px', objectFit: 'cover'}} />
                              </div>
                              <div>
                                <p className="m-0">Newsfeed</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
                <div className="p-2 mt-5">
                  <p className="text-muted fs-7">
                    Privacy • Terms • Advertising • Ad Choices
                    • Cookies • Flexbook © 2021
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 pb-5">
              <div className="d-flex flex-column justify-content-center w-100 mx-auto" style={{paddingTop: '56px', maxWidth: '680px'}}>
                <div className="mt-5 d-flex justify-content-between position-relative">
                  <div className="mx-1 bg-white rounded story" type="button" style={{width: '6em', height: '190px'}}>
                    <img src="https://source.unsplash.com/collection/happy-people" className="card-img-top" alt="story posts" style={{minHeight: '125px', objectFit: 'cover'}} />
                    <div className="
                        d-flex
                        align-items-center
                        justify-content-center
                        position-relative
                    " style={{minHeight: '65px'}}>
                      <p className="mb-0 text-center fs-7 fw-bold">Create Story</p>
                      <div className="position-absolute top-0 start-50 translate-middle">
                        <i className="
                            fas
                            fa-plus-circle
                            fs-3
                            text-primary
                            bg-white
                            p-1
                            rounded-circle
                        " />
                      </div>
                    </div>
                  </div>
                  <div className="rounded mx-1 story" type="button" style={{width: '6em', height: '190px'}}>
                    <img src="https://source.unsplash.com/random/2" className="card-img-top rounded" alt="story posts" style={{minHeight: '190px', objectFit: 'cover'}} />
                  </div>
                  <div className="rounded mx-1 story" type="button" style={{width: '6em', height: '190px'}}>
                    <img src="https://source.unsplash.com/random/3" className="card-img-top rounded" alt="story posts" style={{minHeight: '190px', objectFit: 'cover'}} />
                  </div>
                  <div className="rounded mx-1 story" type="button" style={{width: '6em', height: '190px'}}>
                    <img src="https://source.unsplash.com/random/4" className="card-img-top rounded" alt="story posts" style={{minHeight: '190px', objectFit: 'cover'}} />
                  </div>
                  <div className="d-none d-lg-block rounded mx-1 story" type="button" style={{width: '6em', height: '190px'}}>
                    <img src="https://source.unsplash.com/random/5" className="card-img-top rounded" alt="story posts" style={{minHeight: '190px', objectFit: 'cover'}} />
                  </div>
                  <div className="d-none d-lg-block rounded mx-1 story" type="button" style={{width: '6em', height: '190px'}}>
                    <img src="https://source.unsplash.com/random/6" className="card-img-top rounded" alt="story posts" style={{minHeight: '190px', objectFit: 'cover'}} />
                  </div>
                  <div className="
                    position-absolute
                    top-50
                    start-100
                    translate-middle
                    pointer
                    d-none d-lg-block
                    ">
                    <i className="
                        fas
                        fa-arrow-right
                        p-3
                        border
                        text-muted
                        bg-white
                        rounded-circle
                    " />
                  </div>
                </div>
                <div className="bg-white p-3 mt-3 rounded border shadow">
                  <div className="d-flex" type="button">
                    <div className="p-1">
                      <img src="https://source.unsplash.com/collection/happy-people" alt="avatar" className="rounded-circle me-2" style={{width: '38px', height: '38px', objectFit: 'cover'}} />
                    </div>
                    <input type="text" className="form-control rounded-pill border-0 bg-gray pointer" disabled placeholder="What's on your mind, John?" data-bs-toggle="modal" data-bs-target="#createModal" />
                  </div>
                  <div className="modal fade" id="createModal" tabIndex={-1} aria-labelledby="createModalLabel" aria-hidden="true" data-bs-backdrop="false">
                    <div className="modal-dialog modal-dialog-centered">
                      <div className="modal-content">
                        <div className="modal-header align-items-center">
                          <h5 className="text-dark text-center w-100 m-0" id="exampleModalLabel">
                            Create Post
                          </h5>
                          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                          <div className="my-1 p-1">
                            <div className="d-flex flex-column">
                              <div className="d-flex align-items-center">
                                <div className="p-2">
                                  <img src="https://source.unsplash.com/collection/happy-people" alt="from fb" className="rounded-circle" style={{width: '38px', height: '38px', objectFit: 'cover'}} />
                                </div>
                                <div>
                                  <p className="m-0 fw-bold">John</p>
                                  <select className="form-select border-0 bg-gray w-75 fs-7" aria-label="Default select example">
                                    <option selected value={1}>Public</option>
                                    <option value={2}>Pin To Top</option>
                                    <option value={3}>Hide</option>
                                  </select>
                                </div>
                              </div>
                              <div>
                                <textarea cols={30} rows={5} className="form-control border-0" defaultValue={""} />
                              </div>
                              <div className="
                                d-flex
                                justify-content-between
                                align-items-center
                                ">
                                <img src="https://www.facebook.com/images/composer/SATP_Aa_square-2x.png" className="pointer" alt="fb text" style={{width: '30px', height: '30px', objectFit: 'cover'}} />
                                <i className="far fa-laugh-wink fs-5 text-muted pointer" />
                              </div>
                              <div className="
                                d-flex
                                justify-content-between
                                border border-1 border-light
                                rounded
                                p-3
                                mt-3
                                ">
                                <p className="m-0">Add to your post</p>
                                <div>
                                  <i className="
                                    fas
                                    fa-images
                                    fs-5
                                    text-success
                                    pointer
                                    mx-1
                                    " />
                                  <i className="
                                    fas
                                    fa-user-check
                                    fs-5
                                    text-primary
                                    pointer
                                    mx-1
                                    " />
                                  <i className="
                                    far
                                    fa-smile
                                    fs-5
                                    text-warning
                                    pointer
                                    mx-1
                                    " />
                                  <i className="
                                    fas
                                    fa-map-marker-alt
                                    fs-5
                                    text-info
                                    pointer
                                    mx-1
                                    " />
                                  <i className="
                                    fas
                                    fa-microphone
                                    fs-5
                                    text-danger
                                    pointer
                                    mx-1
                                    " />
                                  <i className="
                                    fas
                                    fa-ellipsis-h
                                    fs-5
                                    text-muted
                                    pointer
                                    mx-1
                                    " />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="modal-footer">
                          <button type="button" className="btn btn-primary w-100">
                            Post
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="d-flex flex-column flex-lg-row mt-3">
                    <div className="
                        dropdown-item
                        rounded
                        d-flex
                        align-items-center
                        justify-content-center
                    " type="button">
                      <i className="fas fa-video me-2 text-danger" />
                      <p className="m-0 text-muted">Live Video</p>
                    </div>
                    <div className="
                        dropdown-item
                        rounded
                        d-flex
                        align-items-center
                        justify-content-center
                    " type="button">
                      <i className="fas fa-photo-video me-2 text-success" />
                      <p className="m-0 text-muted">Photo/Video</p>
                    </div>
                    <div className="
                        dropdown-item
                        rounded
                        d-flex
                        align-items-center
                        justify-content-center
                    " type="button">
                      <i className="fas fa-smile me-2 text-warning" />
                      <p className="m-0 text-muted">Feeling/Activity</p>
                    </div>
                  </div>
                </div>
                <div className="
                    bg-white
                    p-3
                    mt-3
                    rounded
                    border
                    shadow
                    d-flex
                    justify-content-between
                    position-relative
                ">
                  <div>
                    <button className="btn rounded-pill btn-info">
                      <i className="fas fa-video me-3" />Create Room
                    </button>
                  </div>
                  <div className="d-xxl-none">
                    <img src="https://source.unsplash.com/random/1" alt="avatar" className="rounded-circle me-2" style={{width: '38px', height: '38px', objectFit: 'cover'}} />
                    <img src="https://source.unsplash.com/random/2" alt="avatar" className="rounded-circle me-2" style={{width: '38px', height: '38px', objectFit: 'cover'}} />
                    <img src="https://source.unsplash.com/random/3" alt="avatar" className="rounded-circle me-2" style={{width: '38px', height: '38px', objectFit: 'cover'}} />
                    <img src="https://source.unsplash.com/random/4" alt="avatar" className="rounded-circle me-2" style={{width: '38px', height: '38px', objectFit: 'cover'}} />
                  </div>
                  <div className="d-none d-xxl-block" style={{maxWidth: '450px'}}>
                    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                      <div className="carousel-inner">
                        <div className="carousel-item active">
                          <img src="https://source.unsplash.com/random/1" alt="avatar" className="rounded-circle me-2" style={{width: '38px', height: '38px', objectFit: 'cover'}} />
                          <img src="https://source.unsplash.com/random/2" alt="avatar" className="rounded-circle me-2" style={{width: '38px', height: '38px', objectFit: 'cover'}} />
                          <img src="https://source.unsplash.com/random/3" alt="avatar" className="rounded-circle me-2" style={{width: '38px', height: '38px', objectFit: 'cover'}} />
                          <img src="https://source.unsplash.com/random/4" alt="avatar" className="rounded-circle me-2" style={{width: '38px', height: '38px', objectFit: 'cover'}} />
                          <img src="https://source.unsplash.com/random/5" alt="avatar" className="rounded-circle me-2" style={{width: '38px', height: '38px', objectFit: 'cover'}} />
                          <img src="https://source.unsplash.com/random/6" alt="avatar" className="rounded-circle me-2" style={{width: '38px', height: '38px', objectFit: 'cover'}} />
                          <img src="https://source.unsplash.com/random/7" alt="avatar" className="rounded-circle me-2" style={{width: '38px', height: '38px', objectFit: 'cover'}} />
                          <img src="https://source.unsplash.com/random/8" alt="avatar" className="rounded-circle me-2" style={{width: '38px', height: '38px', objectFit: 'cover'}} />
                          <img src="https://source.unsplash.com/random/9" alt="avatar" className="rounded-circle me-2" style={{width: '38px', height: '38px', objectFit: 'cover'}} />
                        </div>
                        <div className="carousel-item">
                          <img src="https://source.unsplash.com/random/1" alt="avatar" className="rounded-circle me-2" style={{width: '38px', height: '38px', objectFit: 'cover'}} />
                          <img src="https://source.unsplash.com/random/2" alt="avatar" className="rounded-circle me-2" style={{width: '38px', height: '38px', objectFit: 'cover'}} />
                          <img src="https://source.unsplash.com/random/3" alt="avatar" className="rounded-circle me-2" style={{width: '38px', height: '38px', objectFit: 'cover'}} />
                          <img src="https://source.unsplash.com/random/4" alt="avatar" className="rounded-circle me-2" style={{width: '38px', height: '38px', objectFit: 'cover'}} />
                          <img src="https://source.unsplash.com/random/5" alt="avatar" className="rounded-circle me-2" style={{width: '38px', height: '38px', objectFit: 'cover'}} />
                          <img src="https://source.unsplash.com/random/6" alt="avatar" className="rounded-circle me-2" style={{width: '38px', height: '38px', objectFit: 'cover'}} />
                          <img src="https://source.unsplash.com/random/7" alt="avatar" className="rounded-circle me-2" style={{width: '38px', height: '38px', objectFit: 'cover'}} />
                          <img src="https://source.unsplash.com/random/8" alt="avatar" className="rounded-circle me-2" style={{width: '38px', height: '38px', objectFit: 'cover'}} />
                          <img src="https://source.unsplash.com/random/9" alt="avatar" className="rounded-circle me-2" style={{width: '38px', height: '38px', objectFit: 'cover'}} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="
                    position-absolute
                    start-0
                    top-50
                    translate-middle
                    d-none d-xxl-block
                    " type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <div className="
                        p-2
                        bg-white
                        border
                        rounded-circle
                        d-flex
                        justify-content-center
                        align-items-center
                        pointer
                        story
                    " style={{width: '30px', height: '30px'}}>
                      <i className="fas fa-chevron-left text-muted" />
                    </div>
                  </div>
                  <div className="
                    position-absolute
                    start-100
                    top-50
                    translate-middle
                    d-none d-xxl-block
                    " type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <div className="
                        p-2
                        bg-white
                        border
                        rounded-circle
                        d-flex
                        justify-content-center
                        align-items-center
                        pointer
                        story
                    " style={{width: '30px', height: '30px'}}>
                      <i className="fas fa-chevron-right text-muted" />
                    </div>
                  </div>
                </div>
                <div className="bg-white p-4 rounded shadow mt-3">
                  <div className="d-flex justify-content-between">
                    <div className="d-flex">
                      <img src="https://source.unsplash.com/collection/happy-people" alt="avatar" className="rounded-circle me-2" style={{width: '38px', height: '38px', objectFit: 'cover'}} />
                      <div>
                        <p className="m-0 fw-bold">John</p>
                        <span className="text-muted fs-7">July 17 at 1:23 pm</span>
                      </div>
                    </div>
                    <i className="fas fa-ellipsis-h" type="button" id="post1Menu" data-bs-toggle="dropdown" aria-expanded="false" />
                    <ul className="dropdown-menu border-0 shadow" aria-labelledby="post1Menu">
                      <li className="d-flex align-items-center">
                        <a className="
                            dropdown-item
                            d-flex
                            justify-content-around
                            align-items-center
                            fs-7
                        " href="#">
                          Edit Post</a>
                      </li>
                      <li className="d-flex align-items-center">
                        <a className="
                            dropdown-item
                            d-flex
                            justify-content-around
                            align-items-center
                            fs-7
                        " href="#">
                          Delete Post</a>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-3">
                    <div>
                      <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Quae fuga incidunt consequatur tenetur doloremque officia
                        corrupti provident tempore vitae labore?
                      </p>
                      <img src="https://source.unsplash.com/random/12" alt="post image" className="img-fluid rounded" />
                    </div>
                    <div className="post__comment mt-3 position-relative">
                      <div className="
                        d-flex
                        align-items-center
                        top-0
                        start-0
                        position-absolute
                        " style={{height: '50px', zIndex: 5}}>
                        <div className="me-2">
                          <i className="text-primary fas fa-thumbs-up" />
                          <i className="text-danger fab fa-gratipay" />
                          <i className="text-warning fas fa-grin-squint" />
                        </div>
                        <p className="m-0 text-muted fs-7">Phu, Tuan, and 3 others</p>
                      </div>
                      <div className="accordion" id="accordionExample">
                        <div className="accordion-item border-0">
                          <h2 className="accordion-header" id="headingTwo">
                            <div className="
                                accordion-button
                                collapsed
                                pointer
                                d-flex
                                justify-content-end
                            " data-bs-toggle="collapse" data-bs-target="#collapsePost1" aria-expanded="false" aria-controls="collapsePost1">
                              <p className="m-0">2 Comments</p>
                            </div>
                          </h2>
                          <hr />
                          <div className="d-flex justify-content-around">
                            <div className="
                                dropdown-item
                                rounded
                                d-flex
                                justify-content-center
                                align-items-center
                                pointer
                                text-muted
                                p-1
                            ">
                              <i className="fas fa-thumbs-up me-3" />
                              <p className="m-0">Like</p>
                            </div>
                            <div className="
                                dropdown-item
                                rounded
                                d-flex
                                justify-content-center
                                align-items-center
                                pointer
                                text-muted
                                p-1
                            " data-bs-toggle="collapse" data-bs-target="#collapsePost1" aria-expanded="false" aria-controls="collapsePost1">
                              <i className="fas fa-comment-alt me-3" />
                              <p className="m-0">Comment</p>
                            </div>
                          </div>
                          <div id="collapsePost1" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <hr />
                            <div className="accordion-body">
                              <div className="d-flex align-items-center my-1">
                                <img src="https://source.unsplash.com/collection/happy-people" alt="avatar" className="rounded-circle me-2" style={{width: '38px', height: '38px', objectFit: 'cover'}} />
                                <div className="p-3 rounded comment__input w-100">
                                  <div className="d-flex justify-content-end">
                                    <i className="fas fa-ellipsis-h text-blue pointer" id="post1CommentMenuButton" data-bs-toggle="dropdown" aria-expanded="false" />
                                    <ul className="dropdown-menu border-0 shadow" aria-labelledby="post1CommentMenuButton">
                                      <li className="d-flex align-items-center">
                                        <a className="
                                            dropdown-item
                                            d-flex
                                            justify-content-around
                                            align-items-center
                                            fs-7
                                        " href="#">
                                          Edit Comment</a>
                                      </li>
                                      <li className="d-flex align-items-center">
                                        <a className="
                                            dropdown-item
                                            d-flex
                                            justify-content-around
                                            align-items-center
                                            fs-7
                                        " href="#">
                                          Delete Comment</a>
                                      </li>
                                    </ul>
                                  </div>
                                  <p className="fw-bold m-0">John</p>
                                  <p className="m-0 fs-7 bg-gray p-2 rounded">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit.
                                  </p>
                                </div>
                              </div>
                              <div className="d-flex align-items-center my-1">
                                <img src="https://source.unsplash.com/random/2" alt="avatar" className="rounded-circle me-2" style={{width: '38px', height: '38px', objectFit: 'cover'}} />
                                <div className="p-3 rounded comment__input w-100">
                                  <p className="fw-bold m-0">Jerry</p>
                                  <p className="m-0 fs-7 bg-gray p-2 rounded">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit.
                                  </p>
                                </div>
                              </div>
                              <form className="d-flex my-1">
                                <div>
                                  <img src="https://source.unsplash.com/collection/happy-people" alt="avatar" className="rounded-circle me-2" style={{width: '38px', height: '38px', objectFit: 'cover'}} />
                                </div>
                                <input type="text" className="form-control border-0 rounded-pill bg-gray" placeholder="Write a comment" />
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-4 rounded shadow mt-3">
                  <div className="d-flex justify-content-between">
                    <div className="d-flex">
                      <img src="https://source.unsplash.com/random/1" alt="avatar" className="rounded-circle me-2" style={{width: '38px', height: '38px', objectFit: 'cover'}} />
                      <div>
                        <p className="m-0 fw-bold">Mike</p>
                        <span className="text-muted fs-7">May 24 at 1:23 pm</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3">
                    <div>
                      <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Quae fuga incidunt consequatur tenetur doloremque officia
                        corrupti provident tempore vitae labore?
                      </p>
                      <img src="https://source.unsplash.com/random/13" alt="post image" className="img-fluid rounded" />
                    </div>
                    <div className="post__comment mt-3 position-relative">
                      <div className="
                        d-flex
                        align-items-center
                        top-0
                        start-0
                        position-absolute
                        " style={{height: '50px', zIndex: 5}}>
                        <div className="me-2">
                          <i className="text-primary fas fa-thumbs-up" />
                          <i className="text-danger fab fa-gratipay" />
                          <i className="text-warning fas fa-grin-squint" />
                        </div>
                        <p className="m-0 text-muted fs-7">Phu, Tuan, and 3 others</p>
                      </div>
                      <div className="accordion" id="accordionExample">
                        <div className="accordion-item border-0">
                          <h2 className="accordion-header" id="headingTwo">
                            <div className="
                                accordion-button
                                collapsed
                                pointer
                                d-flex
                                justify-content-end
                            " data-bs-toggle="collapse" data-bs-target="#collapsePost1" aria-expanded="false" aria-controls="collapsePost1">
                              <p className="m-0">2 Comments</p>
                            </div>
                          </h2>
                          <hr />
                          <div className="d-flex justify-content-around">
                            <div className="
                                dropdown-item
                                rounded
                                d-flex
                                justify-content-center
                                align-items-center
                                pointer
                                text-muted
                                p-1
                            ">
                              <i className="fas fa-thumbs-up me-3" />
                              <p className="m-0">Like</p>
                            </div>
                            <div className="
                                dropdown-item
                                rounded
                                d-flex
                                justify-content-center
                                align-items-center
                                pointer
                                text-muted
                                p-1
                            " data-bs-toggle="collapse" data-bs-target="#collapsePost1" aria-expanded="false" aria-controls="collapsePost1">
                              <i className="fas fa-comment-alt me-3" />
                              <p className="m-0">Comment</p>
                            </div>
                          </div>
                          <div id="collapsePost1" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <hr />
                            <div className="accordion-body">
                              <div className="d-flex align-items-center my-1">
                                <img src="https://source.unsplash.com/collection/happy-people" alt="avatar" className="rounded-circle me-2" style={{width: '38px', height: '38px', objectFit: 'cover'}} />
                                <div className="p-3 rounded comment__input w-100">
                                  <div className="d-flex justify-content-end">
                                    <i className="fas fa-ellipsis-h text-blue pointer" id="post1CommentMenuButton" data-bs-toggle="dropdown" aria-expanded="false" />
                                    <ul className="dropdown-menu border-0 shadow" aria-labelledby="post1CommentMenuButton">
                                      <li className="d-flex align-items-center">
                                        <a className="
                                            dropdown-item
                                            d-flex
                                            justify-content-around
                                            align-items-center
                                            fs-7
                                        " href="#">
                                          Edit Comment</a>
                                      </li>
                                      <li className="d-flex align-items-center">
                                        <a className="
                                            dropdown-item
                                            d-flex
                                            justify-content-around
                                            align-items-center
                                            fs-7
                                        " href="#">
                                          Delete Comment</a>
                                      </li>
                                    </ul>
                                  </div>
                                  <p className="fw-bold m-0">John</p>
                                  <p className="m-0 fs-7 bg-gray p-2 rounded">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit.
                                  </p>
                                </div>
                              </div>
                              <div className="d-flex align-items-center my-1">
                                <img src="https://source.unsplash.com/random/2" alt="avatar" className="rounded-circle me-2" style={{width: '38px', height: '38px', objectFit: 'cover'}} />
                                <div className="p-3 rounded comment__input w-100">
                                  <p className="fw-bold m-0">Jerry</p>
                                  <p className="m-0 fs-7 bg-gray p-2 rounded">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit.
                                  </p>
                                </div>
                              </div>
                              <form className="d-flex my-1">
                                <div>
                                  <img src="https://source.unsplash.com/collection/happy-people" alt="avatar" className="rounded-circle me-2" style={{width: '38px', height: '38px', objectFit: 'cover'}} />
                                </div>
                                <input type="text" className="form-control border-0 rounded-pill bg-gray" placeholder="Write a comment" />
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-3">
              <div className="
                d-none d-xxl-block
                h-100
                end-0
                overflow-hidden
                scrollbar
                " style={{maxWidth: '360px', width: '100%', zIndex: 4, paddingTop: '56px', left: 'initial !important'}}>
                <div className="p-3 mt-4">
                  <h5 className="text-muted">Sponsored</h5>
                  <li className="dropdown-item my-2 d-flex justify-content-between">
                    <a href="#" className="
                        d-flex
                        align-items-center
                        text-decoration-none
                        link-dark
                    ">
                      <img src="https://source.unsplash.com/random/1" alt="ads" style={{width: '100px', height: '100px', objectFit: 'cover'}} className="rounded me-3" />
                      <div>
                        <p className="m-0">Lorem ipsum</p>
                        <span className="text-muted fs-7">loremipsum.com</span>
                      </div>
                    </a>
                    <div className="
                        rounded-circle
                        p-1
                        bg-white
                        d-flex
                        align-items-center
                        justify-content-center
                        mx-2
                        sponsor-icon
                        nav-item
                    " type="button" style={{width: '38px', height: '38px'}}>
                      <i className="fas fa-ellipsis-h text-muted p-2" data-bs-toggle="dropdown" />
                      <ul className="dropdown-menu">
                        <li className="dropdown-item">
                          <a href="#" className="
                            d-flex
                            align-items-center
                            text-decoration-none text-dark
                            ">
                            <i className="far fa-window-close" />
                            <div className="ms-3">
                              <p className="m-0">Hide Ad</p>
                              <span className="text-muted fs-7">Never see this add again.</span>
                            </div>
                          </a>
                        </li>
                        <li className="dropdown-item">
                          <a href="#" className="
                            d-flex
                            align-items-center
                            text-decoration-none text-dark
                            ">
                            <i className="fas fa-exclamation-triangle" />
                            <div className="ms-3">
                              <p className="m-0">Report Ad</p>
                              <span className="text-muted fs-7">Tell us a problem with this add.</span>
                            </div>
                          </a>
                        </li>
                        <li className="dropdown-item">
                          <a href="#" className="
                            d-flex
                            align-items-center
                            text-decoration-none text-dark
                            ">
                            <i className="fas fa-info-circle" />
                            <div className="ms-3">
                              <p className="m-0">Why am I seeing this ad?</p>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="dropdown-item my-2 d-flex justify-content-between">
                    <a href="#" className="
                        d-flex
                        align-items-center
                        text-decoration-none
                        link-dark
                    ">
                      <img src="https://source.unsplash.com/random/2" alt="ads" style={{width: '100px', height: '100px', objectFit: 'cover'}} className="rounded me-3" />
                      <div>
                        <p className="m-0">Lorem ipsum</p>
                        <span className="text-muted fs-7">loremipsum.com</span>
                      </div>
                    </a>
                    <div className="
                        rounded-circle
                        p-1
                        bg-white
                        d-flex
                        align-items-center
                        justify-content-center
                        mx-2
                        sponsor-icon
                        nav-item
                    " type="button" style={{width: '38px', height: '38px'}}>
                      <i className="fas fa-ellipsis-h text-muted p-2" data-bs-toggle="dropdown" />
                      <ul className="dropdown-menu">
                        <li className="dropdown-item">
                          <a href="#" className="
                            d-flex
                            align-items-center
                            text-decoration-none text-dark
                            ">
                            <i className="far fa-window-close" />
                            <div className="ms-3">
                              <p className="m-0">Hide Ad</p>
                              <span className="text-muted fs-7">Never see this add again.</span>
                            </div>
                          </a>
                        </li>
                        <li className="dropdown-item">
                          <a href="#" className="
                            d-flex
                            align-items-center
                            text-decoration-none text-dark
                            ">
                            <i className="fas fa-exclamation-triangle" />
                            <div className="ms-3">
                              <p className="m-0">Report Ad</p>
                              <span className="text-muted fs-7">Tell us a problem with this add.</span>
                            </div>
                          </a>
                        </li>
                        <li className="dropdown-item">
                          <a href="#" className="
                            d-flex
                            align-items-center
                            text-decoration-none text-dark
                            ">
                            <i className="fas fa-info-circle" />
                            <div className="ms-3">
                              <p className="m-0">Why am I seeing this ad?</p>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <hr className="m-0" />
                  <div className="my-3 d-flex justify-content-between align-items-center">
                    <p className="text-muted fs-5 m-0">Contacts</p>
                    <div className="text-muted">
                      <i className="fas fa-video mx-2 pointer" type="button" data-bs-toggle="modal" data-bs-target="#videoRoomD" />
                      <div className="modal fade" id="videoRoomD" tabIndex={-1} aria-labelledby="videoRoomDLabel" aria-hidden="true" data-bs-backdrop="false">
                        <div className="modal-dialog modal-dialog-centered modal-lg">
                          <div className="modal-content bg-dark">
                            <div className="modal-header border-0">
                              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="
                                modal-body
                                d-flex
                                flex-column
                                align-items-center
                                justify-content-center
                            " style={{minHeight: '400px'}}>
                              <i className="fas fa-video fs-0" />
                              <h3 className="text-white">Schedule A Room For Later</h3>
                              <p className="text-white text-center w-50 mx-auto">
                                Lorem ipsum dolor sit amet consectetur adipisicing
                                elit. Ut deserunt alias laudantium itaque eius enim
                                natus culpa eligendi consectetur maiores!
                              </p>
                              <button className="btn btn-lg btn-primary rounded-pill">
                                Schedule Room
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <i className="fas fa-search mx-2 pointer" type="button" data-bs-toggle="modal" data-bs-target="#newChat" />
                      <i className="fas fa-ellipsis-h pointer text-muted mx-2" type="button" data-bs-toggle="dropdown" />
                      <ul className="dropdown-menu shadow" style={{width: '18em'}}>
                        <div className="p-2">
                          <h5>Chat Settings</h5>
                          <span className="text-muted fs-7">Customize your Messenger experience.</span>
                        </div>
                        <hr />
                        <li>
                          <div className="
                            dropdown-item
                            d-flex
                            align-items-center
                            justify-content-between
                            ">
                            <div className="d-flex align-items-center">
                              <i className="fas fa-phone-alt me-3" />
                              <p className="m-0">Incoming call sounds</p>
                            </div>
                            <div className="form-check form-switch m-0">
                              <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" defaultChecked />
                              <label className="form-check-label" htmlFor="flexSwitchCheckChecked" />
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="
                            dropdown-item
                            d-flex
                            align-items-center
                            justify-content-between
                            ">
                            <div className="d-flex align-items-center">
                              <i className="fas fa-volume-off me-4 fs-4" />
                              <p className="m-0">Message sounds</p>
                            </div>
                            <div className="form-check form-switch m-0">
                              <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" defaultChecked />
                              <label className="form-check-label" htmlFor="flexSwitchCheckChecked" />
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="
                            dropdown-item
                            d-flex
                            align-items-center
                            justify-content-between
                            ">
                            <div className="d-flex align-items-center">
                              <i className="fas fa-spinner me-3" />
                              <p className="m-0">Pop-up new messages</p>
                            </div>
                            <div className="form-check form-switch m-0">
                              <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" defaultChecked />
                              <label className="form-check-label" htmlFor="flexSwitchCheckChecked" />
                            </div>
                          </div>
                          <span className="ms-5 text-muted fs-7">Automatically open new messages.</span>
                        </li>
                        <hr className="m-0" />
                        <li>
                          <div className="
                            dropdown-item
                            d-flex
                            align-items-center
                            justify-content-between
                            ">
                            <div className="d-flex align-items-center">
                              <i className="fas fa-toggle-off me-3" />
                              <p className="m-0">Turn Off Active Status</p>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="
                            dropdown-item
                            d-flex
                            align-items-center
                            justify-content-between
                            ">
                            <div className="d-flex align-items-center">
                              <i className="far fa-comment-alt me-3" />
                              <p className="m-0">Message Request</p>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="
                            dropdown-item
                            d-flex
                            align-items-center
                            justify-content-between
                            ">
                            <div className="d-flex align-items-center">
                              <i className="fas fa-share-square me-3" />
                              <p className="m-0">Message delivery settings</p>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="
                            dropdown-item
                            d-flex
                            align-items-center
                            justify-content-between
                            ">
                            <div className="d-flex align-items-center">
                              <i className="fas fa-shield-alt me-3" />
                              <p className="m-0">Block settings</p>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <li className="dropdown-item rounded my-2 px-0" type="button" data-bs-toggle="modal" data-bs-target="#singleChat1">
                    <div className="d-flex align-items-center mx-2 chat-avatar" data-bs-custom-className="chat-box" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="left" data-bs-trigger="hover" data-bs-content="
                        <div>
                        <div className=&quot;popover-body d-flex p-2&quot;>
                            <div>
                            <img src=&quot;https://source.unsplash.com/random/4&quot; alt=&quot;avatar&quot; className=&quot;pop-avatar&quot;  />
                            </div>
                            <div >
                            <h5>Mike</h5>
                            <div className=&quot;d-flex&quot;>
                                <i className=&quot;fas fa-user-friends m-1 text-muted&quot;></i>
                                <p>2 mutual friends: <span className=&quot;fw-bold&quot;>Jerry</span> and <span className=&quot;fw-bold&quot;>Phu</span></p>
                            </div>
                            <div className=&quot;d-flex&quot;>
                            <i className=&quot;fas fa-graduation-cap m-1 text-muted&quot;></i>
                            <p>Studies at MIT</p>
                            </div>
                            </div>
                        </div>
                        </div>
                    " data-bs-html="true">
                      <div className="position-relative">
                        <img src="https://source.unsplash.com/random/4" alt="avatar" className="rounded-circle me-2" style={{width: '38px', height: '38px', objectFit: 'cover'}} />
                        <span className="
                            position-absolute
                            bottom-0
                            translate-middle
                            border border-light
                            rounded-circle
                            bg-success
                            p-1
                        " style={{left: '75%'}}>
                          <span className="visually-hidden" />
                        </span>
                      </div>
                      <p className="m-0">Mike</p>
                    </div>
                  </li>
                  <li className="dropdown-item rounded my-2 px-0" type="button" data-bs-toggle="modal" data-bs-target="#singleChat2">
                    <div className="d-flex align-items-center mx-2 chat-avatar" data-bs-custom-className="chat-box" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="left" data-bs-trigger="hover" data-bs-content="
                            <div>
                                <div className=&quot;popover-body d-flex p-2&quot;>
                                <div>
                                    <img src=&quot;https://source.unsplash.com/random/2&quot; alt=&quot;avatar&quot; className=&quot;pop-avatar&quot;  />
                                </div>
                                <div >
                                    <h5>Tuan</h5>
                                    <div className=&quot;d-flex&quot;>
                                    <i className=&quot;fas fa-user-friends m-1 text-muted&quot;></i>
                                    <p>2 mutual friends: <span className=&quot;fw-bold&quot;>Jerry</span> and <span className=&quot;fw-bold&quot;>Phu</span></p>
                                    </div>
                                    <div className=&quot;d-flex&quot;>
                                    <i className=&quot;fas fa-graduation-cap m-1 text-muted&quot;></i>
                                    <p>Studies at MIT</p>
                                    </div>
                                </div>
                                </div>
                            </div>
                            " data-bs-html="true">
                      <div className="position-relative">
                        <img src="https://source.unsplash.com/random/2" alt="avatar" className="rounded-circle me-2" style={{width: '38px', height: '38px', objectFit: 'cover'}} />
                        <span className="
                            position-absolute
                            bottom-0
                            translate-middle
                            border border-light
                            rounded-circle
                            bg-success
                            p-1
                        " style={{left: '75%'}}>
                          <span className="visually-hidden" />
                        </span>
                      </div>
                      <p className="m-0">Tuan</p>
                    </div>
                  </li>
                  <li className="dropdown-item rounded my-2 px-0" type="button" data-bs-toggle="modal" data-bs-target="#singleChat3">
                    <div className="d-flex align-items-center mx-2 chat-avatar" data-bs-custom-className="chat-box" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="left" data-bs-trigger="hover" data-bs-content="
                                <div>
                                    <div className=&quot;popover-body d-flex p-2&quot;>
                                    <div>
                                        <img src=&quot;https://source.unsplash.com/random/3&quot; alt=&quot;avatar&quot; className=&quot;pop-avatar&quot;  />
                                    </div>
                                    <div >
                                        <h5>Jerry</h5>
                                        <div className=&quot;d-flex&quot;>
                                        <i className=&quot;fas fa-user-friends m-1 text-muted&quot;></i>
                                        <p>2 mutual friends: <span className=&quot;fw-bold&quot;>Jerry</span> and <span className=&quot;fw-bold&quot;>Phu</span></p>
                                        </div>
                                        <div className=&quot;d-flex&quot;>
                                        <i className=&quot;fas fa-graduation-cap m-1 text-muted&quot;></i>
                                        <p>Studies at MIT</p>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                " data-bs-html="true">
                      <div className="position-relative">
                        <img src="https://source.unsplash.com/random/3" alt="avatar" className="rounded-circle me-2" style={{width: '38px', height: '38px', objectFit: 'cover'}} />
                        <span className="
                            position-absolute
                            bottom-0
                            translate-middle
                            border border-light
                            rounded-circle
                            bg-success
                            p-1
                        " style={{left: '75%'}}>
                          <span className="visually-hidden" />
                        </span>
                      </div>
                      <p className="m-0">Jerry</p>
                    </div>
                  </li>
                  <li className="dropdown-item rounded my-2 px-0" type="button" data-bs-toggle="modal" data-bs-target="#singleChat4">
                    <div className="d-flex align-items-center mx-2 chat-avatar" data-bs-custom-className="chat-box" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="left" data-bs-trigger="hover" data-bs-content="
                            <div>
                                <div className=&quot;popover-body d-flex p-2&quot;>
                                <div>
                                    <img src=&quot;https://source.unsplash.com/random/4&quot; alt=&quot;avatar&quot; className=&quot;pop-avatar&quot;  />
                                </div>
                                <div >
                                    <h5>Tony</h5>
                                    <div className=&quot;d-flex&quot;>
                                    <i className=&quot;fas fa-user-friends m-1 text-muted&quot;></i>
                                    <p>2 mutual friends: <span className=&quot;fw-bold&quot;>Jerry</span> and <span className=&quot;fw-bold&quot;>Phu</span></p>
                                    </div>
                                    <div className=&quot;d-flex&quot;>
                                    <i className=&quot;fas fa-graduation-cap m-1 text-muted&quot;></i>
                                    <p>Studies at MIT</p>
                                    </div>
                                </div>
                                </div>
                            </div>
                            " data-bs-html="true">
                      <div className="position-relative">
                        <img src="https://source.unsplash.com/random/4" alt="avatar" className="rounded-circle me-2" style={{width: '38px', height: '38px', objectFit: 'cover'}} />
                        <span className="
                            position-absolute
                            bottom-0
                            translate-middle
                            border border-light
                            rounded-circle
                            bg-success
                            p-1
                        " style={{left: '75%'}}>
                          <span className="visually-hidden" />
                        </span>
                      </div>
                      <p className="m-0">Tony</p>
                    </div>
                  </li>
                  <li className="dropdown-item rounded my-2 px-0" type="button" data-bs-toggle="modal" data-bs-target="#singleChat5">
                    <div className="d-flex align-items-center mx-2 chat-avatar" data-bs-custom-className="chat-box" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="left" data-bs-trigger="hover" data-bs-content="
                        <div>
                            <div className=&quot;popover-body d-flex p-2&quot;>
                            <div>
                                <img src=&quot;https://source.unsplash.com/random/5&quot; alt=&quot;avatar&quot; className=&quot;pop-avatar&quot;  />
                            </div>
                            <div >
                                <h5>Phu</h5>
                                <div className=&quot;d-flex&quot;>
                                <i className=&quot;fas fa-user-friends m-1 text-muted&quot;></i>
                                <p>2 mutual friends: <span className=&quot;fw-bold&quot;>Jerry</span> and <span className=&quot;fw-bold&quot;>Phu</span></p>
                                </div>
                                <div className=&quot;d-flex&quot;>
                                <i className=&quot;fas fa-graduation-cap m-1 text-muted&quot;></i>
                                <p>Studies at MIT</p>
                                </div>
                            </div>
                            </div>
                        </div>
                        " data-bs-html="true">
                      <div className="position-relative">
                        <img src="https://source.unsplash.com/random/5" alt="avatar" className="rounded-circle me-2" style={{width: '38px', height: '38px', objectFit: 'cover'}} />
                        <span className="
                            position-absolute
                            bottom-0
                            translate-middle
                            border border-light
                            rounded-circle
                            bg-success
                            p-1
                        " style={{left: '75%'}}>
                          <span className="visually-hidden" />
                        </span>
                      </div>
                      <p className="m-0">Phu</p>
                    </div>
                  </li>
                  <li className="dropdown-item rounded my-2 px-0" type="button" data-bs-toggle="modal" data-bs-target="#singleChat1">
                    <div className="d-flex align-items-center mx-2 chat-avatar" data-bs-custom-className="chat-box" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="left" data-bs-trigger="hover" data-bs-content="
                                    <div>
                                        <div className=&quot;popover-body d-flex p-2&quot;>
                                        <div>
                                            <img src=&quot;https://source.unsplash.com/random/4&quot; alt=&quot;avatar&quot; className=&quot;pop-avatar&quot;  />
                                        </div>
                                        <div >
                                            <h5>Mike</h5>
                                            <div className=&quot;d-flex&quot;>
                                            <i className=&quot;fas fa-user-friends m-1 text-muted&quot;></i>
                                            <p>2 mutual friends: <span className=&quot;fw-bold&quot;>Jerry</span> and <span className=&quot;fw-bold&quot;>Phu</span></p>
                                            </div>
                                            <div className=&quot;d-flex&quot;>
                                            <i className=&quot;fas fa-graduation-cap m-1 text-muted&quot;></i>
                                            <p>Studies at MIT</p>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    " data-bs-html="true">
                      <div className="position-relative">
                        <img src="https://source.unsplash.com/random/4" alt="avatar" className="rounded-circle me-2" style={{width: '38px', height: '38px', objectFit: 'cover'}} />
                        <span className="
                            position-absolute
                            bottom-0
                            translate-middle
                            border border-light
                            rounded-circle
                            bg-success
                            p-1
                        " style={{left: '75%'}}>
                          <span className="visually-hidden" />
                        </span>
                      </div>
                      <p className="m-0">Mike</p>
                    </div>
                  </li>
                  <li className="dropdown-item rounded my-2 px-0" type="button" data-bs-toggle="modal" data-bs-target="#singleChat2">
                    <div className="d-flex align-items-center mx-2 chat-avatar" data-bs-custom-className="chat-box" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="left" data-bs-trigger="hover" data-bs-content="
                                            <div>
                                            <div className=&quot;popover-body d-flex p-2&quot;>
                                                <div>
                                                <img src=&quot;https://source.unsplash.com/random/2&quot; alt=&quot;avatar&quot; className=&quot;pop-avatar&quot;  />
                                                </div>
                                                <div >
                                                <h5>Tuan</h5>
                                                <div className=&quot;d-flex&quot;>
                                                    <i className=&quot;fas fa-user-friends m-1 text-muted&quot;></i>
                                                    <p>2 mutual friends: <span className=&quot;fw-bold&quot;>Jerry</span> and <span className=&quot;fw-bold&quot;>Phu</span></p>
                                                </div>
                                                <div className=&quot;d-flex&quot;>
                                                <i className=&quot;fas fa-graduation-cap m-1 text-muted&quot;></i>
                                                <p>Studies at MIT</p>
                                                </div>
                                                </div>
                                            </div>
                                            </div>
                                        " data-bs-html="true">
                      <div className="position-relative">
                        <img src="https://source.unsplash.com/random/2" alt="avatar" className="rounded-circle me-2" style={{width: '38px', height: '38px', objectFit: 'cover'}} />
                        <span className="
                            position-absolute
                            bottom-0
                            translate-middle
                            border border-light
                            rounded-circle
                            bg-success
                            p-1
                        " style={{left: '75%'}}>
                          <span className="visually-hidden" />
                        </span>
                      </div>
                      <p className="m-0">Tuan</p>
                    </div>
                  </li>
                  <li className="dropdown-item rounded my-2 px-0" type="button" data-bs-toggle="modal" data-bs-target="#singleChat3">
                    <div className="d-flex align-items-center mx-2 chat-avatar" data-bs-custom-className="chat-box" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="left" data-bs-trigger="hover" data-bs-content="
                                                <div>
                                                <div className=&quot;popover-body d-flex p-2&quot;>
                                                    <div>
                                                    <img src=&quot;https://source.unsplash.com/random/3&quot; alt=&quot;avatar&quot; className=&quot;pop-avatar&quot;  />
                                                    </div>
                                                    <div >
                                                    <h5>Jerry</h5>
                                                    <div className=&quot;d-flex&quot;>
                                                        <i className=&quot;fas fa-user-friends m-1 text-muted&quot;></i>
                                                        <p>2 mutual friends: <span className=&quot;fw-bold&quot;>Jerry</span> and <span className=&quot;fw-bold&quot;>Phu</span></p>
                                                    </div>
                                                    <div className=&quot;d-flex&quot;>
                                                    <i className=&quot;fas fa-graduation-cap m-1 text-muted&quot;></i>
                                                    <p>Studies at MIT</p>
                                                    </div>
                                                    </div>
                                                </div>
                                                </div>
                                            " data-bs-html="true">
                      <div className="position-relative">
                        <img src="https://source.unsplash.com/random/3" alt="avatar" className="rounded-circle me-2" style={{width: '38px', height: '38px', objectFit: 'cover'}} />
                        <span className="
                            position-absolute
                            bottom-0
                            translate-middle
                            border border-light
                            rounded-circle
                            bg-success
                            p-1
                        " style={{left: '75%'}}>
                          <span className="visually-hidden" />
                        </span>
                      </div>
                      <p className="m-0">Jerry</p>
                    </div>
                  </li>
                  <li className="dropdown-item rounded my-2 px-0" type="button" data-bs-toggle="modal" data-bs-target="#singleChat4">
                    <div className="d-flex align-items-center mx-2 chat-avatar" data-bs-custom-className="chat-box" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="left" data-bs-trigger="hover" data-bs-content="
                                            <div>
                                            <div className=&quot;popover-body d-flex p-2&quot;>
                                                <div>
                                                <img src=&quot;https://source.unsplash.com/random/4&quot; alt=&quot;avatar&quot; className=&quot;pop-avatar&quot;  />
                                                </div>
                                                <div >
                                                <h5>Tony</h5>
                                                <div className=&quot;d-flex&quot;>
                                                    <i className=&quot;fas fa-user-friends m-1 text-muted&quot;></i>
                                                    <p>2 mutual friends: <span className=&quot;fw-bold&quot;>Jerry</span> and <span className=&quot;fw-bold&quot;>Phu</span></p>
                                                </div>
                                                <div className=&quot;d-flex&quot;>
                                                <i className=&quot;fas fa-graduation-cap m-1 text-muted&quot;></i>
                                                <p>Studies at MIT</p>
                                                </div>
                                                </div>
                                            </div>
                                            </div>
                                        " data-bs-html="true">
                      <div className="position-relative">
                        <img src="https://source.unsplash.com/random/4" alt="avatar" className="rounded-circle me-2" style={{width: '38px', height: '38px', objectFit: 'cover'}} />
                        <span className="
                            position-absolute
                            bottom-0
                            translate-middle
                            border border-light
                            rounded-circle
                            bg-success
                            p-1
                        " style={{left: '75%'}}>
                          <span className="visually-hidden" />
                        </span>
                      </div>
                      <p className="m-0">Tony</p>
                    </div>
                  </li>
                  <li className="dropdown-item rounded my-2 px-0" type="button" data-bs-toggle="modal" data-bs-target="#singleChat5">
                    <div className="d-flex align-items-center mx-2 chat-avatar" data-bs-custom-className="chat-box" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="left" data-bs-trigger="hover" data-bs-content="
                                        <div>
                                        <div className=&quot;popover-body d-flex p-2&quot;>
                                            <div>
                                            <img src=&quot;https://source.unsplash.com/random/5&quot; alt=&quot;avatar&quot; className=&quot;pop-avatar&quot;  />
                                            </div>
                                            <div >
                                            <h5>Phu</h5>
                                            <div className=&quot;d-flex&quot;>
                                                <i className=&quot;fas fa-user-friends m-1 text-muted&quot;></i>
                                                <p>2 mutual friends: <span className=&quot;fw-bold&quot;>Jerry</span> and <span className=&quot;fw-bold&quot;>Phu</span></p>
                                            </div>
                                            <div className=&quot;d-flex&quot;>
                                            <i className=&quot;fas fa-graduation-cap m-1 text-muted&quot;></i>
                                            <p>Studies at MIT</p>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                    " data-bs-html="true">
                      <div className="position-relative">
                        <img src="https://source.unsplash.com/random/5" alt="avatar" className="rounded-circle me-2" style={{width: '38px', height: '38px', objectFit: 'cover'}} />
                        <span className="
                            position-absolute
                            bottom-0
                            translate-middle
                            border border-light
                            rounded-circle
                            bg-success
                            p-1
                        " style={{left: '75%'}}>
                          <span className="visually-hidden" />
                        </span>
                      </div>
                      <p className="m-0">Phu</p>
                    </div>
                  </li>
                  <li className="dropdown-item rounded my-2 px-0" type="button" data-bs-toggle="modal" data-bs-target="#singleChat1">
                    <div className="d-flex align-items-center mx-2 chat-avatar" data-bs-custom-className="chat-box" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="left" data-bs-trigger="hover" data-bs-content="
                        <div>
                        <div className=&quot;popover-body d-flex p-2&quot;>
                            <div>
                            <img src=&quot;https://source.unsplash.com/random/4&quot; alt=&quot;avatar&quot; className=&quot;pop-avatar&quot;  />
                            </div>
                            <div >
                            <h5>Mike</h5>
                            <div className=&quot;d-flex&quot;>
                                <i className=&quot;fas fa-user-friends m-1 text-muted&quot;></i>
                                <p>2 mutual friends: <span className=&quot;fw-bold&quot;>Jerry</span> and <span className=&quot;fw-bold&quot;>Phu</span></p>
                            </div>
                            <div className=&quot;d-flex&quot;>
                            <i className=&quot;fas fa-graduation-cap m-1 text-muted&quot;></i>
                            <p>Studies at MIT</p>
                            </div>
                            </div>
                        </div>
                        </div>
                    " data-bs-html="true">
                      <div className="position-relative">
                        <img src="https://source.unsplash.com/random/4" alt="avatar" className="rounded-circle me-2" style={{width: '38px', height: '38px', objectFit: 'cover'}} />
                        <span className="
                            position-absolute
                            bottom-0
                            translate-middle
                            border border-light
                            rounded-circle
                            bg-success
                            p-1
                        " style={{left: '75%'}}>
                          <span className="visually-hidden" />
                        </span>
                      </div>
                      <p className="m-0">Mike</p>
                    </div>
                  </li>
                  <li className="dropdown-item rounded my-2 px-0" type="button" data-bs-toggle="modal" data-bs-target="#singleChat2">
                    <div className="d-flex align-items-center mx-2 chat-avatar" data-bs-custom-className="chat-box" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="left" data-bs-trigger="hover" data-bs-content="
                            <div>
                                <div className=&quot;popover-body d-flex p-2&quot;>
                                <div>
                                    <img src=&quot;https://source.unsplash.com/random/2&quot; alt=&quot;avatar&quot; className=&quot;pop-avatar&quot;  />
                                </div>
                                <div >
                                    <h5>Tuan</h5>
                                    <div className=&quot;d-flex&quot;>
                                    <i className=&quot;fas fa-user-friends m-1 text-muted&quot;></i>
                                    <p>2 mutual friends: <span className=&quot;fw-bold&quot;>Jerry</span> and <span className=&quot;fw-bold&quot;>Phu</span></p>
                                    </div>
                                    <div className=&quot;d-flex&quot;>
                                    <i className=&quot;fas fa-graduation-cap m-1 text-muted&quot;></i>
                                    <p>Studies at MIT</p>
                                    </div>
                                </div>
                                </div>
                            </div>
                            " data-bs-html="true">
                      <div className="position-relative">
                        <img src="https://source.unsplash.com/random/2" alt="avatar" className="rounded-circle me-2" style={{width: '38px', height: '38px', objectFit: 'cover'}} />
                        <span className="
                            position-absolute
                            bottom-0
                            translate-middle
                            border border-light
                            rounded-circle
                            bg-success
                            p-1
                        " style={{left: '75%'}}>
                          <span className="visually-hidden" />
                        </span>
                      </div>
                      <p className="m-0">Tuan</p>
                    </div>
                  </li>
                  <li className="dropdown-item rounded my-2 px-0" type="button" data-bs-toggle="modal" data-bs-target="#singleChat3">
                    <div className="d-flex align-items-center mx-2 chat-avatar" data-bs-custom-className="chat-box" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="left" data-bs-trigger="hover" data-bs-content="
                                <div>
                                    <div className=&quot;popover-body d-flex p-2&quot;>
                                    <div>
                                        <img src=&quot;https://source.unsplash.com/random/3&quot; alt=&quot;avatar&quot; className=&quot;pop-avatar&quot;  />
                                    </div>
                                    <div >
                                        <h5>Jerry</h5>
                                        <div className=&quot;d-flex&quot;>
                                        <i className=&quot;fas fa-user-friends m-1 text-muted&quot;></i>
                                        <p>2 mutual friends: <span className=&quot;fw-bold&quot;>Jerry</span> and <span className=&quot;fw-bold&quot;>Phu</span></p>
                                        </div>
                                        <div className=&quot;d-flex&quot;>
                                        <i className=&quot;fas fa-graduation-cap m-1 text-muted&quot;></i>
                                        <p>Studies at MIT</p>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                " data-bs-html="true">
                      <div className="position-relative">
                        <img src="https://source.unsplash.com/random/3" alt="avatar" className="rounded-circle me-2" style={{width: '38px', height: '38px', objectFit: 'cover'}} />
                        <span className="
                            position-absolute
                            bottom-0
                            translate-middle
                            border border-light
                            rounded-circle
                            bg-success
                            p-1
                        " style={{left: '75%'}}>
                          <span className="visually-hidden" />
                        </span>
                      </div>
                      <p className="m-0">Jerry</p>
                    </div>
                  </li>
                  <li className="dropdown-item rounded my-2 px-0" type="button" data-bs-toggle="modal" data-bs-target="#singleChat4">
                    <div className="d-flex align-items-center mx-2 chat-avatar" data-bs-custom-className="chat-box" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="left" data-bs-trigger="hover" data-bs-content="
                            <div>
                                <div className=&quot;popover-body d-flex p-2&quot;>
                                <div>
                                    <img src=&quot;https://source.unsplash.com/random/4&quot; alt=&quot;avatar&quot; className=&quot;pop-avatar&quot;  />
                                </div>
                                <div >
                                    <h5>Tony</h5>
                                    <div className=&quot;d-flex&quot;>
                                    <i className=&quot;fas fa-user-friends m-1 text-muted&quot;></i>
                                    <p>2 mutual friends: <span className=&quot;fw-bold&quot;>Jerry</span> and <span className=&quot;fw-bold&quot;>Phu</span></p>
                                    </div>
                                    <div className=&quot;d-flex&quot;>
                                    <i className=&quot;fas fa-graduation-cap m-1 text-muted&quot;></i>
                                    <p>Studies at MIT</p>
                                    </div>
                                </div>
                                </div>
                            </div>
                            " data-bs-html="true">
                      <div className="position-relative">
                        <img src="https://source.unsplash.com/random/4" alt="avatar" className="rounded-circle me-2" style={{width: '38px', height: '38px', objectFit: 'cover'}} />
                        <span className="
                            position-absolute
                            bottom-0
                            translate-middle
                            border border-light
                            rounded-circle
                            bg-success
                            p-1
                        " style={{left: '75%'}}>
                          <span className="visually-hidden" />
                        </span>
                      </div>
                      <p className="m-0">Tony</p>
                    </div>
                  </li>
                  <li className="dropdown-item rounded my-2 px-0" type="button" data-bs-toggle="modal" data-bs-target="#singleChat5">
                    <div className="d-flex align-items-center mx-2 chat-avatar" data-bs-custom-className="chat-box" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="left" data-bs-trigger="hover" data-bs-content="
                        <div>
                            <div className=&quot;popover-body d-flex p-2&quot;>
                            <div>
                                <img src=&quot;https://source.unsplash.com/random/5&quot; alt=&quot;avatar&quot; className=&quot;pop-avatar&quot;  />
                            </div>
                            <div >
                                <h5>Phu</h5>
                                <div className=&quot;d-flex&quot;>
                                <i className=&quot;fas fa-user-friends m-1 text-muted&quot;></i>
                                <p>2 mutual friends: <span className=&quot;fw-bold&quot;>Jerry</span> and <span className=&quot;fw-bold&quot;>Phu</span></p>
                                </div>
                                <div className=&quot;d-flex&quot;>
                                <i className=&quot;fas fa-graduation-cap m-1 text-muted&quot;></i>
                                <p>Studies at MIT</p>
                                </div>
                            </div>
                            </div>
                        </div>
                        " data-bs-html="true">
                      <div className="position-relative">
                        <img src="https://source.unsplash.com/random/5" alt="avatar" className="rounded-circle me-2" style={{width: '38px', height: '38px', objectFit: 'cover'}} />
                        <span className="
                            position-absolute
                            bottom-0
                            translate-middle
                            border border-light
                            rounded-circle
                            bg-success
                            p-1
                        " style={{left: '75%'}}>
                          <span className="visually-hidden" />
                        </span>
                      </div>
                      <p className="m-0">Phu</p>
                    </div>
                  </li>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="fixed-bottom right-100 p-3" style={{zIndex: 6, left: 'initial'}} type="button" data-bs-toggle="modal" data-bs-target="#newChat">
          <i className="fas fa-edit bg-white rounded-circle p-3 shadow" />
        </div>
      </div>
      </body>
  );
};

export default Feed;