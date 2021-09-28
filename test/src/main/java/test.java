public class test {
    public static void main(String[] args) {
        int arr[] = {-2,-5,6,-2,-3,1,5,7};
        int max = arr[0];
        int sum;
        for (int i = 0; i < arr.length-1; i++) {
            sum =arr[i];
            for (int j = i+1; j < arr.length; j++) {
                sum+= arr[j];
                if (sum > max) {
                    max = sum;
                }
            }
        }
        System.out.println("max=" + max);
    }
}
