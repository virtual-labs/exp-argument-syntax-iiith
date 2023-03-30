**Argument Syntax in python** 

-----
Let us understand argument syntax in python with a real world scenario 


|<p>1\.</p><p>![](images/Aspose.Words.68c70019-dfc7-42bb-ba59-989a52f48db9.001.png)</p>|<p>2\.</p><p>![](images/Aspose.Words.68c70019-dfc7-42bb-ba59-989a52f48db9.002.png)</p>|<p>3\.</p><p>![](images/Aspose.Words.68c70019-dfc7-42bb-ba59-989a52f48db9.003.png)</p>|
| :- | :- | :- |
|<p>4\.</p><p>![](images/Aspose.Words.68c70019-dfc7-42bb-ba59-989a52f48db9.004.png)</p>|<p>5\.</p><p>![](images/Aspose.Words.68c70019-dfc7-42bb-ba59-989a52f48db9.005.png)</p>|<p>6\.</p><p>![](images/Aspose.Words.68c70019-dfc7-42bb-ba59-989a52f48db9.006.png)</p>|


**About the user:**

- Ramesh is pursuing his engineering degree in the computer science domain, and he frequently assists his father who owns a restaurant with serving orders after college.
**Image 1** represents the following

- While assisting his father in serving customers at the restaurant on a busy day, Ramesh observed that due to a shortage of manpower, his father faced difficulty in efficiently and effectively taking orders from the numerous customers.
- As a computer science student himself, Ramesh decided to utilize his skill set and develop a program that would assist his father in efficiently and effectively managing the order-taking process.

**Image 2** represents the following 

- Ramesh began exploring various methods for developing the program, and during his internet search, he came across a Python concept called "Argument Syntax". Based on the problem he was attempting to solve, he found this topic to be highly appropriate and helpful in achieving his goal.
- Ramesh opted to utilize the Python concept of Argument Syntax since it provides a flexible and efficient approach to passing arguments to a function. By implementing default arguments, keyword arguments, required arguments, and variable-length arguments, Ramesh could develop a program that can accept varying types and quantities of arguments according to the restaurant's specific order requisites.
- So Ramesh decides to study more about argument syntax topic before writing code 

Let us also explore what are argument syntax in python?

In python the the syntax for passing an arguments to a function is as follows:

```py
def function_name(argument1, argument2, ...):# function body
```
- The code provided above demonstrates that "function_name" denotes the function's name, whereas "argument1" and "argument2" are the expected names of the arguments that the function will receive. Further clarity can be gained by examining the following code snippet.

```py
def wish_good_morning(name):
  print("Good Morning, " + name + "!")
Wish_good_morning("karthik")
```
- The given example depicts that the function wish_good_morning anticipates a single argument, namely "name," which is utilized to print a good morning message. Upon invoking the function with wish_good_morning("karthik"), the string "karthik" is passed as an argument, and the output reads as "Good Morning, karthik!"

In Python, there exist multiple types of arguments, which include required arguments, default arguments, keyword arguments, and variable-length arguments. We shall delve deeper into each of these arguments for a comprehensive understanding.

1) **Default Argument**
- When creating a function in Python, default arguments enable you to set a default value for a parameter.
- In the case of default arguments, the function assumes a default value for a parameter if no value is provided during the function call.
- A default formal argument is an argument that assumes a default value even if the value is not provided in the function call.
- Let us understand more about default arguments with the help of below given code snippet 

```py
def name(first_name,middle_name="Prakash",last_name="konar"):
  print("Hello",first_name,middle_name,last_name)
name("karthik")
```
- The code mentioned above defines a function named "name" which has three parameters: first_name, middle_name, and last_name. The middle_name parameter has a default value of "Prakash", and the last_name parameter has a default value of "Konar".
- When the function is called  with the argument "karthik" for first_name, the default values for middle_name and last_name are used because they were not provided.
- The function then prints "Hello" followed by the values of the three parameters separated by spaces, which in this case will be "Hello karthik Prakash konar".
- Therefore, the output of the function call will be: “*Hello karthik Prakash konar*”
- Note that because middle_name and last_name have default values, they can be omitted when calling the function and the default values will be used instead. However, if you want to provide a value for last_name while keeping the default value for middle_name, you can do so by explicitly specifying the parameter name like this:

“*name("karthik", last_name="singh")*”. The output will be “Hello karthik Prakash Singh”

2) **Keyword arguments**
- Keyword arguments are defined with a “key=value” pair format, which allows the interpreter to identify the argument by its parameter name.
- Hence the order in which the arguments are passed does not matter.
- Let us understand keyword arguments with the help of the below given code snippet:

```py
def name(first_name,middle_name,last_name):
  print("Hello",first_name,middle_name,last_name)
name(middle_name="prakash",first_name="karthik",last_name="konar")
```
- The above code defines a function called name that takes three parameters: *first_name, middle_name, and last_name*.
- The function prints a string that contains the values of the three parameters.
- The function is called with three keyword arguments, in which the values for each parameter are specified by name.
- The order of the arguments in the function call does not matter because they are explicitly specified by name.
- Thus, the print statement inside the function will output "Hello karthik prakash konar" regardless of the order of the keyword arguments used in the function call.

3)**Required Arguments**

- When passing arguments without the “key=value” syntax, it is essential to pass them in the correct positional order, and the number of arguments passed must match the function's actual definition.
- For example, consider the given below code snippet

```py
def name(first_name,middle_name,last_name):
  print("Hello",first_name,middle_name,last_name)
name("karthik","konar")
```
- The above given code will raise a TypeError because the function expects 3 arguments, but during the function call only 2 arguments were passed.
- Consider the below given code snippet

```py
def name(first_name,middle_name,last_name):
  print("Hello",first_name,middle_name,last_name)
name("karthik","prakash","konar")
```
- The function above is called with three positional arguments that are defined in the same order as the parameters in the function signature. These arguments are referred to as positional because their position in the function call determines which parameter they correspond to.
-The function will use the passed arguments to print out a string that includes the values of the three parameters in the order they are defined in the function signature. In this case, the output will be "Hello karthik prakash konar", as specified by the print statement in the function.

4)**Variable length arguments** 

- Sometimes, it is necessary to pass more arguments than those defined in the actual function. This can be achieved using variable-length arguments, which can be implemented in two ways. These methods are described below:
1. Arbitrary arguments
- While creating a function, we need to pass a \*(star) before the parameter name, this means that the parameter will not take a single value, but will accept a tuple of values.
- Let us understand more with the help of the below given code snippet

```py
def name(*name):
  print("Hello",name[0],name[1],name[2])
name("karthik","prakash","konar")
```
- The given code defines a function named "name" that uses the syntax "*name" to take an arbitrary number of arguments. This is known as a variable-length argument, which enables us to pass any number of arguments to the function.
- The function then prints a string containing the values of the first three arguments passed to the function, accessed using indexing on the name tuple that contains all the arguments.
- The function is called with three arguments which are passed to the function using the *name syntax, allowing them to be collected into the name tuple inside the function.
- The function uses indexing to access specific elements of the name tuple, which contains all of the arguments passed to the function. Therefore, it will print out a string that includes the first three arguments passed to the function in the format of "Hello argument1 argument2 argument3".

2.Keyword arbitrary arguments

- In keyword arbitrary arguments, while creating a function pass a \*\* before the parameter name, while defining the function.This means that the parameter will not take a single value, but will accept a dictionary of values.
- Let us understand more with the help of the below given code snippet

```py
def name(**name):
  print("Hello",name["first_name"],name["middle_name"],name["last_name"])

name(first_name="karthik",middle_name="prakash",last_name="konar")
```
- The above  code defines a function called name that takes an arbitrary number of keyword arguments using the syntax \*\*name. This is referred to as a keyword variable-length argument, and it allows us to pass any number of keyword arguments to the function.
- The function is called with three keyword arguments: first_name="karthik", middle_name="prakash", and last_name="konar" These are collected into the name dictionary by the \*\*name syntax.
- The function is called with the keyword arguments first_name="karthik", middle_name="prakash", and last_name="konar". As a result, the function will print out "Hello karthik prakash konar" as specified by the print statement in the function. It is important to note that if keys other than first_name, middle_name, and last_name are used in the function call, a KeyError will occur because the code is only accessing those specific keys in the name dictionary.

Now Ramesh had finished exploring the topic “Argument syntax” and he was ready to write code for his program. 

**Image 3** represents that using default arguments he wrote the following code to take order

```py
def print_order(dish, table_number, special_request=None):
  if special_request:
    print("Order for table", table_number, ":", dish, "with", special_request)
   else:
    print("Order for table", table_number, ":", dish)
```
- Ramesh wrote the above code in such a way that the program can still print out the order even if the customer doesn't have a special request. Additionally, the code will also work if the customer had made any special requests.
- 
- However, if the function is called with three arguments, dish, table_number, and special_request, the function will print out the order for the table with the special request.

**Image 4** represents that Ramesh made use of required arguments concepts and he wrote the following code:

```py
def print_order(dish, table_number):
  print("Order for table", table_number, ":", dish)
print_order("steak", 3)
```
- The function is then called with two required arguments, "steak" and 3.Therefore, when the function is called with these arguments, it will print out: "Order for table 3 : steak", as specified by the print statement in the function.

**Image 5** represents that Ramesh made use of keyword arguments concepts and he wrote the following code:

```py
def print_order(dish, table_number, **options):
  print("Order for table", table_number, ":", dish, "with options:")
    for option, value in options.items():
      print(option, ":", value)
print_order("salmon", 1, gluten_free=True, dairy_free=True)
```
- The above code defines a function called print_order that takes two required arguments, dish and table_number, and any number of keyword arguments in the options dictionary.
- Inside the function, a string is printed out that includes the dish and table_number arguments passed to the function, along with the string "with options:".
- Then, a for loop is used to iterate over each item in the options dictionary and print out the key-value pairs.
- The function is then called with four keyword arguments, "gluten_free", "dairy_free", which are passed to the function using the \*\*options syntax.

**Image 6** represents that Ramesh made use of variable length arguments concepts and he wrote the following code:

```py
def print_order(dish, table_number, *sides):
  print("Order for table", table_number, ":", dish, "with sides:")
    for side in sides:
      print(side)

print_order("burger", 4, "fries", "onion rings", "coleslaw")
```
- The above code allows us to pass any number of additional arguments to the function, which will be collected into the sides tuple. This is useful when we want to allow the user to provide an arbitrary number of arguments to a function.

Ramesh was very happy because he utilized his skill set to help his father in the restaurant.
