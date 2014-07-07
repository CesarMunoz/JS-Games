var stage;
var imgMonsterARun = new Image();


function init()

{
	stage = new createjs.Stage(document.getElementById('canvas'));
	createjs.Ticker.addEventListener('tick', stage);

	drawSprites();
}

function drawSprites()
{
	var data = {
		'images': ['img/imgMonsterARun.png'],
		'frames':[[0,0,64,64]],
		'animations': {
			'walk':[0]
		}
	};

	var spriteSheet = new createjs.SpriteSheet(data);
	var monsterAnimation = new createjs.Sprite(spriteSheet, 'walk');
	stage.addChild(monsterAnimation);


	// bmpAnimation = new createjs.BitmapAnimation(spriteSheet);
	// bmpAnimation.gotoAndPlay('walk');
	// bmpAnimation.name = 'moster1';
	// bmpAnimation.direction = 90;
	// bmpAnimation.vX = 4;
	// bmpAnimation.x = 16;
	// bmpAnimation.y = 32;
	// bmpAnimation.currentFrame = 0;
	// stage.addChild(bmpAnimation);

	// createjs.Ticker.addListener(window);
	// createjs.Ticker.useRAF = true;
	// createjs.Ticker.setFPS = (60);
}













