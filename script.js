/*oeil_gauche*/

$(function(){
    $(".oeil_gauche").click(function(){
    $(".oeil_gauche").animate({bottom: '+=10px' ,top: '+=10px' ,bottom: '200px'})
            .animate({bottom: '-=10px' ,top: '+=10px'});
});
});
/*oeil_droit*/

$(function(){
    $(".oeil_droit").click(function(){
    $(".oeil_droit").animate({top: '50px'});
});
});

/*bras_gauche*/

$(function(){
    $(".bras_gauche").click(function(){
    $(".bras_gauche").animate({bottom: '+=200px' ,right: '+=200px' ,bottom: '200px'})
               .animate({bottom: '-=200px' ,right: '+=200px'});
});
});
/*bras_droit*/

$(function(){
    $(".bras_droit").click(function(){
    $(".bras_droit").animate({bottom: '+=200px' ,left: '+=200px' ,bottom: '200px'})
               .animate({bottom: '-=200px' ,left: '+=200px'});
});
});

/*pied_droit*/

$(function(){
    $(".pied_droit").click(function(){
    $(".pied_droit").animate({top: '100px'});
});
});

/*pied_gauche*/

$(function(){
    $(".pied_gauche").click(function(){
    $(".pied_gauche").animate({top: '100px'});
});
});
