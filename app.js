 fetch("https://api.github.com/users/sijanghm")
        .then(response=>response.json())
        .then(function(data){
            console.log(data);
            document.getElementById('profileImg').src = data['avatar_url'];
            document.getElementById('fname').textContent = data['name'];
            document.getElementById('bio').textContent = data['bio'];
            document.getElementById('gitLink').href = data['html_url'];

        })


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
