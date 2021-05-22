var box1 = document.querySelector(".image-1");
var box2 = document.querySelector(".image-2");
var box3 = document.querySelector(".image-3");

var main_image = document.querySelector('.main-image');



box1.addEventListener('click', () =>{
    let mainImageSrc = main_image.src;
    let image = box1.style.backgroundImage;
    
    let style = box1.currentStyle || window.getComputedStyle(box1, false),
    bg_image_url = style.backgroundImage.replace(/url\((['"])?(.*?)\1\)/gi, '$2').split(',')[0];
    //main_image.src = bg_image_url;

    let saveImage =  mainImageSrc;

    box1.style.backgroundImage = "url('" + mainImageSrc + "')" ;
    mainImageSrc = bg_image_url;
    

    main_image.src = mainImageSrc;
    bg_image_url = saveImage;


});

box2.addEventListener('click', () =>{
    let mainImageSrc = main_image.src;
    let image = box2.style.backgroundImage;
    
    let style = box2.currentStyle || window.getComputedStyle(box2, false),
    bg_image_url = style.backgroundImage.replace(/url\((['"])?(.*?)\1\)/gi, '$2').split(',')[0];
    //main_image.src = bg_image_url;

    let saveImage =  mainImageSrc;

    box2.style.backgroundImage = "url('" + mainImageSrc + "')" ;
    mainImageSrc = bg_image_url;
    

    main_image.src = mainImageSrc;
    bg_image_url = saveImage;
    
       
    });


    box3.addEventListener('click', () =>{
        let mainImageSrc = main_image.src;
        let image = box3.style.backgroundImage;
        
        let style = box3.currentStyle || window.getComputedStyle(box3, false),
        bg_image_url = style.backgroundImage.replace(/url\((['"])?(.*?)\1\)/gi, '$2').split(',')[0];
        //main_image.src = bg_image_url;
    
        let saveImage =  mainImageSrc;
    
        box3.style.backgroundImage = "url('" + mainImageSrc + "')" ;
        mainImageSrc = bg_image_url;
        
    
        main_image.src = mainImageSrc;
        bg_image_url = saveImage;
        
           
        });
    