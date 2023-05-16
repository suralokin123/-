arr = [1, 5, 3, 8, 2, 7, 4, 6, 9, 0]
max_index = min_index = 0

for i in range(1, len(arr)):
    if arr[i] > arr[max_index]:
        max_index = i
    elif arr[i] < arr[min_index]:
        min_index = i

print("Индекс максимального элемента:", max_index)
print("Индекс минимального элемента:", min_index)