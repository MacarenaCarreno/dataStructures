// Node Creation

class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

// Linked List Creation

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  // New Node to Linked List
  add(data) {
    const newNode = new Node(data, null);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }

  insertAt(data, index) {
    if (index < 0 || index > this.size) {
      return null;
    }
    const newNode = new Node(data);
    // to determinate the position of the list
    let current = this.head;
    let preview;

    if (index === 0) {
      newNode.next = current;
      this.head = newNode;
    } else {
      for (let i = 0; i < index; i++) {
        preview = current;
        current = current.next;
      }
      newNode.next = current;
      preview.next = newNode;
    }
    this.size++;
  }

  delete(data) {
    if (this.size === 0) return null;

    let current = this.head;
    let preview = null;

    while (current !== null) {
      if (current.data === data) {
        if (!preview) {
          this.head = current.next;
        } else {
          preview.next = current.next;
        }
        this.size--;
        return current.data;
      }
      preview = current;
      current = current.next;
    }
    return null;
  }

  deleteFrom(index) {
    if (index < 0 || index > this.size) return null;
    let current = this.head;
    let preview = null;

    if (index === 0) {
      this.head = current.next;
    } else {
      for (let i = 0; i < index; i++) {
        preview = current;
        current = current.next;
      }
      preview.next = current.next;
    }
    this.size--;
    return current.data;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  print() {
    if (!this.size) return null;
    let current = this.head;
    let result = '';
    while (current) {
      result += current.data + ' -> ';
      current = current.next;
    }
    result += 'X';
    return result;
  }
}

module.exports = LinkedList;
