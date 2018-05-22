$(".single-item").slick({
    dots: false,
    infinite: true,
    autoplay: false,
    arrows: false,
    centerMode: true,
    centerPadding: "100px",
    slidesToShow: 5,
    slidesToScroll: 1,
    // initialSlide: 6,
    cssEase: "linear",
    asNavFor: ".multiple-items, .dots-ct"
});
$(".multiple-items").slick({
    dots: false,
    infinite: true,
    autoplay: false,
    arrows: true,
    nextArrow: "<div class='slick-next'><svg width=\"20\" height=\"20\"  version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n" +
    "\t viewBox=\"0 0 512 512\" style=\"enable-background:new 0 0 512 512;\" xml:space=\"preserve\">\n" +
    "<g>\n" +
    "\t<g>\n" +
    "\t\t<path d=\"M352,0H160C71.648,0,0,71.648,0,160v192c0,88.352,71.648,160,160,160h192c88.352,0,160-71.648,160-160V160\n" +
    "\t\t\tC512,71.648,440.352,0,352,0z M464,352c0,61.76-50.24,112-112,112H160c-61.76,0-112-50.24-112-112V160C48,98.24,98.24,48,160,48\n" +
    "\t\t\th192c61.76,0,112,50.24,112,112V352z\"/>\n" +
    "\t</g>\n" +
    "</g>\n" +
    "<g>\n" +
    "\t<g>\n" +
    "\t\t<path d=\"M256,128c-70.688,0-128,57.312-128,128s57.312,128,128,128s128-57.312,128-128S326.688,128,256,128z M256,336\n" +
    "\t\t\tc-44.096,0-80-35.904-80-80c0-44.128,35.904-80,80-80s80,35.872,80,80C336,300.096,300.096,336,256,336z\"/>\n" +
    "\t</g>\n" +
    "</g>\n" +
    "<g>\n" +
    "\t<g>\n" +
    "\t\t<circle cx=\"393.6\" cy=\"118.4\" r=\"17.056\"/>\n" +
    "\t</g>\n" +
    "</g></div>",
    prevArrow: "<div class='slick-prev'><svg width=\"20\" heigth=\"20\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n" +
    "\t viewBox=\"0 0 334.623 334.623\" style=\"enable-background:new 0 0 334.623 334.623;\" xml:space=\"preserve\">\n" +
    "<g>\n" +
    "\t<path d=\"M175.329,287.017C175.322,287.017,175.329,287.017,175.329,287.017c-38.053,0-79.481-1.202-123.125-3.554\n" +
    "\t\tc-25.784-1.414-45.785-21.292-48.632-48.349c-4.762-45.2-4.762-90.83,0-135.625c2.841-26.832,22.815-46.71,48.574-48.33\n" +
    "\t\tc75.271-4.737,152.721-4.737,230.312,0c26.061,1.581,45.586,20.99,48.6,48.304c4.749,43.246,4.756,88.87,0.006,135.632\n" +
    "\t\tc-2.744,27.038-22.25,46.472-48.535,48.356C249.45,285.815,213.382,287.017,175.329,287.017z M166.428,60.452\n" +
    "\t\tc-37.931,0-76.113,1.195-113.485,3.541c-19.685,1.234-34.39,16.048-36.594,36.851c-4.666,43.895-4.666,88.613,0,132.926\n" +
    "\t\tc2.204,20.971,16.89,35.778,36.543,36.858c43.413,2.339,84.609,3.535,122.425,3.535c37.751,0,73.51-1.189,106.287-3.528\n" +
    "\t\tc19.833-1.427,34.57-16.228,36.659-36.839c4.666-45.862,4.666-90.58,0.006-132.926c-2.294-20.868-17.005-35.688-36.594-36.877\n" +
    "\t\tC243.145,61.641,204.365,60.452,166.428,60.452z M134.576,121.783v88.208l84.706-43.805L134.576,121.783z\"/>\n" +
    "</g>\n</div>",
    slidesToShow: 7,
    slidesToScroll: 1,
    cssEase: "linear",
    asNavFor: " .dots-ct, .single-item",
    focusOnSelect: true,
    centerMode: true
});
$(".dots-ct").slick({
    dots: false,
    infinite: true,
    autoplay: false,
    arrows: false,
    slidesToShow: 10,
    slidesToScroll: 1,
    cssEase: "linear",
    centerMode: true,
    focusOnSelect: true,
    asNavFor: ".multiple-items, .single-item"
});
$('.multiple-items').on('afterChange', function(event, slick, currentSlide) {
    console.log($('.multiple-items').slick('slickCurrentSlide'));
    console.log(currentSlide);
    console.log($(".multiple-items .big-item"));
});
$('.multiple-items').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    console.log(currentSlide);
    console.log(nextSlide);
});
$(".big-item[data-slick-index=0]").addClass("slide-center");
$(".big-item[data-slick-index=-1]").addClass("slide-left");
$(".big-item[data-slick-index=1]").addClass("slide-right");

$(".big-item .slick-current").addClass("center");