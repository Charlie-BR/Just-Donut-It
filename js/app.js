$(function() {
  $.ajax({
    		url: 'http://api.doughnuts.ga/doughnuts'
    		method: 'GET',
    		dataType: 'json',
    		data: {
    			id: $('id').val();
                style: $('style').val();
                flavor: $('flavor').val();
    			}
    		},
                success: function(data, textStatus, jqXHR) {
                $("#results").html('');
                    for (var i = 0; i < data['Search'].length; i++) {
                    $("#results").append("<li>"+ data['Search'][i]['Title'] + ", " + data['Search'][i]['Year'] +"</li>")
        }
    		fail: function(err) {
    			console.log('fail!');
    			console.log(err);
    		},
    		always: function() {
    			console.log('i always happen');
    		}
    	});
});

