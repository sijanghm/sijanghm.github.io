
var pagenumber=0;
     function next(next)
     {
     	if(next==true)
             {
             pagenumber = pagenumber+1;
     		}
     		else
     		{
             pagenumber = pagenumber-1;
     		}
     	document.getElementById('repos').innerHTML="";
     	$.ajax({
      url: 'https://api.github.com/users/sijanghm/repos?page='+pagenumber+'&per_page=5',
      type: "get",
      dataType: "json",
  
      success: function(data) {
          getData(data);
      }
    });
  
  function getData(data) {
      for (var j = 0; j < data.length; j++) {
          divLoop(data[j],j);
      }
  }

  
  
  function divLoop(rowData,j) {
    var reposHTML = document.getElementById('repos').innerHTML;
      reposHTML+=`<li class="lis"><a href="`+rowData.html_url+`">`+rowData.name+`</a></li><hr>`;
         document.getElementById('repos').innerHTML = reposHTML;
      }

     }
