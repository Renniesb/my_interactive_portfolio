var portfolio = {
	//readmore javascript
	readmore : function(){
				    // Configure/customize these variables.
		    var showChar = 100;  // How many characters are shown by default
		    var ellipsestext = "...";
		    var moretext = "Show more >";
		    var lesstext = "Show less";


		    $('.card-text').each(function() {
		        var content = $(this).html();

		        if(content.length > showChar) {

		            var c = content.substr(0, showChar);
		            var h = content.substr(showChar, content.length - showChar);

		            var html = c + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';

		            $(this).html(html);
		        }

		    });

		    $(".morelink").click(function(){
		        if($(this).hasClass("less")) {
		            $(this).removeClass("less");
		            $(this).html(moretext);
		        } else {
		            $(this).addClass("less");
		            $(this).html(lesstext);
		        }
		        $(this).parent().prev().toggle();
		        $(this).prev().toggle();
		        return false;
		    });
	},

	//Owl carousal javascript
	owl: function () {

			$('.owl-carousel').owlCarousel({
			    loop:true,
			    autoplay:true,
			    nav:true,
			    center:true,
			    margin:10,
			    responsiveClass:true,
			    responsive:{
			        0:{
			            items:1,
			            nav:true
			        },
			        600:{
			            items:1,
			            nav:true
			        },
			        1000:{
			            items:1,
			            nav:true,
			            loop:false
			        }
			    }
			})
	}
}