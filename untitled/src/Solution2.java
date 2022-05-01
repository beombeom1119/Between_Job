import java.util.ArrayList;
import java.util.Collections;

class test2 {
    public static void main(String[] args) {
        Solution2 solution2 = new Solution2();
        solution2.solution(1);
    }

}

class Solution2 {
    public long solution(int n) {
        long answer = 0;
        int num = 0;

        ArrayList arrayList = new ArrayList();

        arrayList.add(4);
        arrayList.add(13);

        int i =0;
        while (i < 100)
        {
            int put = (int) arrayList.remove(0);
            arrayList.add(Integer.parseInt(put+"4"));
            arrayList.add(Integer.parseInt(put+"13"));

            i++;
        }
        for (int j = 0; j < arrayList.size(); j++) {
            System.out.println(arrayList.get(j));
        }

        return answer;
    }
}
