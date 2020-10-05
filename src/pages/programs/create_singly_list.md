---
path: "/singly_linked_list_creation"
date: "October 5, 2020"
title: "Singly - Creation"
author: "Bipin karki"
language: "Python"
difficulty: "Easy"
img: "https://images.pexels.com/photos/4073072/pexels-photo-4073072.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
question: Create a Singly Linked list to quickly add nodes.

Note: Random.
descriptionImage: "https://cdn.programiz.com/sites/tutorial2program/files/linked-list-concept_0.png"
description: " A linked list data structure includes a series of connected nodes. Here, each node store the data and the address of the next node. Time complexity for Search is O(n) and for insert and delete is O(1) while the space complexity is O(n).
The main advantages of using a linked list are Dynamic memory allocation,
Implemented in stack and queue,
In undo functionality of softwares,
Hash tables, Graphs.
The structure of singly Linked list is given below:
"

---


class Node:
    def __init__(self,data):
        self.data = data
        self.next = None
class Insert:
    def __init__(self,n):
        self.head = None
        self.n = n
        self.insert_multiple_nodes()
    def insert_multiple_nodes(self):
        for i in range(1, self.n+1):
            if self.head == None:
                self.head = self.insert_node(i, self.head)
                continue
            self.insert_node(i, self.head)
    def insert_node(self,data,head):
        if head == None:
            return Node(data)
        temp = head
        while(temp.next!=None):
            temp= temp.next
        temp.next = Node(data)
    def print_list(self):
        temp = self.head
        while temp!=None:
            print(temp.data,end="->")
            temp = temp.next
        print("Null")
if __name__ == "__main__":
    i = Insert(12)
    i.print_list()
