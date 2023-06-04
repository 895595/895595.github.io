$(function(){
    let i=0
    let img=["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg"]
    $(".img").css({
        backgroundImage:"url(1.jpg)",
        backgroundSize:"100% 100%"
    })
    $(".right").on("click",function(e){
        i++
        if(i===img.length){
            i=0
        }
        setTimeout(function(){
            $(".img").css({
                backgroundImage:`url(${img[i]})`
            },500)

        })
        $(".img").fadeOut("1000",function(){
            $(".img").fadeIn(1000)
        })

        $(".left").on("click",function(){
            i--
            if(i===-1){
                i=img.length-1
            }
            setTimeout(function(){
                $(".img").css({
                    backgroundImage:`url(${img[i]})`
                },500)
    
            })
            $(".img").fadeOut("1000",function(){
                $(".img").fadeIn(1000)
            })

        })
    })


    setTimeout(function(){
         $(".img").css({
                backgroundImage:`url(${img[i]})`
            },500)

    })
    $(".img").fadeOut("1000",function(){
                $(".img").fadeIn(1000)
    })

})