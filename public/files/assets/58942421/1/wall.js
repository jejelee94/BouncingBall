var Wall = pc.createScript('wall');
Wall.attributes.add("materialAssetList", {type: "asset", assetType: "material", title: "Material Asset List", array: true});
// initialize code called once per entity
Wall.prototype.initialize = function() {
     this.entity.collision.on('contact', this.onContact, this);
        this.materialIndex = 0;
};

// update code called every frame
Wall.prototype.onContact = function () {
     this.materialIndex = (this.materialIndex + 1) % this.materialAssetList.length;
    this.app.root.findByTag('hit')[0].setPosition(0, 5.1, 0)
    var renders = this.entity.findComponents('render');
    for (var i = 0; i < renders.length; ++i) {
        var meshInstances = renders[i].meshInstances;
        for (var j = 0; j < meshInstances.length; j++) {
            meshInstances[j].material = this.materialAssetList[this.materialIndex].resource;
        }
    }
    setTimeout(()=> {
        this.app.root.findByTag('hit')[0].setPosition(0, 20.1, 0)}, 400)
};
Wall.prototype.update = function(dt) {
};

// swap method called for script hot-reloading
// inherit your script state here
// Wall.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// https://developer.playcanvas.com/en/user-manual/scripting/