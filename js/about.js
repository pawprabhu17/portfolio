$('a.active').click(function(e){    
    e.preventDefault();
});

$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip(); 
});


$("ul li:nth-child(1)").hover(function(){      
    $(this).append($("<div class='html'>80%</div>").addClass("html"));    
    },function(){
        $(this).find("div:last").remove();
    }
);

$("ul li:nth-child(2)").hover(function(){
    $(this).append($("<div class='bootstrap'>75%</div>").addClass("bootstrap"));
    },function(){
        $(this).find("div:last").remove();
    }
);

$("ul li:nth-child(3)").hover(function(){
    $(this).append($("<div class='css'>70%</div>").addClass("css"))
    },function(){
        $(this).find("div:last").remove();
    }
);

$("ul li:nth-child(4)").hover(function(){
    $(this).append($("<div class='java'>60%</div>").addClass("java"));
    },function() {
        $( this ).find( "div:last" ).remove();
    }
);

$("ul li:nth-child(5)").hover(function(){
    $(this).append($("<div class='sql'>60%</div>").addClass("sql"));
    },function() {
        $( this ).find( "div:last" ).remove();
    }
);

$("ul li:nth-child(6)").hover(function(){
    $(this).append($("<div class='javascript'>50%</div>").addClass("javascript"));
    },function(){
        $(this).find("div:last").remove();
    }
);   

$("ul li:nth-child(7)").hover(function(){
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

$("section div:nth-child(1)").hover(function(){
    $(this).append($("<p class='desc'>The Student Progress Monitoring System project has been created with a view of maintaining records of all the students with regard to their personal information and academic performance.</p>").addClass('desc'));
    },function(){
    $(this).find("p:last").remove();
    }
);

$("section div:nth-child(2)").hover(function(){
    $(this).append($("<p class='desc'>Created a tourism website (only Front end) on Kashmir.</p>").addClass("desc"));
    },function(){
    $(this).find("p:last").remove();
    }
);

$("section div:nth-child(3)").hover(function(){
    $(this).append($("<p class='desc'>The program simulate the working of Miniature Steam Engine.This project is implemented using OpenGL libraries underlying all the basic concepts ofcomputer graphics.</p>").addClass("desc"));
    },function(){
    $(this).find("p:last").remove();
    }
);
