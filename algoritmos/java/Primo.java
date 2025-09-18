//Questão 1
//Número é primo: Um número inteiro positivo n é primo se for divisível apenas por 1 e por n.

public class Primo {
    public void verificarPrimos(int[] numeros) {
        for (int num : numeros) {
            if (num < 2) {
                continue;
            }
            boolean primo = true;
            for (int i = 2; i <= Math.sqrt(num); i++) {
                if (num % i == 0) {
                    primo = false;
                    break;
                }
            }
            if (primo) {
                System.out.println(num + " é primo.");
            }
        }
    }
}
