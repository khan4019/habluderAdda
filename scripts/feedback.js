var habluGudamRef = new Firebase('https://hablu.firebaseio.com/');
$('#submitComment').on('click',function (e) {
  var hablu = $('#name').val();
  var email = $('#email').val();
  var feedback = $('#feedback').val();
  var rex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if(!feedback){
    $('#feedback').parent().addClass('has-error');
  }
  else if(!email || !rex.test(email)){
    $('#email').parent().addClass('has-error');
    $('#feedback').parent().removeClass('has-error');
  }
  else if(!hablu){
    $('#name').parent().addClass('has-error')
  }
  else{
    var habluDetail = {name:hablu, email:email, feedback:feedback, timestamp: Firebase.ServerValue.TIMESTAMP};
    habluGudamRef.push(habluDetail);
    $('#feedback').val('');  
  }
});


habluGudamRef.endAt().limit(10).on("value", function(response) {
  var data = response.val();
  var comments =[];
  for (var i in data) {
    comments.push(data[i]);
  };
  updateList(comments);
});

function updateList (data) {
	var docfrag = document.createDocumentFragment();

	for (var i = data.length - 1; i >= 0; i--) {
		var entry = document.createElement('div');
    entry.className = 'comment-holder';
    var nameParagraph = document.createElement('p');
    
    var d = (new Date(data[i].timestamp)+'').split(' ');
    var commentTime = [d[2], d[1], d[3], d[4]].join(' ');
    nameParagraph.innerHTML = '<span class="comment-name">'+data[i].name+'</span>'+'<span class="comment-time">'+commentTime+'</span>'; 
    
    var commentParagraph = document.createElement('p');
    commentParagraph.innerHTML = '<span class="comment-text">'+ data[i].feedback +'</span>';
    
		entry.appendChild(nameParagraph);
    entry.appendChild(commentParagraph);
		docfrag.appendChild(entry);
	};

	$('#latestComments').empty().append(docfrag);  
}


