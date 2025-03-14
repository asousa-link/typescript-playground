class ListNode<T> {
    next?: ListNode<T>;
    constructor (public value: T) {}
}

class LinkedList<T> {
    private root?: ListNode<T>;
    private tail?: ListNode<T>;
    private _length = 0;

    add(value: T) {
        const node = new ListNode(value);
        if (!this.root || !this.tail) {
            this.root = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this._length++;
    }

    get length(): number { return this.length; }

    print() {
        let current = this.root;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }

}

const list = new LinkedList();
const numberList = new LinkedList<number>();

numberList.add(10);
numberList.add(5);
numberList.add(-3);

console.log(numberList.length);
numberList.print();

const nameList = new LinkedList<string>();