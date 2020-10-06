---
path: "/singly_linked_list_deletions"
date: "October 5, 2020"
title: "Singly - Deletions"
author: "Bipin karki"
language: "Python"
difficulty: "Easy"
img: "https://images.pexels.com/photos/3758105/pexels-photo-3758105.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
question: Create a class with all types of deletions on singly linked list.

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


from singly_linked_list import Insert   # I have imported linked list from previous module
class Singly_All_Places_Deletion:
    def __init__(self,data):
        self.my_list = Insert(data)
        print("The initial list is : ")
        self.my_list.print_list()
    def delete_first(self):
        self.my_list.head = self.my_list.head.next
    def delete_last(self):
        temp = self.my_list.head
        while temp.next!=None:
            prev = temp
            temp = temp.next
        prev.next = None # We can add temp = None but but don't need because of garbage collection in python
    def delete_from_key(self, key):
        temp = self.my_list.head
        while temp!=None:
            if temp.data == key:
                prev.next = temp.next
                temp = None
                return
            prev = temp
            temp = temp.next
        print("Key Not Found")
if __name__ == "__main__":
    singly = Singly_All_Places_Deletion(10)
    print("\n\n\n")
    print("After Deleting First Node")
    singly.delete_first()
    singly.my_list.print_list()
    print("\n\n\n")
    print("After Deleting Last Node")
    singly.delete_last()
    singly.my_list.print_list()
    print("\n\n\n")
    print("After removing keyed item")
    singly.delete_from_key(5)
    singly.my_list.print_list()

