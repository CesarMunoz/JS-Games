var stage, queue;

var faces = ['garlic', 'onion', 'pepper', 'potato', 'spinach', 'tomato'];
var cards = [];
var cardsFlipped = [];
var matches = 0;

function preload () {
	queue = new createjs.LoadQueue();
	queue.addEventListener("complete", init);
	queue.loadManifest([
		{id:'shell', src:'img/card.png'},
		{id:'back', src:'img/back.png'},
		{id:'garlic', src:'img/garlic.png'},
		{id:'onion', src:'img/onion.png'},
		{id:'pepper', src:'img/pepper.png'},
		{id:'potato', src:'img/potato.png'},
		{id:'spinach', src:'img/spinach.png'},
		{id:'tomato', src:'img/tomato.png'},
	]);
}

function init ()
{
	stage = new createjs.Stage(document.getElementById('canvas'));
	console.log('INIT');
	buildCards();
	shuffleCards();
	dealCards();
	startGame();
}

function buildCards()
{
	var i, card, card2, bmp, label, face;
	for (var i = 0; i < faces.length; i++) {
		card = new createjs.Container();
		bmp = new createjs.Bitmap(queue.getResult('shell'));
		card.regX = bmp.image.width / 2;
		card.regY = bmp.image.height / 2;
		card.addChild(bmp);
		face = faces[i];
		bmp = new createjs.Bitmap(queue.getResult(face));
		bmp.regX = bmp.image.width / 2;
		bmp.regY = bmp.image.height / 2;
		bmp.x = card.regX;
		bmp.y = 70;
		card.addChild(bmp);
		label = new createjs.Text(faces[i].toUpperCase(), "20px Arial", "#FFF");
		label.textAlign = "center";
		label.x = card.regX;
		label.y = 144;
		card.addChild(label);
		bmp = new createjs.Bitmap(queue.getResult('back'));
		bmp.name = 'back';
		card.addChild(bmp);
		card2 = card.clone(true);
		card.key = card2.key = faces[i];
		cards.push(card, card2);
		card.shadow = card2.shadow = new createjs.Shadow('#333', 3, 3, 5);
	};
}

function shuffleCards()
{
	var i, card, randomIndex;
	var l = cards.length;
	var shuffleCards = [];
	for (i=0;i<l;i++)
	{
		randomIndex = Math.floor(Math.random()*cards.length);
		shuffleCards.push(cards[randomIndex]);
		cards.splice(randomIndex, 1);
	}
	cards.concat(shuffleCards);
}

function dealCards()
{

}

function startGame()
{

}












