var findMin = function(nums) {
    let left = 0
    let right = nums.length - 1

    if(nums < 2){
        return nums[left]
    }
    if(nums[left] < nums[right]){
        return nums[left]
    }

    while(left < right){
        let mid = Math.floor((left + right) / 2)
        
        if(nums[mid-1] > nums[mid]){
            return nums[mid]
        } else if (nums[mid+1] < nums[mid]){
            return nums[mid+1]
        }
        if (nums[mid] > nums[left]){
            left = mid + 1
        } else {
            right = mid - 1
        }
    }

}

console.log(findMin([3,4,5,1,2]))
