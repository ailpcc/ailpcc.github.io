var xhr = new XMLHttpRequest();
xhr.open('get', 'https://v1.hitokoto.cn');
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    var data = JSON.parse(xhr.responseText);
    var hitokoto = document.getElementById('hitokoto_text');
    hitokoto.href = 'https://hitokoto.cn/?uuid=' + data.uuid
    hitokoto.innerText = data.hitokoto;
  }
}
xhr.send();

$(function(){
	setInterval("hitokoto_text",1000);
	
})

function hitokoto(){
	$.get('https://v1.hitokoto.cn','',function(res){
		$('#hitokoto_text').html(res);
	})
}