import math

#python question
def rollThicknessCM(foilLength: float) -> float:
    tubeDiameter: float = 4.0
    foilThickness: float = 0.0025
    circumference = math.pi * tubeDiameter
    while(foilLength > 0):
        tubeDiameter += foilThickness * 2 
        foilLength -= circumference
        circumference = math.pi * tubeDiameter
    
    if((foilLength + circumference)/circumference < 0.5):
        tubeDiameter -= foilThickness
    return round(tubeDiameter,4)

arr = [0, 50, 4321, 10000]

arr = [rollThicknessCM(num) for num in arr]
print(arr)
