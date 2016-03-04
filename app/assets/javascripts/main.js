$(document).on('page:load', function(){
      $('.slider').slider({full_width: true});
    $('.modal-trigger').leanModal();
    });

  $(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
  });
                    $(window).scroll(function() {
if ($(this).scrollTop() > 120){  
    $('.container').addClass("sticky");
  }
  else{
    $('.container').removeClass("sticky");
  }
if ($(this).scrollTop() > 120){  
    $('#ul').addClass("sticky");
  }
  else{
    $('#ul').removeClass("sticky");
  }
if ($(this).scrollTop() > 120){  
    $('#logo1').addClass("sticky");
  }
  else{
    $('#logo1').removeClass("sticky");
  }
if ($(this).scrollTop() > 120){  
    $('#mainmenu').addClass("sticky");
  }
  else{
    $('#mainmenu').removeClass("sticky");
  }
if ($(this).scrollTop() > 120){  
    $('.navbar-toggle').addClass("sticky");
  }
  else{
    $('.navbar-toggle').removeClass("sticky");
  }
});


