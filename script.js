$(document).ready(function() {
    
    loadJson();
    
    //Attempts to load data from JSON file
    function loadJson(){
        $.getJSON('data.json')
        .done(function(data){
            buildHtml(data);
            console.log("json loaded");
        })
        .fail(function(){
            console.log("data retrieval failed");
        });
    }
    
    //Builds HTML and inserts into document
    function buildHtml(jData){
        var $insertPoint = $("#content");
        $.each(jData, function(key, val){
            var htmlInsertion = "<div class='detail_area' id='";
            htmlInsertion += (key + "'><h2 id='" + key + "' alt='" + val.name + "'>" + val.name + "</h2><p>" + val.description + "</p><h3>Benefits</h3><ul>");
            for(var i = 0; i < val.benefits.length;i++){
                htmlInsertion += ("<li>" + val.benefits[i] + "</li>");
            }
            htmlInsertion += ("</ul><h3>Drawbacks</h3><ul>");
            for(var i = 0; i < val.drawbacks.length; i++){
                htmlInsertion += ("<li>" + val.drawbacks[i] + "</li>");
            }
            htmlInsertion += ("</ul></div>");
            $insertPoint.append(htmlInsertion);
            
            $('h2#' + key).click(function(){
                console.log('clicked');
                $(this).nextAll().toggle();
                if($(this).nextAll().is(":visible")){
                    $('img').attr('src', val.image);
                }
            });
            
        });
        $('h2').nextAll().hide();
    }
    
});

/*function initListeners(){
	$('h2').click(function(){
        console.log('clicked');
        $(this).nextAll().toggle();
        $('img').attr('src', 'images/static-line.jpg');
    });*/

