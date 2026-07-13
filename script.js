$(document).ready(function (){


   function gorevEkle(){


        let gorev = $('#yeniGorev').val() //Inputtaki Yazıyı Al

        if(gorev.trim() !== "") //Eğer Boş Bırakılmadıysa
        {
            //Listenin sonuna yeni bir html olarak bir li etiketi ve içerisine eklenmek istenen gorevi ekliyor ayrıca yanına bir tane sil butonu ekler
            $('#dinamikListe').append("<li>" + gorev + " <button class='silBtn'>Sil</button></li>");

            
            $('#yeniGorev').val("") // Inputun İçini Temizle

        }

    
   }

       
   $('#ekleBtn').click(function (){

        gorevEkle();   
    })

    $('#yeniGorev').on('keypress',function (olay){

        // olay.which veya olay.keycode bize basılan tuşun kodunu verir.
        if(olay.keyCode === 13)
        {
            gorevEkle() // Eğer basılan tuş Enter (13) ise gorevEkle() fonksiyonunu çalıştır
        }

    })


    $('#dinamikListe').on('click', ".silBtn",function (){

        //Tıklanan sil butonunun en yakınındaki ebeveyni (parent) yani bir üst elementi yani <li> satırını siler
        $(this).parent().remove()
    })

    $('#dinamikListe').on('click',"li",function (){
        $(this).attr('disabled',true)
        $(this).toggleClass('alindi')

        
        $('.silBtn').toggle(500,function(){
            $(this).attr('disabled',false)
        })

    })

})