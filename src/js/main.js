// var iPhone = /iPhone/.test(navigator.userAgent) && !window.MSStream;
// var iPad = /iPad/.test(navigator.userAgent) && !window.MSStream;
// var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
// if(iPhone){
//     $('body').addClass('iphone');
// }
// if(iPad){
//     $('body').addClass('ipad');
// }
// var ua = navigator.userAgent.toLowerCase();
// if (ua.indexOf('safari') != -1) {
//   if (ua.indexOf('chrome') > -1) {
//     // alert("1") // Chrome
//   } else {
//     // alert("2") // Safari
//     $('body').addClass('safari');
//   }
// }
//
// if(window.navigator.userAgent.indexOf("Edge") > -1) {
//   $('body').addClass('edge');
// }
//
// var UAString = navigator.userAgent;
// if (UAString.indexOf("Trident") !== -1 && UAString.indexOf("rv:11") !== -1)
// {
//   $('body').addClass('ie');
// }
// if (UAString.indexOf("Trident") !== -1 && UAString.indexOf("rv:10") !== -1)
// {
//   $('body').addClass('ie');
// }


$(document).ready(function () {

  // var bLazy = new Blazy({
  //   src: 'data-blazy' // Default is data-src
  // });

  // checking browser for WEBP
  // hasWebP().then(function () {
  //
  //   if($(window).width() > 768) {
  //     $('.webp-img').each(function () {
  //       var webp = $(this).data('webp');
  //       $(this).attr('data-blazy', webp);
  //     });
  //   } else {
  //     $('.webp-img').each(function () {
  //       var webp;
  //       if($(this).data('webp-mobile') !== undefined)
  //         webp = $(this).data('webp-mobile'); else webp = $(this).data('webp');
  //       console.log($(this).data('webp-mobile'));
  //       $(this).attr('data-blazy', webp);
  //     });
  //   }
  //
  //   bLazy.revalidate();
  //
  // }, function () {
  //   if($(window).width() > 768) {
  //     $('.webp-img').each(function () {
  //       var img = $(this).data('img');
  //       $(this).attr('data-blazy', img);
  //     });
  //   } else {
  //     $('.webp-img').each(function () {
  //       var img;
  //       if($(this).data('img-mobile') !== undefined)
  //         img = $(this).data('img-mobile'); else img = $(this).data('img');
  //       $(this).attr('data-blazy', img);
  //     });
  //   }
  //
  //   bLazy.revalidate();
  // });



});


//script fro webp img and background
// var hasWebP = (function () {
//   // some small (2x1 px) test images for each feature
//   var images = {
//     basic: "data:image/webp;base64,UklGRjIAAABXRUJQVlA4ICYAAACyAgCdASoCAAEALmk0mk0iIiIiIgBoSygABc6zbAAA/v56QAAAAA==",
//     lossless: "data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAQAAAAfQ//73v/+BiOh/AAA="
//   };
//
//   return function (feature) {
//     var deferred = $.Deferred();
//
//     $("<img>").on("load", function () {
//       // the images should have these dimensions
//       if (this.width === 2 && this.height === 1) {
//         deferred.resolve();
//       } else {
//         deferred.reject();
//       }
//     }).on("error", function () {
//       deferred.reject();
//     }).attr("src", images[feature || "basic"]);
//
//     return deferred.promise();
//   }
// })();

