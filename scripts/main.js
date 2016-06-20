$(function() {
  $('.container')
    .append('<ul class="idTabs"></ul>')
    .append('<section id="home"></section>')
    .append('<section id="about"></section>')
    .append('<section id="contact"></section>')
    .css({
      width: '60%',
      'text-align': 'center',
      margin: '0 auto'
    });

  $('.idTabs').append('<li><a href="#home">Home</a></li>')
    .append('<li><a href="#about">About</a></li>')
    .append('<li><a href="#contact">Contact</a></li>')
    .css({
      'list-style-type': 'none',
      'text-align': 'left',
      'border-bottom': '1px solid black'
    })
    .children().css({
      display: 'inline-block',
      padding: '5px 15px'
    })
    .children('a').css({
      'text-decoration': 'none',
      color: 'inherit'
    })
    .click(function(event) {
      event.preventDefault();
      $('.container > section').hide();
      $(this.getAttribute('href')).show();
    });

  $('#home').append('<img src="images/photo.jpg">')
    .append('<h1>Great Restaurant</h1>')
    .append('<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent faucibus libero eu orci hendrerit, vel porta felis euismod. Fusce nunc mi, sollicitudin ut rutrum a, tristique quis dolor. Proin pulvinar nibh augue, at interdum augue euismod eu. Sed porttitor euismod leo ut elementum. Cras pharetra ex ut fringilla accumsan. Donec nec lorem eu velit laoreet blandit. Maecenas fringilla sem vestibulum ex consectetur consectetur. Etiam sed nibh consequat, molestie sapien vel, lobortis risus. Pellentesque viverra nisi ac elit maximus, sed tincidunt nibh consectetur.</p>')
    .append('<p>Integer ultrices volutpat suscipit. Nullam feugiat mi sit amet lorem hendrerit, non accumsan velit dapibus. Fusce mollis justo id leo pulvinar ornare. Maecenas et lorem erat. Fusce non enim blandit ligula placerat faucibus ut eu nunc. Duis aliquet metus a metus pellentesque posuere. Nulla pharetra ipsum velit. Fusce nisi tortor, porttitor id ex quis, semper malesuada tortor. Etiam risus ante, imperdiet eu quam et, euismod euismod erat. Suspendisse vehicula magna vel justo ullamcorper imperdiet. Fusce in magna at erat varius convallis.</p>');

  $('#about').append('<h1>About</h1>')
    .append('<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent faucibus libero eu orci hendrerit, vel porta felis euismod. Fusce nunc mi, sollicitudin ut rutrum a, tristique quis dolor. Proin pulvinar nibh augue, at interdum augue euismod eu. Sed porttitor euismod leo ut elementum. Cras pharetra ex ut fringilla accumsan. Donec nec lorem eu velit laoreet blandit. Maecenas fringilla sem vestibulum ex consectetur consectetur. Etiam sed nibh consequat, molestie sapien vel, lobortis risus. Pellentesque viverra nisi ac elit maximus, sed tincidunt nibh consectetur.</p>')
    .hide();

  $('#contact').append('<h1>Contact</h1>')
    .append('<p>Integer ultrices volutpat suscipit. Nullam feugiat mi sit amet lorem hendrerit, non accumsan velit dapibus. Fusce mollis justo id leo pulvinar ornare. Maecenas et lorem erat. Fusce non enim blandit ligula placerat faucibus ut eu nunc. Duis aliquet metus a metus pellentesque posuere. Nulla pharetra ipsum velit. Fusce nisi tortor, porttitor id ex quis, semper malesuada tortor. Etiam risus ante, imperdiet eu quam et, euismod euismod erat. Suspendisse vehicula magna vel justo ullamcorper imperdiet. Fusce in magna at erat varius convallis.</p>')
    .hide();

});
