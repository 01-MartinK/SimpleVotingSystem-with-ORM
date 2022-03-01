$('#againstBtn').click(function(){  
  $.ajax({  
      url:'/answer',  
      method:'post',  
      dataType:'json',  
      data:{'with':false},  
  });  
  setTimeout(function () {
    alert('redirecting with vote')
    window.location.href = "/result";
}, 1000);
});  

$('#withBtn').click(function(){  
    $.ajax({  
        url:'/answer',  
        method:'post',  
        dataType:'json',  
        data:{'with':true},  
    });  
    setTimeout(function () {
      alert('redirecting with vote')
      window.location.href = "/result";
  }, 1000);
  });  