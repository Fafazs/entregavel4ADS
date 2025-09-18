const java = document.getElementById('algJava');
const javascript = document.getElementById('algJavascript');

async function fetchJava() {
    try {
        const response = await fetch('http://localhost:3000/algoritmos/java');
        const data = await response.json(); // Assumindo que o servidor retorna JSON
        console.log(data);
        java.innerText = data.mensagem + " - " + data.exemplo;

        return data;
    } catch (error) {
        console.error('Erro ao acessar rota raiz:', error);
        document.getElementById('resultado').textContent = 'Erro: ' + error.message;
    }
}

async function fetchJavascript() {
    try {
        const response = await fetch('http://localhost:3000/algoritmos/javascript');
        const data = await response.json(); // Assumindo que o servidor retorna JSON
        console.log(data);

        return data;
    } catch (error) {
        console.error('Erro ao acessar rota raiz:', error);
        document.getElementById('resultado').textContent = 'Erro: ' + error.message;
    }
}

// Chamar a função quando a página carregar
window.onload = fetchJava;
window.onload = fetchJavascript;