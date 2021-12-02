AFRAME.registerComponent("wire-fence", {
  init: function () {
    //starting x position
    posX = -20;
    //starting z-position
    posZ = 85;

    for (var i = 0; i < 20; i++) {
      //create wire-fence entity
      var wireFence1 = document.createElement("a-entity");
      var wireFence2 = document.createElement("a-entity");
      var wireFence3 = document.createElement("a-entity");
      var wireFence4 = document.createElement("a-entity");


      //set x, y and z position
      posX = posX + 5;
      posY = 2.5;
      posZ = posZ - 10;

      //scale 
      var scale = { x: 2, y: 2, z: 2 };

      //set the id
      wireFence1.setAttribute("id", "wireFence1" + i);
      wireFence2.setAttribute("id", "wireFence2" + i);
      wireFence3.setAttribute("id", "wireFence3" + i);
      wireFence4.setAttribute("id", "wireFence4" + i);

      //set the position
      wireFence1.setAttribute("position", { x: posX, y: 2.5, z: -35 });
      wireFence2.setAttribute("position", { x: posX, y: 2.5, z: 85 });
      wireFence3.setAttribute("position", { x: -30, y: 2.5, z: posZ });
      wireFence4.setAttribute("position", { x: 50, y: 2.5, z: posZ });

      //set the scale
      wireFence1.setAttribute("scale", scale);
      wireFence2.setAttribute("scale", scale);
      wireFence3.setAttribute("scale", scale);
      wireFence4.setAttribute("scale", scale);

      //set the model
      wireFence1.setAttribute(
        "gltf-model",
        "./models/tech wall/scene.gltf"
      );

      wireFence2.setAttribute(
        "gltf-model",
        "./models/tech wall/scene.gltf"
      );

      wireFence3.setAttribute(
        "gltf-model",
        "./models/tech wall/scene.gltf"
      );

      wireFence4.setAttribute(
        "gltf-model",
        "./models/tech wall/scene.gltf"
      );

      //set the rotation
      wireFence3.setAttribute("rotation", { x: 0, y: 90, z: 0 });
      wireFence4.setAttribute("rotation", { x: 0, y: 90, z: 0 });

      //set the physics body
      wireFence1.setAttribute("static-body", {});
      wireFence2.setAttribute("static-body", {});
      wireFence3.setAttribute("static-body", {});
      wireFence4.setAttribute("static-body", {});

      var sceneEl = document.querySelector("#scene");
      //attach the entity to the scene
      sceneEl.appendChild(wireFence1);
      sceneEl.appendChild(wireFence2);
      sceneEl.appendChild(wireFence3);
      sceneEl.appendChild(wireFence4);

    }
  },
});


//boxes
AFRAME.registerComponent("boxes", {
  schema: {
    height: { type: "number", default: 4 },
    width: { type: "number", default: 4 },
    depth: { type: "number", default: 4 },
  },
  init: function () {

    //x position array
    px = [22.86, -17.35, -12.81, 0.44, -30.18,
      -25.89, 15.61, 29.68, 11.95, -15.40,
      -14.09, 34.76, 2.29, 21.77, 1.57,
      34.72, 12.04, -10.90, 6.48, 15.66];

    //z position array
    pz = [54.56, -4.71, 14.91, 56.74, 41.13,
      50.76, 57.84, 7.02, -5.24, -26.82,
      27.59, -35.78, 34.52, 31.32, -9.22,
      26.72, 48.90, 27.24, 9.94, 54.29 ];

    for (var i = 0; i < 20; i++) {
      var box = document.createElement("a-entity");

      posX = px[i];
      posY = 1;
      posZ = pz[i];

      position = { x: posX, y: posY, z: posZ };

      box.setAttribute("id", "box" + i);      
      box.setAttribute("position", position);

      box.setAttribute("geometry", {
        primitive: "box",
        height: this.data.height,
        width: this.data.width,
        depth: this.data.depth,
      });

      box.setAttribute('gltf-model', "#box")

      box.setAttribute("static-body", {});

      box.setAttribute("animation-mixer")


      var sceneEl = document.querySelector("#scene");
      sceneEl.appendChild(box);
    }
  },
});