/**
 * Created by paulnta on 27.05.15.
 */

$(function(){

    var message = $("#message");
    var background = $("#color-effect");


    message.hide();
    message.show(1500);
    var colors = [
                    "#00a885",
                    "#3d8eb9",
                    "#9365b8",
                    "#475577",
                    "#f37934",
                    "#fba026",
                    "#b8312f",
                    "#1abc9c",
                    "#a38f84"
    ];


    background.css( {backgroundColor : colors[Math.floor(Math.random() * colors.length)]});


    var animatecolor = function(color){
        background.delay(1000).animate({
            backgroundColor: color
        }, 2000, delayedAnimation());
    };

    var delayedAnimation = function(){
        setTimeout(function(){
            animatecolor(colors[Math.floor(Math.random() * colors.length)],1000);
        },1000);
    };

    delayedAnimation();
});