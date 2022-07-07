function isPalindrome(n)
{
    // Find reverse of n
    var rev = 0;
    for (var i = n; Math.trunc(i) > 0; i /= 10)
    {
        rev = ((rev*10) + (Math.trunc(i)%10));
          
        }
    
    // If n and rev are same, then n is palindrome
    return (n==rev);
}
      
  
// prints palindrome between min and max
function countPal(max)
{
    for (var i = max; i <=max; i++)
    {
        if(isPalindrome(i))
        console.log(i+" " );
       }
}
  
// Driver program to test above function
  
    countPal(5);