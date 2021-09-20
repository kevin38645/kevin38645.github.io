/*
var balloon = this.add.image(400,200,'balloon')
    // var balloon = this.createBalloon()
    balloon.setInteractive()


    this.input.on('pointermove',function(pointer){
        this.mouseSpot.get(pointer)
        this.target.x = pointer.x
        this.target.y = pointer.y
    },this)

    this.input.on('pointerdown',function(pointer){
        this.clickMouseSpot.get(pointer)
    },this)

    this.input.on('pointerdown',this.startDrag,this)
}
startDrag(pointer,targets){
    this.input.off('pointerdown',this.startDrag,this)
    this.dragObj = targets[0]
    this.input.on('pointermove',this.doDrag,this)
    this.input.on('pointerup',this.stopDrag,this)

}

doDrag(pointer){
    if (typeof this.dragObj !== "undefined")
    {
        this.dragObj.x = pointer.x;
        this.dragObj.y = pointer.y;
    }
}

stopDrag(pointer){
    this.input.on('pointerdown',this.startDrag,this)
    this.input.off('pointermove',this.doDrag,this)
    this.input.off('pointerup',this.stopDrag,this)
}
*/