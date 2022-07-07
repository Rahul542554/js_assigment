function sortByFreq(arr, n) {
    // Initialise maxE = -1
    var maxE = -1;

    // Find the maximum element of
    // arr[]
    for (var i = 0; i < n; i++) {
      maxE = Math.max(maxE, arr[i]);
    }

    // Create frequency array freq[]
    var freq = new Array(maxE + 1).fill(0);

    // Update the frequency array as
    // per the occurrence of element in
    // arr[]
    for (var i = 0; i < n; i++) {
      freq[arr[i]]++;
    }

    // Initialise cnt to 0
    var cnt = 0;

    // Traversing freq[]
    for (var i = 0; i <= maxE; i++) {
      // If freq of an element is
      // greater than 0 update the
      // value of arr[] at index cnt
      // & increment cnt
      if (freq[i] > 0) {
        var value = 100000 - i;
        arr[cnt] = 100000 * freq[i] + value;
        cnt++;
      }
    }

    // Return cnt
    return cnt;
  }

  // Function that print array arr[]
  // elements in sorted order
  function printSortedArray(arr, cnt) {
    // Traversing arr[] till index cnt
    for (var i = 0; i < cnt; i++) {
      // Find frequency of elements
      var frequency = parseInt(arr[i] / 100000);

      // Find value at index i
      var value = 100000 - (arr[i] % 100000);

      // Traversing till frequency
      // to print value at index i
      for (var j = 0; j < frequency; j++) {
       console.log(value + " ");
      }
    }
  }

  // Driver code
  var arr = [3,3,4,4,7,8];

  // Size of array arr[]
  var n = arr.length;

  // Function call to get cnt
  var cnt = sortByFreq(arr, n);

  // Sort the arr[] in decreasing order
  arr.sort((a, b) => b+a);

  // Function that prints elements
  // in decreasing order
  printSortedArray(arr, cnt);