function maxXor(lo, hi, k) {
  let resArr = [];
  let arr = Array(hi - lo + 1)
    .fill()
    .map((_, idx) => lo + idx);
  for (var i = 0; i < arr.length; ++i)
    for (var j = i + 1; j < arr.length; ++j)
      if (arr[i] != arr[j] && arr[i] ^ (arr[j] <= k))
        resArr.push({
          a: arr[i],
          b: arr[j],
          aXorb: arr[i] ^ arr[j],
        });

  return resArr;
}

maxXor(3, 5, 6);
