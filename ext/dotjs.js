var baseURL = 'https://me.captnemo.in/';
$.ajax({
  url: baseURL+'.js/'+location.hostname.replace(/^www\./,'')+'.js',
  dataType: 'text',
  success: function(d){
    $(function(){ eval(d) })
  }
});

$.ajax({
  url: baseURL+'.css/'+window.location.host.replace(/^www\./, '') + '.css',
  dataType: 'text',
  success: function(d){
    var style = document.createElement('style');
    style.textContent = d;
    if(document.head){
      document.head.appendChild(style);
    }
    else{
      document.body.appendChild(style);
    }
  }
});