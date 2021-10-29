var Movement = pc.createScript('movement');
// initialize code called once per entity
Movement.prototype.initialize = function() {
};
// update code called every frame
Movement.prototype.update = function(dt) {
    let keyboard = this.app.keyboard;
    let left = keyboard.isPressed(pc.KEY_A);
    let right = keyboard.isPressed(pc.KEY_D);
    let up = keyboard.isPressed(pc.KEY_W);
    let down = keyboard.isPressed(pc.KEY_S);
    let jump = keyboard.isPressed(pc.KEY_SPACE);
    let home = keyboard.wasPressed(pc.KEY_H)
    let z = keyboard.wasPressed(pc.KEY_Z)
    this.entity.rigidbody.applyForce(0, -9.8, 0);
    if(home || this.entity.getPosition().y < 0 || this.entity.getPosition().z > 20){
        this.entity.rigidbody.linearVelocity = pc.Vec3.ZERO;
        this.entity.rigidbody.angularVelocity = pc.Vec3.ZERO;
        this.entity.rigidbody.teleport(0, 3, 0)
        console.log('click')
    }
    if(left) {
        this.entity.rigidbody.applyImpulse(-0.5,0,0);
    }
    if(right) {
        this.entity.rigidbody.applyImpulse(0.5,0,0);
    }
    if(up) {
        this.entity.rigidbody.applyImpulse(0,0,-0.5);
    }
    if(down) {
        this.entity.rigidbody.applyImpulse(0,0,0.5);
    }
    if(jump && this.entity.getPosition().y < 1){
        this.entity.rigidbody.applyImpulse(0,5, 0);
    }
    if(z){
        console.log(this.entity.getPosition())
    }
    if(this.entity.getPosition().y < 0.7 && this.entity.getPosition().z <6.9){
        this.entity.rigidbody.applyImpulse(0,4, 0);
    }
    if(this.entity.getPosition().x > 6.9 && this.entity.getPosition().x < 7) {
        this.entity.rigidbody.applyImpulse(-7,0,0)
    }
    if(this.entity.getPosition().x < -6.9 && this.entity.getPosition().x > -7) {
        this.entity.rigidbody.applyImpulse(7,0,0)
    }
    if(this.entity.getPosition().z < -6.9 && this.entity.getPosition().z > -7) {
        this.entity.rigidbody.applyImpulse(0,0,7)
    }
};

// swap method called for script hot-reloading
// inherit your script state here
// Move.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// https://developer.playcanvas.com/en/user-manual/scripting/