function AlternateRearrange(arr, n)
{
    // Sort the array
    arr.sort((a,b)=>a-b);
 
    var v1 = []; // to insert even values
    var v2 = []; // to insert odd values
 
    for (var i = 0; i < n; i++)
        if (arr[i] % 2 == 0)
            v1.push(arr[i]);
        else
            v2.push(arr[i]);
 
    var index = 0, i = 0, j = 0;
 
    var flag = false;
 
    // Set flag to true if first element is even
    if (arr[0] % 2 == 0)
        flag = true;
 
    // Start rearranging array
    while (index < n) {
 
        // If first element is even
        if (flag == true) {
            arr[index++] = v1[i++];
            flag = !flag;
        }
 
        // Else, first element is Odd
        else {
            arr[index++] = v2[j++];
            flag = !flag;
        }
    }
 
    // Print the rearranged array
    for (i = 0; i < n; i++)
        console.log( arr[i] + " ");
}
 
// Driver code
var arr = [5,3,9,1,44,6];
var n = arr.length;
AlternateRearrange(arr,n);
 