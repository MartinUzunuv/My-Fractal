arr = [];

class kvadratche {
  constructor(x, y, a, speed) {
    this.x = x;
    this.y = y;
    this.a = a;
    this.speed = speed;
  }
  update() {
    this.a+=0.01
    this.x += Math.cos(this.a) * this.speed;
    this.y += Math.sin(this.a) * this.speed;
  }
}

for (let a = 0; a < Math.PI * 100; a += Math.PI / 100) {
  arr.push(
    new kvadratche(window.innerWidth / 2, window.innerHeight / 2, a, a/10)
  );
}

function draw() {
    // context.fillStyle = "#42bcf5"
    // context.fillRect(0,0,window.innerWidth,window.innerHeight)
  for (i = 1; i < arr.length - 1; i++) {
    let c = (Math.atan2(arr[i].x-arr[arr.length - i].x,arr[i].y-arr[arr.length - i].y))/(Math.PI)*255
    context.strokeStyle=`rgb(${c},${255-c}, ${c*c})`
    drawLine(arr[i].x, arr[i].y, arr[arr.length - i].x, arr[arr.length - i].y);
  }
}

function update() {
  for (i = 0; i < arr.length; i++) {
    arr[i].update();
  }
}

// class baba{
//     stara = 0;
//     grozna = false;
//     constructor(stara){
//         this.stara = stara+10
//     }
//     rojdenDen(){
//         this.stara++
//         console.log("Ti veche si " + this.stara)
//     }
// }

// viki = new baba(8)   //viki = {stara:18, grozna:false}
// viki.stara = 61;     //viki = {stara:61, grozna:false}

// cece = new baba(17)   //ceco = {stara:27, grozna:false}
