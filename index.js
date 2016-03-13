var glslify = require('glslify')

module.exports = {
  fragment: glslify('./fragment.glsl'),
  styles: {
    emissive: {type: 'vec3', default: [0.0, 0.0, 0.0]},
    ambient: {type: 'vec3', default: [0.11, 0.07, 0.07]},
    diffuse: {type: 'vec3', default: [0.03, 0.09, 0.04]},
    specular: { type: 'vec3', default: [0.16, 0.61, 0.23] },
    roughness: {type: 'float', default: 0.6, min: 0, max: 1},
    albedo: {type: 'float', default: 0.67, min: 0, max: 1},
    shininess: { type: 'float', default: 17.2, min: 0, max: 20.0 }
  },
  name: 'blinn-phong'
}
