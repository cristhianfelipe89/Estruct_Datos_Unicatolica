/*
PSEUDOCODIGO

Queue {
    LinkedListNode: front
    LinkedListNode: back
}

Enqueue(Queue: q, Type: value):
    LinkedListNode: node = LinkedListNode(value)
    ➊ IF q.back == null:
        q.front = node
        q.back = node

    ELSE:
        ➋ q.back.next = node
        ➌ q.back = node


Dequeue(Queue: q):
    ① IF q.front == null:
            return null

    ② Type: value = q.front.value
    ③ q.front = q.front.next
            IF q.front == null:
                    q.back = null
    return value
*/

class LinkedListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// Clase para la cola
class Queue {
    constructor() {
        this.front = null; // nodo al frente de la cola
        this.back = null; // nodo al final de la cola
    }

    enqueue(value){
        const node  =  new LinkedListNode(value);
        if(this.back === null){
            //si la cola esta vacía
            this.front =  node;
            this.back = node;
        } else{
            this.back.next = node; //conectar el ultimo nodo al nuevo nodo.
            this.back = node; //actualizar el final de la cola
        }
    }

    dequeue(){
        if(this.front === null){
            //si la cola está vacia
            return null;
        }
        const value = this.front.value; // guarda el valor del frente
        this.front = this.front.next; //mover el frente al siguiente nodo
        if(this.front === null){
            //si la cola esta vacia
            this.back = null;
        }
        return value; //retorna el valor eliminado
    }
}


// Ejemplo de uso
const queue = new Queue();
queue.enqueue(110);
queue.enqueue(25);
queue.enqueue(330);

console.log(queue)

console.log(queue.dequeue()); // 110
console.log(queue.dequeue()); // 25
console.log(queue.dequeue()); // 330
console.log(queue.dequeue()); // null
