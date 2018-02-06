
 $(document).ready(function(){

    $('#btn1').on('click', Task1);
    $('#btn2').on('click', Task2);
    $('#btn3').on('click', Task3);
    $('#btn4').on('click', Task4);

    function Task1() {
        $('.red,ul').css("color","red");
    }
    function Task2() {
        $('div > p').css("color","blue");
    }
    function Task3() {
        $('p > strong').eq(0).css("font-style","oblique");
    }
    function Task4() {
        $('.blocks > div').css("background-color","magenta");
    }
});