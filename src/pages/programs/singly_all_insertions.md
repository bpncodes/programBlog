---
path: "/singly_linked_list_insertions"
date: "October 5, 2020"
title: "Singly - Insertions"
author: "Bipin karki"
language: "Python"
difficulty: "Easy"
img: "https://images.pexels.com/photos/3758105/pexels-photo-3758105.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
question: Create a class with all types of insertion on singly linked list.

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


from singly_linked_list import Insert    #I have imported my own modules.
from singly_linked_list import Node

class Insert_All_Places:
    def __init__(self, n):
        self.number_singly = Insert(n)
    def begining(self, data):
        temp = self.number_singly.head
        self.number_singly.head = Node(data)
        self.number_singly.head.next = temp
    def end(self,data):
        temp = self.number_singly.head
        while temp.next!=None:
            temp = temp.next
        temp.next = Node(data)
    def after_node(self, prev, data):
        if prev==None:
            print("Prev is None")
            return
        new_node = Node(data)
        new_node.next = prev.next
        prev.next = new_node
if __name__ == "__main__":
    singly_list = Insert_All_Places(10)
    singly_list.begining(2100)
    singly_list.number_singly.print_list()
    singly_list.end(900)
    singly_list.number_singly.print_list()

