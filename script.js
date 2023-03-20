class InfiniteSlider{
    constructor(visibleSlides,slider_wrapper,div_width,slidename){ 
        this.genWidth = window.screen.width;
        this.visibleSlides = visibleSlides;
        this.clones = [];
        this.space = 0;
        this.sliderWrap = document.querySelector(slider_wrapper);
        this.picWidth=Math.floor(this.genWidth / this.visibleSlides);
        this.sliderWrap.style.setProperty(div_width, this.picWidth+"px");
        this.allSlides = [...document.querySelectorAll(slidename)];
    }
    setUp(){
        
        this.allSlides.forEach((item)=>{
            let clone = item.cloneNode(true);
            clone.classList.add('clone');
            this.sliderWrap.appendChild(clone);
            this.clones.push(clone);
        });
        let clonedItems = [...document.querySelectorAll(".clone")];
        let sliderLength = this.picWidth * clonedItems.length * 2;
        this.sliderWrap.style.width =`${sliderLength}px`;
        
    }
    slide(){
        this.setUp();
        setInterval(()=>{
            this.space = this.allSlides[0].offsetWidth + this.space;        
            if (this.space <= this.picWidth * 4){
                this.sliderWrap.style.transition = "all 1.8s";
                this.sliderWrap.style.transform =  `translateX(${-this.space}px)`;
            }
            else{
                this.sliderWrap.style.transition = "all 0s";
                this.sliderWrap.style.transform =  `translateX(${0}px)`;
                this.space = 0;
            }
            
            // 
        },2000);
        

    }


}

let slider = new InfiniteSlider(4,".slider-wrapper","--div_width",".slide"); 
slider.slide();