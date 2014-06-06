$.ajax({
  url: 'https://me.captnemo.in/.js/'+location.hostname.replace(/^www\./,'')+'.js',
  dataType: 'text',
  success: function(d){
    $(function(){ eval(d) })
  }
})
