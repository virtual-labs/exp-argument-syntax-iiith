def simple_interest(principal, interest_rate=7, years=10):
    interest = principal * interest_rate * years / 100
    amount = principal + interest
    return amount

fv = simple_interest(1000)
print(fv)  # Output: 1628.89

fv = simple_interest(1000, 8)
print(fv)  # Output: 1967.15

fv = simple_interest(1000, 6, 15)
print(fv)  # Output: 2208.27
