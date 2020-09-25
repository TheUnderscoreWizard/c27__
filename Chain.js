class Chain{
 constructor(bodyA, bodyB){
 var options={
     bodyA:bodyA,
     bodyB:bodyB,
     stiffness:0.04,
     length: 10
 }
 this.Chain=Constraint.create(options);
 World.add(world, this.Chain);
 }
display(){
var PointA=this.Chain.bodyA.position;
var PointB=this.Chain.bodyB.position;
strokeWeight(10);
line(PointA.x,PointA.y,PointB.x,PointB.y);
}
}