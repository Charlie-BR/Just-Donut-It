$(function() {

    var donut_api = "http://api.doughnuts.ga/doughnuts"

        $.ajax({
            url: donut_api,
            dataType: 'jsonp',
            method: 'GET',
            
            success: function(data) {
                console.log(data);
            for (var i=0; i < data.length; i++) {
              $("#doughnuts").append("<li>"+ data[i]['flavor']+" | "+data[i]['style']+"</li>")
                }
            },
    });

    $('.button-submit').on('click', function () { 
        var flavor_val = $('#doughnut-flavor').val();
        var style_val = $('#doughnut-style').val();
      
      $.ajax({
    	    url: donut_api,
    		dataType: 'jsonp',
            method: 'POST',
    		
            success: function(data) {
              $("#doughnuts").append("<li>"+ flavor_val +" | " +style_val+"</li>");
            }
    		
      });
    }); //


});    

