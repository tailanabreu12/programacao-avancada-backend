//nivel de complexidade de algoritmos
// O(n) - linear
// O(n²) - quadrática
// O(n³) - cúbica
// O(log n) - logarítmica
// O(1) - constante
// O(n!) - fatorial




function calcularNivelDeComplexidade(n){
    if(n === 1)
        return 'O(1)'
    else if(n === 2)
        return 'O(n)'
    else if(n === 3)
        return 'O(n²)'
    else if(n === 4)
        return 'O(n³)'
    else if(n === 5)
        return 'O(log n)'
    else if(n === 6)
        return 'O(n!)'
    else
        return 'Não foi possível calcular o nível de complexidade.'
}