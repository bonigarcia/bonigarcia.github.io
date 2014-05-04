$(document).ready(function () {
    
    $(".portfolio a").hover(function () {
        $(this).children("img").animate({ opacity: 0.75 }, "fast");
    }, function () {
        $(this).children("img").animate({ opacity: 1.0 }, "slow");
    });

    var $portfolioClone = $(".portfolio").clone();

    $(".portfolio a[rel^='prettyPhoto']").prettyPhoto({ social_tools: false });

    $(".filter a").click(function (e) {

        $(".filter li").removeClass("current");

        var $filterClass = $(this).parent().attr("class");

        if ($filterClass == "all") {
            var $filteredPortfolio = $portfolioClone.find("li");
        } else {
            var $filteredPortfolio = $portfolioClone.find("li[data-type~=" + $filterClass + "]");
        }

        $(".portfolio").quicksand($filteredPortfolio, {
            duration: 800,
            useScaling: true,
            easing: 'easeInOutQuad'
        }, function () {

            $(".portfolio a").hover(function () {
                $(this).children("img").animate({ opacity: 0.75 }, "fast");
            }, function () {
                $(this).children("img").animate({ opacity: 1.0 }, "slow");
            });

            $(".portfolio a[rel^='prettyPhoto']").prettyPhoto({ social_tools: false });

        });

        $(this).parent().addClass("current");

        e.preventDefault();
    })
});
