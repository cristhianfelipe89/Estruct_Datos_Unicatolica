/*
PSEUDOCODIGO
Stack {
    LinkedListNode: head
}

Push(Stack: s, Type: value):
    LinkedListNode: node = LinkedListNode(value)
    node.next = s.head
    s.head = node

Pop(Stack: s):
    Type: value = null
    IF s.head != null:
        value = s.head.value
        s.head = s.head.next
    return value
*/

// Clase para los nodos de la lista enlazada
class LinkedListNode {
    constructor(value) {
        this.value = value; // Valor del nodo
        this.next = null; // Referencia al siguiente nodo
    }
}

// Clase para la pila
class Stack {
    constructor() {
        this.head = null; // Inicializamos la pila con un `head` vacío
    }

    // Método para apilar (push)
    push(value) {
        const node = new LinkedListNode(value); // Crear un nuevo nodo con el valor
        node.next = this.head; // El `next` del nuevo nodo apunta al nodo actual en la cima
        this.head = node; // El nuevo nodo se convierte en la cima de la pila
    }

    // Método para desapilar (pop)
    pop() {
        let value = null; // Valor por defecto
        if (this.head !== null) { // Verificar si la pila no está vacía
            value = this.head.value; // Guardar el valor de la cima
            this.head = this.head.next; // Mover la cima al siguiente nodo
        }
        return value; // Retornar el valor desapilado
    }

    // Método para imprimir la pila completa
    printStack() {
        let current = this.head; // Empezar desde el nodo en la cima
        const elements = []; // Almacenar los valores de la pila
        while (current !== null) {
            elements.push(current.value); // Agregar el valor del nodo actual
            current = current.next; // Avanzar al siguiente nodo
        }
        console.log(elements.join(" -> ")); // Mostrar los valores en formato legible
    }
}

// Ejemplo de uso
const stack = new Stack();
stack.push(50);
stack.push(80);
stack.push(45);

stack.printStack(); // Muestra: 45 -> 80 -> 50

console.log(stack.pop()); // 45
stack.printStack(); // Muestra: 80 -> 50

console.log(stack.pop()); // 80
stack.printStack(); // Muestra: 50

console.log(stack.pop()); // 50
stack.printStack(); // Muestra: (vacío, no hay nodos en la pila)

console.log(stack.pop()); // null (pila vacía)
