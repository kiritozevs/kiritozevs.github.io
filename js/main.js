$(document).ready(function(){

    $(function() {
        $('.chart').easyPieChart({
            //your options goes here
        });

        $('a[href^="#"]').click(function(){
        	var target = $(this).attr('href');
        	$('html, body').animate({
        		scrollTop: $(target).offset().top
        	}, 900)
        });
    });
});
