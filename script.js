//your JS code here. If required.
function secondHighest(arr) {
			//Write your code here
	// let nice = Arrays.sort(arr);
	// let ans = [...new Set(nice)];
	// return ans[ans.length-2];
	if(arr.length===1 || arr.length===0){
		return -Infinity;
	}else{
		let nice = [...new Set(arr)];
		let ans = Arrays.sort(nice);
		if(nice.length<2){
			return -Infinity;
		}else{
			return ans[ans.length-2];
		}
	}
		
}

		function Main() {
			var n = prompt("Enter the number of elements");
			var arr = [];
			for (var i = 0; i < n; i++) {
				arr[i] = prompt("Enter element " + (i+1));
			}
			alert(secondHighest(arr));
		}
		Main();