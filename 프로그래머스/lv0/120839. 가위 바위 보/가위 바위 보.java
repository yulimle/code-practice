class Solution {
    public String solution(String rsp) {
        String answer = "";
        for(int i=0; i < rsp.length(); i+=1){
            if(rsp.split("")[i].equals("0")){
                answer += "5";
            }else if(rsp.split("")[i].equals("2")){
                answer += "0";
            }else if(rsp.split("")[i].equals("5")){
                answer += "2";
            }
        }
        return answer;
    }
}