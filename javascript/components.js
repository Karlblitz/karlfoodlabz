class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <head>
        <style>

        .container .navbar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 0 50px;
            height: 100px;
        }

        .container .navbar ul { 
            display: inline-flex;
            justify-content: space-between;
        }

        /* image  */
        .container .navbar img {
            width: 100%;
            max-width: 150px;
            height: 70px;
            object-fit: cover;
            margin: 30px 20px;
        }

        .container .navbar ul li {
            list-style-type: none;
            margin: 20px 20px;
        }

        .container .navbar ul li a {
            text-decoration: none;
            color: #fff;
        }
        .container .navbar ul li a:hover {
            font-weight: 700;
        }

        </style>
    </head>
        <div class="container">
      <nav class="navbar">
        <img
          src="/images/logo.png"
          alt="" />
        <ul>
          <li><a href="/index.html">Home</a></li>
          <li><a href="/pages/menu.html">Menu</a></li>
          <li><a href="/pages/purchased.html">Purchased</a></li>
          <li><a href="/pages/about.html">About</a></li>
          <li><a href="/pages/contact.html">Contact</a></li>
        </ul>
      </nav>
    </div>
`;
  }
}

customElements.define("main-header", Header);
