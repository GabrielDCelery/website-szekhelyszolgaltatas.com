!function(){$(document).ready(function(){function a(a,t){var n;$.ajax({method:"POST",url:"php/getdata-faq.php",data:a,dataType:"json"}).done(function(a){n=a,t(n)})}function t(a){var t={faq:a},n=Mustache.render(r,t);o.html(n)}var n=window.location.search.replace("?",""),e={querystring:n},o=$("#faq"),r=$("#template-faq").html();a(e,t)})}("JQuery");