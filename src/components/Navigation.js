import React from "react";

import '../styles'

function Navigation() {

  return (
    <div class="navbar bg-base-100">
      <div class="flex-1">
        <a class="btn btn-ghost normal-case text-xl">Maya Morales</a>
      </div>
      <div class="flex-none">
        <ul class="menu menu-horizontal p-0">
          <li><a>About Me</a></li>
          <li><a>Portfolio</a></li>
          <li><a>Contact Me</a></li>
          <li><a>Resume</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Navigation;