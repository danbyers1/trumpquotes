$("#btn").click(function(){
  $.ajax({
    method: "GET",
    url: "https://api.whatdoestrumpthink.com/api/v1/quotes/random",
    dataType: 'json'
  })
  .done(addP)
  .fail(function(){
    alert("OH NO! FAILED!");
  })
});

function addP (data){
	console.log(data);
  $("#quote").text(data.message);
}