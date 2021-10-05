public class test {
    public static void main(String[] args) {
        int arr[] = {1, 2, 4, 0, 0, 3, 2, 1, 3, 0, 3};
        int max = arr[0];
        int count;
        for (int i = 0; i < arr.length-1; i++) {
            count = 0;
            for (int j = i+1; j < arr.length; j++) {
                if (arr[i] == arr[j]) {
                    ;
                }
            }
        }
        System.out.println("max=" + max);
    }
}
