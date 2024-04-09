**Argument Syntax in python** 

-----
Let us understand argument syntax in python with a real world scenario 


|<p>1\.</p><p>![](images/Aspose.Words.7a8adaa7-d66d-4a9f-bf4f-4c05d7403cc8.001.jpeg)</p>|<p>2\.</p><p>![](images/Aspose.Words.7a8adaa7-d66d-4a9f-bf4f-4c05d7403cc8.002.jpeg)</p>|<p>3\.</p><p>![](images/Aspose.Words.7a8adaa7-d66d-4a9f-bf4f-4c05d7403cc8.003.jpeg)</p>|
| :- | :- | :- |


**Image 1** represents that Rohan is a final-year engineering student. He wants to create a hospital management system website for his project. While searching for ways to build the website effectively, he finds something called "Argument Syntax" in Python. It catches his attention, and he decides to learn more about it.

Let us also explore what are argument syntax in python?

In python the the syntax for passing an arguments to a function is as follows:

```py
def function_name(argument1, argument2, ...):
  # function body
```
- In the above code, “function_name” is the name of the function and “argument1”,”argument2” are the names of the arguments that the function expects that it will receive. Let us understand more with the help of the below given code snippet

```py
def wish_good_morning(name):
  print("Good Morning, " + name + "!")

Wish_good_morning("karthik")
```
- In the above example, the wish_good_morning function expects a single argument i.e name, which it uses to print a good morning message. When the function is called with wish_good_morning("karthik"), the string "karthik" is passed as the argument, and the output is "Good Morning, karthik!"

There are different types of arguments available in python such as required arguments, default arguments, keyword arguments, variable length arguments. We are going to study about each of these arguments in detail.

1) **Default Argument**
- Default argument allows you to provide a default value while creating a function.
- In this type of argument, the function assumes a default value even if the value is not provided in the function call.
- A default formal argument is a argument that assumes a default value, if the value is not provided in the function call
- Let us understand more about default arguments with the help of below given code snippet 

```py
def name(first_name,middle_name="Prakash",last_name="konar"):
  print("Hello",first_name,middle_name,last_name)

name("karthik")
```
- The code defines a function called name that takes three parameters: first_name, middle_name, and last_name. The middle_name and last_name parameters have default values of "Prakash" and "konar" respectively.
- When the function is called on line 2 with the argument "karthik" for first_name, the default values for middle_name and last_name are used because they were not provided.
- The function then prints "Hello" followed by the values of the three parameters separated by spaces, which in this case will be "Hello karthik Prakash konar".
- Therefore, the output of the function call will be: “*Hello karthik Prakash konar*”
- Note that because middle_name and last_name have default values, they can be omitted when calling the function and the default values will be used instead. However, if you want to provide a value for last_name while keeping the default value for middle_name, you can do so by explicitly specifying the parameter name like this:

“*name("karthik", last_name="singh")*”. The output will be “Hello karthik Prakash Singh”

2) **Keyword arguments**
- In keyword arguments, we can provide arguments with “key=value” pair format, by this way the interpreter is able to recognize the argument by the parameter name 
- Hence the order in which the arguments are passed does not matter.
- Let us understand keyword arguments with the help of the below given code snippet:
```py
def name(first_name,middle_name,last_name):
  print("Hello",first_name,middle_name,last_name)

name(middle_name="prakash",first_name="karthik",last_name="konar")
```
- The above code defines a function called name that takes three parameters: *first_name, middle_name, and last_name*.
- Inside the function, a string is printed out that includes the values of the three parameters.
- The function is then called with three keyword arguments, specifying the values for each parameter by name.
- The order of the arguments in the function call does not matter because they are explicitly specified by name.
- Therefore, when the function is called with these arguments, it will print out: "Hello karthik prakash konar", as specified by the print statement in the function.
- Later in this article, we will explore how Rohan demonstrated a program that utilizes keyword arguments to add a patient with their name, age, gender, and medical history using a special function call. We will accompany this exploration with code examples.


3) **Required Arguments**

- In case if we do not pass the arguments with a “key=value” syntax, then it is very essential to pass the arguments in the correct positional order and the number of arguments passed must match with the actual function definition
- For example, consider the given below code snippet
```py
def name(first_name,middle_name,last_name):
  print("Hello",first_name,middle_name,last_name)

name("karthik","konar")
```
- The above given code will raise an TypeError because our function takes 3 arguments, but during the function call we have passed only 2 arguments 
- Consider the below given code snippet
```py
def name(first_name,middle_name,last_name):
  print("Hello",first_name,middle_name,last_name)

name("karthik","prakash","konar")
```
- The above function is  called with three arguments in the order that they are defined in the function signature. These are referred to as positional arguments, as their position in the function call determines which parameter they correspond to.
- Therefore, when the function is called with these arguments, it will print out: "Hello karthik prakash konar", as specified by the print statement in the function.

4) **Variable length arguments** 

- Sometimes there is a need to pass more arguments than those defined in the actual function, this can be achieved using variable length arguments. There are 2 ways to achieve this which are described as follows:
a. Arbitrary arguments
- While creating a function, we need to pass a *(star) before the parameter name, this means that the parameter will not take a single value, but will accept a tuple of values.
- Let us understand more with the help of the below given code snippet
```py
def name(*name):
  print("Hello",name[0],name[1],name[2])

name("karthik","prakash","konar")
```
- The above code defines a function called name that takes an arbitrary number of arguments using the syntax *name. This is referred to as a variable-length argument, and it allows us to pass any number of arguments to the function.
- Inside the function, a string is printed out that includes the values of the first three arguments passed to the function. Note that we are using indexing to access specific elements of the name tuple, which contains all of the arguments passed to the function.
- The function is then called with three arguments, which are collected into the name tuple by the *name syntax.
- Therefore, when the function is called with these arguments, it will print out: "Hello karthik prakash konar", as specified by the print statement in the function. Note that if more than three arguments were passed to the function, the code would result in an IndexError because we are only accessing the first three elements of the name tuple.

b.Keyword arbitrary arguments

- In keyword arbitrary arguments, while creating a function pass a ** before the parameter name, while defining the function.this means that the parameter will not take a single value, but will accept a dictionary of values.
- Let us understand more with the help of the below given code snippet
```py
def name(**name):
  print("Hello",name["first_name"],name["middle_name"],name["last_name"])

name(first_name="karthik",middle_name="prakash",last_name="konar")
```
- The above  code defines a function called name that takes an arbitrary number of keyword arguments using the syntax **name.  This is referred to as a keyword variable-length argument, and it allows us to pass any number of keyword arguments to the function.
- The function is then called with three keyword arguments, first_name="karthik", middle_name="prakash", and last_name="konar". These are collected into the name dictionary by the **name syntax.
- Therefore, when the function is called with these keyword arguments, it will print out: "Hello karthik prakash konar", as specified by the print statement in the function. Note that if keys other than first_name, middle_name, and last_name were used in the function call, the code would result in a KeyError because we are only accessing those specific keys in the name dictionary.




Image 2 represents that ,After researching argument syntax in Python, Rohan discovered its benefits for his website project. Argument syntax allows for flexible and efficient handling of different types and quantities of inputs. This means the website can adapt to various scenarios without major code changes. It also improves code organization and readability. Understanding these advantages, Rohan decided to incorporate argument syntax into his website to enhance its functionality and meet the specific needs of the hospital management system.

While working on his project,Rohan shows the power of argument syntax by using his functions with different inputs that match the needs of the hospital management system. For example , he can add a patient with their name, age, gender, and medical history using a special function call.
```py
def add_patient(name, age, gender, medical_history=[]):

`    `# Function to add a patient with their information

`    `patient = {

`        `"name": name,

`        `"age": age,

`        `"gender": gender,

`        `"medical_history": medical_history

`    `}

`    `# Add the patient to the database or perform relevant operations

`    `# ...

`    `print("Patient added successfully:", patient)

# Example function call using argument syntax

add_patient('John Doe', age=35, gender='male', medical_history=['hypertension', 'diabetes'])
```
- The code defines a function called add_patient that takes four arguments: name, age, gender, and medical_history (with a default value of an empty list).

- When calling the function, we can use keyword arguments to specify the values for each argument, making the function call more explicit.

- Inside the function, a dictionary is created to store the patient's information. The function can perform additional operations, such as adding the patient to a database.

- The example demonstrates how argument syntax in Python enables flexible and customizable function calls. This flexibility allows the website to handle different types and quantities of patient data for effective management in the hospital management system.

Image 3 represents that Rohan's website successfully performs tasks like adding patients, generating reports, and scheduling appointments. He is happy to see his website working well and meeting the specific needs of a hospital.

