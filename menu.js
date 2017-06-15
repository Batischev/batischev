//-------------------------------------------------------------------------
// Меню игры "Змейка"
//-------------------------------------------------------------------------

/**
* mmLogo - логотип игры
* mmDifficultyText - строка сложности
* buttons - кнопки меню
* menu - содержит логотип игры, кнопки меню и выбрр сложности
* 
* @var mmLogo, mmDifficultyText, buttons, menu;
*/

/**
* Работа со свойством {@link $initMenu}
* 
* Отрисовка меню
*
*/

function initMenu() {
    mmLogo = canvas.display.image({
        x: canvas.width / 2,
        y: 100,
        image: "images/logo.png",
        origin: { x: "center", y: "top" },
        height: 97,
        width: 387			
    });

    mmDifficultyText = canvas.display.text({
        origin: { x: "center", y: "top" },
	text: "Choose difficulty",
	x: canvas.width / 2,
	y: 350,
	font: "20px Audiowide",
	fill: "rgb(13, 199, 13)"
    });

    buttons = [];
    for (i=0; i<4; i++){
	    
        /**
         * Содержит кнопки меню
         * 
         * @var rect = canvas.display.rectangle({
         *  width: 100,
         *  height: 40,
         *  x: 185 + 120 * i,
         *  y: 400,
         *  fill: "rgb(40, 49, 40)",
         *  stroke: "1px rgb(14, 161, 14)",
         *  difficulty: i
         *  });
         */
		
        /**
         * Текст содержит надписи с выбором сложности
         * 
         *  var text = canvas.display.text({
         *  x: 50,
         *  y: 20,
         *  origin: { x: "center", y: "center" },
         *  font: "15px Audiowide",
         *  text: difficultyStrings[i],
         *  fill: "rgb(13, 199, 13)"
         * });
         */
		 
        rect.addChild(text);
        rect.bind("mouseenter", 
        function(){
            canvas.mouse.cursor("pointer");
	    this.fill = "rgb(47, 69, 48)";
	    this.stroke = "1px rgb(13, 199, 13)";
	    this.redraw();
        }).bind("mouseleave", 
        function(){
	    canvas.mouse.cursor("default");
	    this.fill = "rgb(40, 49, 40)";
	    this.stroke = "1px rgb(14, 161, 14)";
	    this.redraw();
        }).bind("click tap",
        function(){
	    startGame(this.difficulty);
        })
	buttons.push(rect);
    }

    menu = canvas.scenes.create("menu", function() {
        this.add(mmLogo);
	this.add(mmDifficultyText);
	for (i = 0; i < buttons.length; i++) {
	    this.add(buttons[i]);
	}
    });
}
