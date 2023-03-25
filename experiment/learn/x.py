def information(name, *expenses, **kwargs):
    print('Your name is', name)
    sum = 0
    for i in expenses:
        sum += i
    print('Your total expenses are', sum)
    for key, value in kwargs.items():
        print('Your', key, 'is', value)

information('Adyansh', 1, 2, 3,  contact=1234567890)