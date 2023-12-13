public class burbujabidireccional {

    
    // Declaramos una función para la ordenación por burbuja en recorrio ascendente y descendente
    static void burbujaderizq(int[] num) {
        int n = num.length;
        boolean intercambiar = true;
        // Inicializamos las variables inicio(al princpio) y fin(ultima posición)
        int inicio = 0;
        int fin = n - 1;
        // Inicializamos el bucle 
        while (inicio < fin && intercambiar) {
            intercambiar = false;

            // Primer recorrido de izquierda a derecha
            for (int i = inicio; i < fin; i++) {
                if (num[i] > num[i + 1]) {
                    // Inetrcambiamos los elementos para ordenar
                    int temp = num[i];
                    num[i] = num[i + 1];
                    num[i + 1] = temp;
                    intercambiar = true;
                }
            }

            // Fin en caso de que no hubiera más intercambios
            if (!intercambiar) {
                
            }

            intercambiar = false;

            // Segundo recorrido de derecha a izquierda
            for (int i = fin - 1; i >= inicio; i--) {
                if (num[i] > num[i + 1]) {
                    // Intercambiamos los elementos para ordenar
                    int temp = num[i];
                    num[i] = num[i + 1];
                    num[i + 1] = temp;
                    intercambiar = true;
                }
            }

            // Actualizamos las posiciones de inicio y fin
            inicio=inicio+1;
            fin=fin-1;
        }
    }

    // Delcaramos una función para imprimir la lista ordenada
    static void imprimirlista(int[] lista) {
        int n = lista.length;
        System.out.print("Lista ordenada: ");
        for (int i = 0; i < n; i++) {
            System.out.print(lista[i] + " ");
        }
        System.out.println();
    }

    public static void main(String[] args) {
        // Lista desordenada
        int lista[] = {64, 34, 25, 12, 22, 11, 90, 3, 7, 21, 98, 203, 45, 27, 65, 2};

        // Aplicamos burbuja para ordenar la lista desordenada
        burbujaderizq(lista);

        // Imprimimos y mostramos en pantalla la lista ordenada
        imprimirlista(lista);
    }
}