const btns = $('.btns')
const mainImg = $('#mainImg')
const head = $('#textSlide h1')
const para = $('#textSlide p')
var current = 1
const heads = ['Discover innovative ways to decorate','We are available all across the globe',' Manufactured with the best materials']
const ps = [`We provide unmatched quality, comfort, and style for property owners across the country. 
Our experts combine form and function in bringing your vision to life. Create a room in your 
own style with our collection and make your property a reflection of you and what you love.`,`With stores all over the world, it's easy for you to find furniture for your home or place of business. 
Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
store locator. Any questions? Don't hesitate to contact us today.`,`Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
to ensure that every product is made as perfect and as consistent as possible. With three decades of 
experience in this industry, we understand what customers want for their home and office.`]

btns.click(function (e) { 
  var val = e.currentTarget.attributes.value.value
  if(val == -1 && current!=1) current--
  else if(val == -1 && current==1) current = 3
  else if(val == 1 && current!=3) current++
  else current = 1
  mainImg.attr('src', `./images/desktop-image-hero-${current}.jpg`);
  head.text(heads[current-1]);
  para.text(ps[current-1]);
});