//Questão 2
public class Somatorio {
    public int somar(int[] numeros) {
        int soma = 0;
        for (int n : numeros) {
            soma += n;
        }
        return soma;
    }
}