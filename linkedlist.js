// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor (data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor () {
        this.head = null;
    }

    insertFirst (data) {
        this.head = new Node(data, this.head)
    }

    size () {
        let nextNode = this.head;
        let counter = 0;

        while(nextNode) {
            nextNode = nextNode.next;
            counter++;
        }

        return counter;
    }

    getFirst() {
        return this.head;
    }

    getLast () {
        if (!this.head) {
            return null;
        } 

        let nextNode = this.head;

        while (nextNode) {
            if(!nextNode.next) {
                return nextNode;
            }
            nextNode = nextNode.next;
        }
    }

    clear() {
        this.head = null;
    }

    removeFirst() {
        if(!this.head) {
            return;
        }
        this.head = this.head.next;
    }

    removeLast () {
        if(!this.head) {
            return;
        }
        if(!this.head.next) {
            this.head = null;
            return;
        }

        let node = this.head.next;
        let previous = this.head;

        while(node.next) {
            previous = node;
            node = node.next;
        }
        previous.next = null;

    }

    insertLast(data) {
        const node = new Node(data);
        if(!this.head) {
            this.head = node;
            return;
        }
        this.getLast().next = node;
    }

    getAt(index) {
        if(!this.head) {
            return null;
        }
        let node = this.head;
        let counter = 0;

        while(!(counter === index)) {
            if(!node.next) {
                break;
            }
            node = node.next;
            counter++;
        }
        if(counter === index) {
            return node;
        } else {
            return null;
        }
    }

    removeAt(index) {
        if(!this.getAt(index)) {
            return null;
        }
        if(!this.head.next) {
            this.head = null;
            return;
        }
        if(index === 0) {
            this.head = this.head.next;
            return;
        }
        let previous = this.getAt(index-1);
        let node = previous.next;
        previous.next = node.next;
        return;
    }

    insertAt(data, index) {
        const newNode = new Node(data);
        if(!this.head && index === 0) {
            this.head = newNode;
            return;
        }
        if(index === 0) {
            newNode.next = this.head;
            this.head = newNode;
            return;
        }

        let previous = this.getAt(index - 1);
        if(!previous) {
            this.getLast().next = newNode;
            return;
        }
        let node = previous.next;
        if(!node) {
            previous.next = newNode;
            return;
        }
        newNode.next = node;
        previous.next = newNode;
        return;
    }

    forEach (fn) {
        let node = this.head;
        let counter = 0;

        while(node) {
            fn(node, counter);
            node = node.next;
            counter++;
        }
    }

    *[Symbol.iterator] () {
        let node = this.head;

        while(node) {
            yield node;
            node = node.next;
        }
    }
}
