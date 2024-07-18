type llData = {
    num: Number
}

type LLNode = any

class node {

    num: Number
    next: node | null
    prev?: node | null

    public constructor(data: llData) {
        this.num = data.num;
        this.next = null;
        // this.prev = null;
    }
}


// * Dry Run, prints each node Object with its num, next (and prev which doesn't exist yet)
// let n = new node({ num: 4 })
// let n2 = new node({ num: 10 })
// let n3 = new node({ num: 5 })
// n.next = n2
// n2.next = n3

// console.log("First Element: ", n)
// console.log("---------------")
// console.log("Second Element: ", n.next)
// console.log("---------------")
// console.log("Third Element: ", n.next.next)



export class linkedList {
    head: node
    curNode: node
    node: node
    itr: node
    constructor(data: llData) {
        this.head = new node(data)
        this.curNode = this.head
        // this.head.prev = null
    }
    addNode(data: llData) {
        if (this.head.next === null) {
            this.node = new node(data)
            this.curNode.next = this.node
        }
        else {
            this.node = new node(data)
            this.curNode.next = this.node
            this.curNode = this.curNode.next
            this.curNode.next = null
        }
    }

    iterator() {
        this.itr = this.head
        while (this.itr !== null) {
            console.log(this.itr)
            console.log("-----------------")

            // ? added "as node" because its giving error type node|null not assignable to node
            this.itr = this.itr.next as node
        }
    }
}

// * Dry run, this time adding nodes through "addNode()" method, not manuall
// let ll = new linkedList({ num: 1 })
// ll.addNode({ num: 1 })
// ll.addNode({ num: 2 })
// ll.addNode({ num: 3 })

// ll.iterator()

