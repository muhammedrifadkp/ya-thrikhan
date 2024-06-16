$(document).ready(function () {
    setTimeout(function () {
        $('.loader').animate
            (
                {
                    top: '-137px',
                    left: '12px',
                    width: '107.5px',
                    // height: '500px'
                }
                , 2000, function () {
                $('.display_none').fadeIn(1000);
                $('.loader').fadeOut(1000);
            }
            );
    }, 2000);



});