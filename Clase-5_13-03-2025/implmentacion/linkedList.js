/*
LinkedListNode {
    Type: value 
    LinkedListNode: next 
    }

    
LinkedListLookUp(LinkedListNode: head, Integer: element_number):
    LinkedListNode: current = head 
    Integer: count = 0 
        
WHILE count < element_number AND current != null: 
    current = current.next 
    count = count + 1 
    return current
*/

// Definición del nodo de la lista enlazada
class LinkedListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// Función para buscar un elemento en la lista enlazada
function linkedListLookUp(head, element_number) {
    let current = head;
    let count = 0;

    while (count < element_number && current !== null) {
        current = current.next;
        count++;
    }

    return current;
}

// Ejemplo de uso
const head = new LinkedListNode(25);
head.next = new LinkedListNode(2);
head.next.next = new LinkedListNode(3);
head.next.next.next = new LinkedListNode(10);
head.next.next.next.next = new LinkedListNode(6);


const resultNode = linkedListLookUp(head, 3);
console.log(`Value: ${resultNode.value}, Next: ${resultNode.next ? resultNode.next.value : null}`); 

        