class Solution {
    public int solution(int[] num_list) {
        int sum = 0;
        int mul = 1;
        if(num_list.length >= 11){
            for(int i =0; i < num_list.length ; i+= 1){
                sum += num_list[i];
            }
            return sum;
        }else{
            for(int i =0; i < num_list.length ; i+= 1){
                mul *= num_list[i];
            }
            return mul;
        }
        
        
    }
}