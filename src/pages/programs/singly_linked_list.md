---
path: "/singly_linked_list"
date: "September 9, 2020"
title: "Singly Linked List"
author: "Bipin karki"
language: "Python"
difficulty: "Easy"
img: "https://images.pexels.com/photos/119562/pexels-photo-119562.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
question: Create a Singly Linked list with a single data object. Create a method to Add  data onto it and then create another method to check and remove the duplicates from that singly linked list. Assume that data are inserted in increasing order ONLY.

Note: From HackerRank.
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
    '''For Creating a single node'''
    def __init__(self,data):
        self.data = data
        self.next = None

class Insert:
    '''For Insert, Printing and checking duplicates'''
    def insert_node(self,data,head):
        if head == None:
            return Node(data)
        temp = head
        while(temp.next!=None):
            temp= temp.next
        temp.next = Node(data)
    def print_list(self,head):
        temp = head
        while temp!=None:
            print(temp.data,end="")
            temp = temp.next
    def check_for_duplicates(self, head):
        if head == None:
            return
        unique = []
        temp = head
        prev = None
        while temp!=None:
            if temp.data in unique:
                prev.next = temp.next
                temp = temp.next
                print('IN UNIQUE')
            else:
                print("Else")
                unique.append(temp.data)
                prev=temp
                temp= temp.next
        return head
    
singly = Insert()
head = None
head = singly.insert_node(2,head)
singly.insert_node(3,head)
singly.insert_node(4,head)
singly.insert_node(5,head)
singly.insert_node(5,head)
singly.insert_node(5,head)
singly.insert_node(5,head)
singly.print_list(head)
print("After Removal")
head = singly.check_for_duplicates(head)
singly.print_list(head)
