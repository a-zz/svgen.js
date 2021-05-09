/* ************************************************************************** *
 * svgen.js - template worker script                                          *
 * ************************************************************************** */
var draw = SVG('#drawing');
var txtUrl = draw.text(function(add) {
  var logo = add.tspan('https://github.com/a-zz/svgen.js');
  logo.dx(25);
  logo.dy(25);
  logo.attr('font-family', 'monospace');
  logo.attr('font-weight', 'bold');
  logo.attr('cursor', 'pointer');
  logo.attr('text-decoration', 'underline');
  logo.fill('orange');
  logo.click(() => {
    window.location.href = 'https://github.com/a-zz/svgen.js';
  });
});
/* ************************************************************************** */
