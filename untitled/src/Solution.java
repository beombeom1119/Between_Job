import java.util.ArrayList;
import java.util.Collections;

class Solution {
        public int solution(int[] stats) {
            int answer = 0;


            ArrayList arr = new ArrayList();

            arr.add(stats[0]);


            for (int i=0; i<stats.length-1; i++)
            {
               if((int)Collections.min(arr)>stats[i])
               {
                   arr.clear();
                   arr.add(stats[i]);
                   answer=answer+1;
               }

            }

            System.out.println(answer);
            return answer;
        }
    }

class test
{
    public static void main(String[] args) {
        Solution solution = new Solution();
        solution.solution(new int[] {6, 2, 3, 4, 1, 5});
    }
}
