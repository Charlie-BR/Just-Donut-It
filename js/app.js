$(function() {

    var donut_api = "http://api.doughnuts.ga/doughnuts"
    var flavor_val = $('#doughnut-flavor').val();
    var style_val = $('#doughnut-style').val();

    $('.button-submit').on('click', function () { 
      $.ajax({
    	    url: donut_api
    		dataType: 'jsonp',
            method: 'POST',
    		},
            
            success: function(data) {
              $("#doughnuts").append("<li>"+ flavor_val +" which is a " style_val "donut"+"</li>")
            }
    		
            fail: function(err) {
    			console.log('fail!');
    			console.log(err);
    		},
      });
    }); //

    $.ajax({
            url: donut_api
            dataType: 'jsonp',
            method: 'GET',
            
            success: function(data) {
            for (var i=0; i < data.length; i++) {
              $("#doughnuts").append("<li>"+ data[i]['id']+data[i]['flavor']+data[i]['style']+"</li>")
                }
            }
    });
});    

