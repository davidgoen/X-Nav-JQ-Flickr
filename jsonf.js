function getImgs(resp){
    $("#images").html("");
    var html = "<ul>"
    for (var i = 0; i < 5; i++){
        html += "<li><h4>" + resp.items[i].title + "</h4>"
        html += "<img src='" + resp.items[i].media.m + "'></li>"
    }
    html += "</ul>"
    $("#images").append(html)
}


$(document).ready(function(){

   var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?"

  $("#tag").click(function(){
    $.getJSON(flickerAPI, {
      tags: "fuenlabrada",
      tagmode: "any",
      format: "json",
    }).done(getImgs)
  });

  $("#othertag").click(function(){
    var tag = $("#choosetag").val()
    $.getJSON(flickerAPI, {
      tags: tag,
      tagmode: "any",
      format: "json",
    }).done(getImgs)
  });

});
