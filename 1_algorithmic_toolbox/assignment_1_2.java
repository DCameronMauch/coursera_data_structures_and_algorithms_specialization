import java.util.Scanner;
import java.util.Arrays;

public class assignment_1_2 {
  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);
    int count = scanner.nextInt();
    long[] data = new long[count];
    for (int index = 0; index < count; index++) {
      data[index] = scanner.nextLong();
    }
    Arrays.sort(data);
    long product = data[count - 1] * data[count - 2];
    System.out.println(product);
  }
}
