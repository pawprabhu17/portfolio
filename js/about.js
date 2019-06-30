$("li:nth-child(1)").hover(function(){
    $(this).append($("<div class='html'>80%</div>").addClass("html"));    
    },function(){
        $(this).find("div:last").remove();
    }
);

$("li:nth-child(2)").hover(function(){
    $(this).append($("<div class='bootstrap'>75%</div>").addClass("bootstrap"));
    },function(){
        $(this).find("div:last").remove();
    }
);

$("li:nth-child(3)").hover(function(){
    $(this).append($("<div class='css'>70%</div>").addClass("css"))
    },function(){
        $(this).find("div:last").remove();
    }
);

$("li:nth-child(4)").hover(function(){
    $(this).append($("<div class='java'>60%</div>").addClass("java"));
    },function() {
        $( this ).find( "div:last" ).remove();
    }
);

$("li:nth-child(5)").hover(function(){
    $(this).append($("<div class='javascript'>50%</div>").addClass("javascript"));
    },function(){
        $(this).find("div:last").remove();
    }
);   

$("li:nth-child(6)").hover(function(){
    $(this).append($("<div class='angular'>30%</div>").addClass("angular"));
    },function(){
        $(this).find("div:last").remove();
    }
);


$("ul div:nth-child(1)").hover(function(){
    $(this).append($("<div class='marks'>CGPA: 8.72</div>").addClass("marks"));
    },function(){
    $(this).find("div:last").remove();
    }
);

$("ul div:nth-child(2)").hover(function(){
    $(this).append($("<div class='marks'>PERCENTAGE: 93.66%</div>").addClass("marks"));
    },function(){
    $(this).find("div:last").remove();
    }
);

$("ul div:nth-child(3)").hover(function(){
    $(this).append($("<div class='marks'>CGPA: 10</div>").addClass("marks"));
    },function(){
    $(this).find("div:last").remove();
    }
);