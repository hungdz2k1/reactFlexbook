const Login = () => {
  return (
<body className="bg-gray">
<div className="container mt-5 pt-5 d-flex flex-column flex-lg-row justify-content-evenly">
    <div className="text-lg-start mt-0 pt-0 mt-lg-5 pt-lg-5">
        <h1 className="text-primary fw-bold fs-0">flexbook</h1>
        <p className="w-75 mx-auto fs-4 mx-lg-0">Flexbook helps you connect and share with the people in your life.</p>
    </div>
     <div className="w-100" style={{ maxWidth: '28rem' }}>
        <div className="bg-white shadow rounded p-3 input-group-lg">
            <input type="email" className="form-control my-3" placeholder="Email address or phone number" />
            <input type="password" className="form-control my-3" placeholder="Password" />
            <a href="./feed.html"><button className="btn btn-primary w-100 my-3">Log In</button></a>
            <a href="#" className="text-decoration-none text-center"><p>Forgotten password?</p></a>
            <hr />
            <div className="text-center my-4">
                <button className="btn btn-success btn-lg" type="button" data-bs-toggle="modal" data-bs-target="#createModal">Create New Account</button>
            </div>
            <div className="modal fade" id="createModal" tabIndex="-1" aria-labelledby="createModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <div>
                                <h2 className="modal-title" id="exampleModalLabel">Sign Up</h2>
                                <span className="text-muted fs-7">Its quick and easy.</span>
                            </div>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="row">
                                    <div className="col">
                                        <input type="text" className="form-control" placeholder="First name" />
                                    </div>
                                    <div className="col">
                                        <input type="text" className="form-control" placeholder="Surname" />
                                    </div>
                                </div>
                                <input type="email" className="form-control my-3" placeholder="Mobile number or email address" />
                                <input type="password" className="form-control my-3" placeholder="New password" />
                                <div className="row my-3">
                                    <span className="text-muted fs-7">Date of birth <i className="fas fa-question-circle" data-bs-toggle="popover" type="button" data-bs-content="And here's some amazing content. It's very engaging. Right?"></i></span>
                                    <div className="col">
                                        <select className="form-select">
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
                                    <div className="col">
                                        <select className="form-select">
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
                                    <div className="col">
                                        <select className="form-select">
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="row my-3">
                                    <span className="text-muted fs-7">Gender <i className="fas fa-question-circle" data-bs-toggle="popover" type="button" data-bs-content="And here's some amazing content. It's very engaging. Right?"></i></span>
                                    <div className="col">
                                        <div className="border rounded p-2">
                                            <label className="form-check-label" htmlFor="flexRadioDefault1">Male </label>
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="border rounded p-2">
                                            <label className="form-check-label" htmlFor="flexRadioDefault1">Female </label>
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="border rounded p-2">
                                            <label className="form-check-label" htmlFor="flexRadioDefault1">Custom </label>
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                                        </div>
                                    </div>
                                </div>
                                <div className="d-none" id="genderSelect">
                                    <select className="form-select">
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                    <div className="my-3">
                                        <span className="text-muted fs-7">Your pronoun is visible to everyone.</span>
                                        <input type="text" className="form-control" placeholder="Gender (optional)" />
                                    </div>
                                </div>
                                <div>
                                    <span className="text-muted fs-7">By clicking Sign Up, you agree to our Terms, Data Policy....</span>
                                </div>
                                <div className="text-center mt-3">
                                    <button type="button" className="btn btn-success btn-lg" data-bs-dismiss="modal">Sign Up</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="my-5 pb-5 text-center">
            <p className="fw-bold"><a href="#" className="text-decoration-none text-dark">Createa a Page</a> <span className="fw-normal">for a celebrity, band or business.</span></p>
        </div>
    </div>
</div>
<footer className="bg-white p-4 text-muted">
    <div className="container">
        <div className="d-flex flex-wrap">
            <p className="mx-2 fs-7 mb-0">English (US)</p>
            <p className="mx-2 fs-7 mb-0">Tiếng Việt</p>
            <p className="mx-2 fs-7 mb-0">中文(台灣)</p>
            <p className="mx-2 fs-7 mb-0">한국어</p>
            <p className="mx-2 fs-7 mb-0">日本語</p>
        </div>
        <hr />
        <div className="d-flex flex-wrap">
            <p className="mx-2 fs-7 mb-0">Sign Up</p>
            <p className="mx-2 fs-7 mb-0">Login</p>
            <p className="mx-2 fs-7 mb-0">Messenger</p>
            <p className="mx-2 fs-7 mb-0">Facebook Lite</p>
            <p className="mx-2 fs-7 mb-0">Watch</p>
        </div>
        <div className="mt-4 mx-2">
            <p className="fs-7">Flexbook &copy; 2023</p>
        </div>
    </div>
</footer>
</body>
  );
};

export default Login;