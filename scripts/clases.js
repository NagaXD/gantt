
/*
La única forma de obtener verdadera privacidad en JS es a través del alcance, 
por lo que no hay forma de tener una propiedad que sea miembro de this eso será 
accesible solo dentro del componente. La mejor manera de almacenar datos realmente 
privados en ES6 es con un WeakMap.

Se puede utilizar un WeakMap para evitar el rendimiento y la penalización de memoria
 del enfoque anterior. WeakMaps asocia datos con Objetos (aquí, instancias) de tal manera
que solo se puede acceder usando ese Mapa Débil. Por lo tanto, usamos el método de 
variables de ámbito para crear un WeakMap privado, luego usamos ese WeakMap para 
recuperar datos privados asociados con this. Esto es más rápido que el método de 
variables de ámbito porque todas las instancias pueden compartir un único WeakMap,
por lo que no es necesario que vuelva a crear métodos solo para hacer que accedan 
a sus propios WeakMaps.
*/

let tarea = (function() {
    const privpadre = new WeakMap();
    const privfechainicio = new WeakMap();
    const privfechatermino = new WeakMap();
    const privnombre = new WeakMap();
    const privtipo = new WeakMap();
    const privavance = new WeakMap();

    class tarea {
        constructor(padre, fechainicio,fechatermino,nombre,tipo,avance) {
            privpadre.set(this, padre);
            privfechainicio.set(this, fechainicio);
            privfechatermino.set(this, fechatermino);
            privnombre.set(this, nombre);
            privtipo.set(this, tipo);
            privavance.set(this, avance);

            this.getTiempoRestante = function() {
                return privfechatermino.get(this) - privfechainicio..get(this);
            };

            this.agregarTarea = function() {
                
            };

            this.dibujarTarea = function() {
                    
            };

            this.ocultarHijos = function() {
                
            };

            this.eliminarTarea = function() {
                
            }; 

            this.agregarResponsable = function() {
                
            };
            
            this.modificarAvance = function(valor) {
                privavance.set(this, valor);
            };       

            this.asignarPadre = function(valor) {
                privavance.set(this,valor);
            };
            this.obtenerPadre = function() {
                return privpadre.get(this);
            };
        }
    }


})();

let responsable = (function() {
    const nombre = new WeakMap();
    const rol = new WeakMap();

    class tarea {
        constructor(nombre,rol) {

            privnombre.set(this, nombre);
            privnrol.set(this, rol);

            this.getNombre = function() {
                return privnombre.get(this);
            };

            this.getRol = function() {
                return privrol.get(this);
            };

            this.setNombre = function(valor) {
                privnombre.set(this, valor);
            };

            this.setRol = function(valor) {
                privnrol.set(this, valor);
            };

            this.asignarRol = function() {
                
            };
        }
    }

})();

let rol = (function() {
    const nombre = new WeakMap();

    class tarea {
        constructor(rol) {

            privnombre.set(this, nombre);

            this.getNombre = function() {
                return privnombre.get(this);
            };

        }
    }

})();