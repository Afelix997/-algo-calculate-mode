def calculate_mode(input_arr):
    answer=[]
    obj={}
    for value in input_arr:
        if value in obj.keys():
            obj[value]+=1
        else:
            obj[value]=1
    most_rep = max(obj, key=obj.get)
    for key in obj:
        if obj[key] >= obj[most_rep]:
            answer.append(key)
    return answer
