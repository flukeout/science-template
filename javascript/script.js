// Navigation 1.0 ALPHA
//
// * Selectes the appropriate element in the side-nav when scrolling through the page

var sections = [];
var articleSections = $();

$(document).ready(function(){

  $(".agenda-navigation").on("click","a",function(){
    $(".selected").removeClass("selected");
    $(this).addClass("selected");
  });

  $(".agenda-navigation li a").each(function(i,el){
    var sectionName = $(el).attr("href");
    if(sectionName.length > 0) {
      sectionName = sectionName.replace("#","");
      sectionName = sectionName.toLowerCase();
      sections.push(sectionName);
    }
  });

  var jam = $("article *[id]");
  $(jam).each(function(i,el){
    var id = $(el).attr("id");
    id = id.replace("#","");
    id = id.toLowerCase();
    if(sections.indexOf(id) > -1) {
      console.log("adding");
      articleSections.push(el);
    }
  });

  $(window).on("scroll",function(){
    scroll();
  });

});


function scroll(){
  articleSections.each(function(i,el){
    var windowTop = $(window).scrollTop();
    var offset = $(el).offset();
    var fromTop = offset.top - windowTop;
    if(fromTop > 0 && fromTop < 200) {
      var id = $(el).attr('id');
      id = id.toLowerCase();
      id = id.replace("#","");

      $(".agenda-navigation a.selected").removeClass("selected");
      $(".agenda-navigation a[href=#"+id+"]").addClass("selected");
    }
  });
}
