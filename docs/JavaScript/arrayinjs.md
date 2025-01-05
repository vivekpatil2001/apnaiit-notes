---
sidebar_position: 2
---

# Array in Js

# JavaScript Arrays

An array is a single variable that can store multiple values. It is a data structure that allows you to store a collection of elements, such as numbers, strings, objects, or other arrays, in a single variable. Arrays are defined using square brackets `[]`, which are known as subscript brackets, and each element in the array is separated by a comma. The array index always starts from 0.

### Example
```javascript
const students = ["Harsh", "Kashifa", "Yogita", "Ankita", "Vrushali"];
console.log(students);
```

### Output : 
```
['Harsh', 'Kashifa', 'Yogita', 'Ankita', 'Vrushali']
```

In the above code, we defines an array called students with five elements: Harsh, Kashifa, Yogita, Ankita, and Vrushali.

The console.log() function is then used to print the entire students array to the console.

### You can access elements in an array using their index, which starts at 0. For example, to access the first ###element in students, you would use:

```
console.log(students[5]);
```

```
const students = ["Kapil", "Nikita", "Poonam", "Vivek", "Sakshi"];

const firstStudent = students[3];

console.log(firstStudent);
```
### Output : 
```
Kapil
```

In the above example, we creates an array called students that contains the names of five students. Then it creates a constant variable called firstStudent and assigns to it the value of the last element of the students array using the index 0. Finally, the console.log() function is used to output the value of firstStudent to the console.


#### You can also change the value of an element in an array by assigning a new value to its index, like this:

### Syntax :

```
students[3] = "four";
```

```
const students = ["Harsh", "Kashifa", "Yogita", "Ankita", "Vrushali"];

students[4] = "Vrushali Khedkar";

console.log(students);
```

### Output : 
```
['Harsh','Kashifa','Yogita','Ankita','Vrushali Khedkar']
```

# Methods On Array

<b>1. length :</b>

To count total elements in the array.

### Example :

```
let marks = [50, 45, 30, 20, 10];
let count = marks.length;
console.log(count);
```

### Output :
``` 
5
``` 

In the above example, we defines an array called *marks* with five elements:*50, 45, 30, 20, and 10.*

The length property of the *marks* array is then accessed using the . notation and returned. The length property returns the number of elements in the array, which is 5 in this case.

#### 2. push() :

To add ```element``` from the end of array.

### Example :

```
const students = ["Nikita", "Pratiksha", "Rutuja", "Rohan"];
console.log(students);
students.push("Aditi");
console.log(students);
```

### Output :

>['Nikita','Pratiksha','Rutuja','Rohan']

>['Nikita','Pratiksha','Rutuja','Rohan','Aditi]

In the above example, we defines an array called students with four elements: ```
Nikita, Pratiksha, Rutuja, and Rohan.```
The first ```console.log()``` function is then used to print the entire students array to the console.

The ```push()```  method is then called on the students array with the argument Aditi. This adds the string Aditi as a new element at the end of the students array.

The second ```console.log()``` function is then used to print the updated students array to the console.


#### 3. pop() :

To remove element from the end of array.

### Example :
```
const students = ["Vaishnavi", "Aditya", "Dattatray", "Roshan"];
console.log(students);
students.pop();
console.log(students);
```

### Output :

['Vaishnavi','Aditya','Dattatray','Roshan']
>['Vaishnavi','Aditya','Dattatray']

In the above example, we defines an array called students with four elements: Vaishnavi, Aditya, Dattatray, and Roshan.

The first   ```console.log()``` function is then used to print the entire students array to the console.

The `pop()` method is then called on the students array. This removes the last element Roshan from the students array.

The second `console.log()` function is then used to print the updated students array to the console

### .4 unshift() :

To insert ```element``` from the start of array.

Example :

```
const students = ["Yash", "Sakshi", "Sanket", "Siddhi"];
console.log(students);
students.unshift("Tejas");
console.log(students);
```

### Output :

['Yash','Sakshi','Sanket','Siddhi']
>['Tejas','Yash','Sakshi','Sanket','Siddhi']

In the above example, we defines an array called students with four elements: Yash, Sakshi, Sanket, and Siddhi.

The first console.log() function is then used to print the entire students array to the console.

The unshift() method is then called on the students array with the argument E. This adds the string E as a new element at the beginning of the students array.

The second console.log() function is then used to print the updated students array to the console.

### 5. shift() :

To delete elements from the start of array.

### Example :

```
const students = ["Chaitanya", "Akash", "Harshal", "Omkar"];
console.log(students);
students.shift();
console.log(students);
```

### Output :

['Chaitanya','Akash','Harshal','Omkar']
>['Akash','Harshal','Omkar']

In the above example, we defines an array called students with four elements: Chaitanya, Akash, Harshal, and Omkar.

The first console.log() function is then used to print the entire students array to the console.

The shift() method is then called on the students array. This removes the first element Chaitanya from the students array.

The second console.log() function is then used to print the updated students array to the console.

### 6. splice() :

This function can perform insertion and deletion at once.

### Syntax :

<b>splice(index, no.of elements to delete, elements to insert)</b>

### Example :

```
const students = ["Gauri", "Bharti", "Aniket", "Kanchan", "Siddhi", "Tejas"];
console.log(students);
students.splice(1, 2, "Prachi", "Sanjana");
console.log(students);
```

### Output :

['Gauri','Bharti','Aniket','Kanchan','Siddhi','Tejas']
>['Gauri','Prachi','Sanjana','Kanchan','Siddhi','Tejas']

In the above example, we can defines an array called students with six elements: Gauri, Bharti, Aniket, Kanchan, Siddhi, and Tejas.

The first console.log() function is then used to print the entire students array to the console.

The `splice() method is then called on the students array with the arguments 1, 2, Prachi, and Sanjana. This removes two elements starting from the index 1, which removes Aniket and Kanchan, and inserts two new elements Prachi and Sanjana in their place.

The second console.log() function is then used to print the updated students array to the console.

### 7. join() :

Convert array to string default separator is , but we can change it.

### Example :
```
const students = ["Suraj","Vidhi","Nandini","Sarthak","Jayesh","Payal"]
console.log(students.join())

```
### Output :

```
['Suraj','Vidhi','Nandini','Sarthak','Jayesh','Payal']
Suraj,Vidhi,Nandini,Sarthak,Jayesh,Payal
```

### Example :

```
const students = ["Suraj", "Vidhi", "Nandini", "Sarthak", "Jayesh", "Payal"];
console.log(students.join("*"));
```

### Output :

['Suraj','Vidhi','Nandini','Sarthak','Jayesh','Payal']
>Suraj*Vidhi*Nandini*Sarthak*Jayesh*Payal

### 8. reverse() :

Converts an array in reverse order or decending order.

### Example :

```
const arr = ["Atharva", "Bhakti", "Neha", "Rohini"];
arr.reverse();
console.log(arr);
```

### Output :

> ['Rohini','Neha','Bhakti','Atharva']

### 9. sort() :

Converts an array in ascending order.

### Example of ascending order :
```
const arr = ["Harshad", "Rutuja", "Prachi", "Siddhi"];
arr.sort();
console.log(arr);
```

### Output :

> ['Harshad','Prachi','Rutuja','Siddhi']

### Example of descending order :

```
const arr = ["Aman", "Sharmin", "Nupur", "Tanvi"];
arr.sort();
console.log("Ascending :" + arr);

arr.reverse();
console.log("Descending : " + arr);

```

### Output :

> Ascending : Aman,Nupur,Sharmin,Tanvi
> Descending : Tanvi,Sharmin,Nupur,Aman

### 10. indexOf( ) :

indexOf() method is used to find an array of element.

### Example :

```
const arr = ["Bushra", "Aakansha", "Sarita", "Akshada"];
const index = arr.indexOf("Aakansha");
console.log(index);
```

### Output :

> 1

### 11. includes() :

```.includes()``` method is used when you need to check if an array contains a particular value before proceeding with further operations.

### Example :

```
const students = ['Sargam', 'Sumit', 'Vishal', 'Vaishnavi'];

console.log(students.includes('Vishal')); // Output: true
console.log(students.includes('prajyot')); // Output: false
```


### Output :

> true

> false














