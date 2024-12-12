$(document).ready(function(){



    //팝업 공통닫기

    $('.pop .black_bg').click(function(){

        $('.pop').removeClass('on');

    });



    $('.pop .close_btn').click(function(){

        $('.pop').removeClass('on');

    });



    $('.pop .p_btn').click(function(){

        $('.pop').removeClass('on');

    });



    $('.pop1 .black_bg').click(function(){

        $('.pop1').removeClass('on');

    });



    $('.pop1 .p_btn').click(function(){

        $('.pop1').removeClass('on');

    });



    $('.pop2 .black_bg').click(function(){

        $('.pop2').removeClass('on');

    });



    $('.pop2 .p_btns.btn1').click(function(){

        $('.pop2').removeClass('on');

    });



    $('.pop3 .black_bg').click(function(){

        $('.pop3').removeClass('on');

    });



    $('.pop3 .p_btns.btn1').click(function(){

        $('.pop3').removeClass('on');

    });





    //약관 모두동의 (j_term.html)

    $('.j_term #all_ck').change(function(){

        if($(this).is(":checked")){

            $('.j_term input[name="term"]').prop("checked", true);

            $('.j_term .btn_common').removeClass('gray');

        }else{

            $('.j_term input[name="term"]').prop("checked", false); 

            $('.j_term .btn_common').addClass('gray');

        }

    });

    $('.j_term input[name="term"]').change(function(){

        var total = $('.j_term input[name="term"]').length;

        var checked = $('.j_term input[name="term"]:checked').length;



        if(total != checked){

            $('.j_term #all_ck').prop("checked", false);

        }else{

            $('.j_term #all_ck').prop("checked", true);

        }

    });



    $('.header.s_head .r_btn.rb1').click(function(){

        $('.qrpop').addClass('on');

    });

    // $('.qrpop .close_btn').click(function(){

    //     $('.qrpop').removeClass('on');

    // });



    $('.header.s_head .r_btn.rb2').click(function(){

        location.href='st_chat_list.html'

    });



    $('.header.s_head .r_btn.rb3').click(function(){

        location.href='st_alarm.html'

    });





    //트레이너 > 만족도무게 물음표

    $('.page .rel .i_btn').each(function(data,index){

        $('.page .rel .i_btn').data('willClick', true);

    })



    $('.page .rel .i_btn').click(function(){

        if($(this).data("willClick")){

            $(this).next(".msg").addClass('on');

            $('.msg_close').addClass('on');

            $(this).data('willClick', false);

        }else{

            $(this).next(".msg").removeClass('on');

            $(this).data('willClick', true);

        }

    });

    $('.msg_close').click(function(){

        $('.msg_close').removeClass('on');

        $('.page .msg').removeClass('on');

        $('.page .rel .i_btn').data('willClick', true);

    });





    //지점장 > 트레이너 수정

    $('#trainer_edit input[name="h_day"]').change(function(){

        if($(this).is(":checked")){

            $(this).parents(".t_right").prev('.t_left').children('.select').prop('disabled', true);

        }else{

            $(this).parents(".t_right").prev('.t_left').children('.select').prop('disabled', false);

        }

    });





    //공지사항 / 1:1문의

    $('.page .cm_ul .cm_li').click(function(){

        $('.page .cm_ul .cm_li').removeClass('on');

        $(this).addClass('on');



        $('.page .tab').removeClass('on');

        $('.page .tab').eq($(this).index()).addClass('on');

    });





    //1:1문의 > 카테고리

    $('#comm .cate .c_btn').click(function(){

        $('#comm .cate .c_btn').removeClass('on');

        $(this).addClass('on');



        $('#comm .list_wrap .list2').removeClass('on');

        if($(this).index() == 1){

            $('#comm .list_wrap .gray').addClass('on');

        }else if($(this).index() == 2){

            $('#comm .list_wrap .blue').addClass('on');

        }else{

            $('#comm .list_wrap .gray').addClass('on');

            $('#comm .list_wrap .blue').addClass('on');

        }

    });

    $('#comm .cate2 .select').change(function(){

        $('#comm .list_wrap .list2').removeClass('on');



        var status = document.getElementById("status");

        var text = status.options[document.getElementById("status").selectedIndex].text;

    

        if(text == "답변전"){

            $('#comm .list_wrap .gray').addClass('on');

        }else if(text == "답변완료"){

            $('#comm .list_wrap .blue').addClass('on');

        }else{

            $('#comm .list_wrap .gray').addClass('on');

            $('#comm .list_wrap .blue').addClass('on'); 

        }

    });





    //답변하기 > 저장 클릭시

    $('.cs2_pop .btn2').click(function(){

        location.href='st_comm_sub3.html'

    });





    //회원관리 > 식단관리 > 날짜클릭시

    $('#m_people .mp_line').each(function(data,index){

        $('#m_people .mp_line').data("willOpen", true);

    });

    $('#m_people .mp_line .mp_top').click(function(){

        if($(this).parent().data("willOpen")){

            $('#m_people .mp_line').removeClass('on');

            $(this).parent().addClass('on');



            $('#m_people .mp_line').data("willOpen", true);

            $(this).parent().data("willOpen", false);

        }else{

            $('#m_people .mp_line').removeClass('on');

            $('#m_people .mp_line').data("willOpen", true);

        }

    });

    //피드백 > 저장

    $('.feed_pop .p_btn').click(function(){

        $('.feed_pop').removeClass('on');

    });







    //수강권 등록

    $('#tck .li_3').click(function(){

        $('#tck .li_3').removeClass('on');

        $(this).addClass('on');

    });



    //수강권 상세

    $('#tck .li_4').click(function(){

        $('#tck .li_4').removeClass('on');

        $(this).addClass('on');



        $('.page .tab').removeClass('on');

        $('.page .tab').eq($(this).index()).addClass('on');

    });





    //환불신청 팝업 닫기 (공통)

    $('.b_pop .black_bg').click(function(){

        var bpHeight = $('.b_pop .blue_bg').outerHeight(true);

        $('.b_pop .blue_bg').animate({'bottom' : - bpHeight + 'px'}, 0);

        $('.b_pop').removeClass('on');

    });

    $('.b_pop .close_btn').click(function(){

        var bpHeight = $('.b_pop .blue_bg').outerHeight(true);

        $('.b_pop .blue_bg').animate({'bottom' : - bpHeight + 'px'}, 0);

        $('.b_pop').removeClass('on');

    });









    //트레이너

    $('.header.t_head .r_btn.rb1').click(function(){

        $('.qrpop').addClass('on');

    });



    $('.header.t_head .r_btn.rb2').click(function(){

        location.href='tr_chat_list.html'

    });



    $('.header.t_head .r_btn.rb3').click(function(){

        location.href='tr_alarm.html'

    });







    $('.btn_fixed .btn_common').click(function(){

        if($(this).text() == "서명하기"){

            $('.signpop').addClass('on');

        }

    });

    $('.signpop .p_btn').click(function(){

        location.href='tr_schedule3.html';

    });







    //사용자

    $('.header.u_head .r_btn.rb1').click(function(){

        $('.qrpop').addClass('on');

    });

    // $('.qrpop .close_btn').click(function(){

    //     $('.qrpop').removeClass('on');

    // });

    $('.header.u_head .r_btn.rb1_1').click(function(){

        location.href='us_membership1.html'

    });



    $('.header.u_head .r_btn.rb2').click(function(){

        location.href='us_chat_list.html'

    });



    $('.header.u_head .r_btn.rb3').click(function(){

        location.href='us_alarm.html'

    });



    $('.shpop .sh_li').click(function(){

        $('.shpop').removeClass('on');

    });





    $('.sq_li').click(function(){

        $('.sq_li').removeClass('on');

        $(this).addClass('on');



        $('.page .tab').removeClass('on');

        $('.page .tab').eq($(this).index()).addClass('on');

    });



    $('.j_term input[name="term"]').change(function(){

        if($('#term1').is(":checked") && $('#term2').is(":checked") && $('#term3').is(":checked")){

            $('.j_term .btn_common').removeClass('gray');

        }

    });



    $('.j_term .btn_common').click(function(){

        if($(this).hasClass('gray')){



        }else{

            location.href="j_certi.html";

        }

    })



});