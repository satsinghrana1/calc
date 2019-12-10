(function (params) {
    console.log('Cal initiated...')

    var calc = {
        init: function (params) {

            var img_data      = "dummy-image.png";
            var default_image = '<img src="' + img_data + '">';
            var html = '<div id="main-block">';

                html += '<input class="screen" id="screen" type="text" value="0" />';
                for (let index = 9; index > -1; index--) {                    
                    html += '<div class="block" id="block-'+index+'">'+index+'</div>';
                }
                html += '<div class="block" id="block-decimal">.</div>';
                html += '<div class="block" id="block-plus">+</div>';
                html += '<div class="block" id="block-minus">-</div>';
                html += '<div class="block" id="block-multiply">+</div>';
                html += '<div class="block" id="block-divide">/</div>';
                html += '<div class="block" id="block-equals">=</div>';      
                html += '<div class="block" id="block-clear">C</div>';      
            html += '</div>';

            $('.game-wrapper').append(html);
            this.track_clicks();           
            
        },
        create_blocks : function (params) {},
        load_default_image: function (params) { },
        track_clicks: function (params) {            
            $(document).on('click', '.block', function () {
                console.log(this);     
                
                var ct = $('.screen').val();
                
                if (ct == 0) { ct = '';}




                
                $('.screen').val( ct+$(this).text() )
            });            
        },

    };


    $('button').click(function (params) { });
    
    calc.init();

    
})();