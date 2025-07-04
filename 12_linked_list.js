//Связанный список

class LinkedList {
  constructor() {
    this.size = 0;
    this.root = 0;
  }

  add(value) {
    //если размер списка равен 0,
    //  то необходимо проинициализировать корневой элемент 
    if (this.size === 0) {
      this.root = new Node(value);
      this.size += 1;
      return true;
    }

    let node  = this.root;

    while(node.next) {
      console.log(node.next);
      node = node.next;
    }

    let newNode = new Node(value);
    node.next = newNode;
    this.size += 1;
  }

  getSize() {
    return this.size;
  }

  print() {
    let result = [];
    let node = this.root;

    while(node) {
      result.push(node);
      node = node.next;
    }

    console.log(result);
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const list = new LinkedList();
list.add(5);
list.add(3);
list.add(4);
list.print();



//Двунаправленный связанный список 

class NodeDouble {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoubleLinkedList {
  constructor(value) {
    //1 элемент будет коренвым элементом
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  // Добавление узла в конец списка
  append(value) {
    const newNode = new NodeDouble(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  // Добавление узла в начало списка
  prepend(value) {
    const newNode = new NodeDouble(value);
    this.head.prev = newNode;
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  reverse() {
    if (!this.head.next) {
      return this.head;
    }

    let first = this.head;
    this.tail = this.head;
    first.prev = first.next;
    let second = first.next;

    //пока есть следующий элемент крутимся в цикле
    while (second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
      first.prev = second;
    }

    this.head.next = null;
    this.head = first;
    return this;
  }

  // Вывод списка в консоль - служебный метод для визуализации
  _print() {
    console.log(`HEAD: ${this.head.value}`);
    let currentNode = this.head;

    while (currentNode.next) {
      console.log(currentNode);
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }

    console.log(currentNode);
    console.log(currentNode.value);
    console.log(`TAIL: ${this.tail.value}`);
  }
}

const list2 = new DoubleLinkedList(2)
list2.append(3);
list2.append(4);
list2.append(5);
list2.reverse();