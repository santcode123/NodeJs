const arr=process.argv;
let totalSum=0;
for (var i=2;i<arr.length;i++)
{
    totalSum+=Number(arr[i]);
}
console.log(totalSum);