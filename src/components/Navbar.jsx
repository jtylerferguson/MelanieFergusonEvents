import React from 'react'


const Navbar = () => {
  return (
<nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar w/ text</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">

        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Get in Touch</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Packages</a>
      </li>
    </ul>
    <span class="navbar-text">
      Melanie Ferguson Events
    </span>
  </div>
</nav>
  )
}

export default Navbar