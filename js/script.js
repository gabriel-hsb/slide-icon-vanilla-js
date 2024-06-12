import SlideNav from "./slide.js";

const slide = new SlideNav(".slide", ".slide-container");
slide.init();
slide.addControl(".custom-controls");
slide.addArrow();
