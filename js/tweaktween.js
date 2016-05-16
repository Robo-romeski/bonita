$(function(){
				
				var $startAnim = $("div.navbar-header")
				var $demoText = $("a#button.navbar-brand")
				
				//Split the text into characters and wrap every character into span element, then convert the whitespaces to whitespace characters.
				$demoText.html( $demoText.html().replace(/./g, "<span>$&</span>").replace(/\s/g, "&nbsp;"));
				
				$startAnim.on("click", startAnimation);
				
function startAnimation(){
				var tl = new TimelineLite, 
    //mySplitText = new SplitText($demoText, {type:"words,chars"}), 
    chars = $('a#button.navbar-brand span') //an array of all the divs that wrap each character

TweenLite.set($demoText, {perspective:400});

tl.staggerFrom(chars, 0.8, {opacity:0.2, scale:1, y:180, rotationX:180, transformOrigin:"0% 50% -50",  ease:Back.easeOut}, .09, "+=0");




				
				
			}
		});
