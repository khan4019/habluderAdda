var habluGudamRef = new Firebase('https://hablu.firebaseio.com/');
$('#submitComment').on('click',function (e) {
  var hablu = $('#name').val() || 'hablu';
  var email = $('#email').val() || 'habluder@gmail.com';
  var feedback = $('#feedback').val();
  var habluDetail = {name:hablu, email:email, feedback:feedback, timestamp: Firebase.ServerValue.TIMESTAMP};
  habluGudamRef.push(habluDetail);
  
  $('#feedback').val('');
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
		var entry = document.createElement('li');
		entry.appendChild(document.createTextNode(data[i].feedback));
		docfrag.appendChild(entry);
	};
	$('#latestComments').empty().append(docfrag);  
}