import React from "react";
import "./css/Header.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaArrowLeft } from "react-icons/fa";
import $ from "jquery";
function Header() {
  return (
    <nav id="header">
      <label className="logo">ZEDITAL</label>
      <ul className="list1">
      <label id="arrow-left" >
        <FaArrowLeft />
      </label>
        <li>
          <a href="#contactus">Contact us</a>
        </li>
        <li>
          <a href="#aboutus">About us</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="tel:+918527419334">Contact now</a>
        </li>
      </ul>
      <label id="nav-icon">
        <GiHamburgerMenu />
      </label>
    </nav>
  );
}
$(document).ready(function () {
  $("#nav-icon").click(function () {
    $(".list1").toggleClass("show");
  });
  $("#arrow-left").click(function(){
    $(".list1").toggleClass("show");
  })
  $("a").click(function () {
    if ($(".list1").hasClass("show")) {
      $(".list1").toggleClass("show");
    }
  });
});

export default Header;