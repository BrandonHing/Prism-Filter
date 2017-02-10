var sliderred
var sliderblue
var slidergreen

function setup() {
  //sets up video
  createCanvas(320, 240);
  capture = createCapture(VIDEO);
  capture.size(320, 240);
  capture.hide();
  //sets up sliders
  sliderred = createSlider(0,300000,150000);//this slider changes red values
  sliderred.position(340, 10);
  sliderred.style('width', '80px');
  sliderblue = createSlider(0,300000,150000);//this slider changes blue values
  sliderblue.position(340, 40);
  sliderblue.style('width', '80px');
  slidergreen = createSlider(0,300000,150000);//this slider changes green values
  slidergreen.position(340, 70);
  slidergreen.style('width', '80px');
}

function draw() {
  
  image(capture, 0, 0, 320, 240);
   loadPixels();
      var val = sliderred.value();//converts sliders into shorter variables
      var val2 = sliderblue.value();
      var val3 = slidergreen.value();
     for(var i=0;i<pixels.length/2;i+=4) {
      reds = pixels[i]
      greens = pixels[i+1]
      blues = pixels[i+2]
      pixels[i+150000] = reds;
      pixels[i+1+val3] = greens;
      pixels[i+2+val2] = blues;
      pixels[i+val] = reds;
      pixels[i+1+90000]= greens;
      pixels[i+2+val2] = blues;
      pixels[i+val] = reds;
      pixels[i+1+val3] = greens;
      pixels[i+2+10000] = blues;
     }
  for(var i=0;i<pixels.length/4;i+=4) {
      reds = pixels[i]
      greens = pixels[i+1]
      blues = pixels[i+2]
      pixels[i+val] = reds;
      pixels[i+1+240000] = greens;
      pixels[i+2+val2] = blues;
  }
    for(var i=0;i<pixels.length/8;i+=4) {
      reds = pixels[i]
      greens = pixels[i+1]
      blues = pixels[i+2]
      pixels[i+val] = reds;
      pixels[i+1+val3] = greens;
      pixels[i+2+val2] = blues;
      pixels[i+3+180000] = 255;
      pixels[i+val] = reds;
      pixels[i+1+val3] = greens;
      pixels[i+2+200000] = blues;
  }
      updatePixels();
      stroke(255,255,255,75)
      strokeWeight(2)
      //lines to represent a prism
      line(120,100,0,240)
      line(120,100,320,240)
      line(120,100,75,0)
      line(120,100,320,125)
      line(120,100,0,50)
      line(120,100,50,320)
}
//# of pixels = 307200