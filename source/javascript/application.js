'use strict'

var carousel = (function() {

  var queries = {
    carouselRayBan: ".rayban__carousel__content"
  }

  var dom = {}

  var catchDom = function() {
    dom.carouselRayBan = document.querySelector(queries.carouselRayBan);
  };

  var suscribeEvents = function() {
    console.log("Hola");
  };

  var inicialice = function() {
    catchDom();
    suscribeEvents();
  }
})
