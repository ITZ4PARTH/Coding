class Form {
  constructor() {
   this.input= createInput("") 
   this.playButton = createButton("giveheadshot")
   this.titleImg = createImg ("./assets/title.png")
   this.greeting = createElement ("h2")
  }
handleMousePressed(){
  this.playButton.mousePressed(()=>{
    this.input.hide()
    this.playButton.hide()
   var message = "Hello ${this.input.value()} </br>wait for another player to join';"
   this.greeting.html(message)
  })
}
  






  setElementPosition() {
    this.titleImg.position (120,100)
    this.input.position (width/2-110,height/2-80)
    this.playButton.position (width/2-90,height/2-20)
    this.greeting.position (width/2-300,height/2-100)
  }
display(){
  this.setElementPosition()
  handleMousePressed()
}
}
