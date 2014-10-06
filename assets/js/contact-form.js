$(function () {
  setTimeout(function () {
    var contactForms = $(".contact-form");
    contactForms.each(function (i, f) {
     $(f).attr("action", $(f).data("actionPath"));
    });
  }, 1000); // 1 second timeout protection against spam bots.
});


//function hello(){
//    alert("hello");
//}
//
//function compose (fn1, fn2) {
//    return function () {
//        fn1(fn2(arguments[0]));
//    };
//};
//
//var byename = compose(function (me) {
//    alert("bye " + me);
//}, function (lbah) {
//    return lbah;
//});
//byename("Allen");
//// comments