const java = document.getElementById('algJava');
const javascript = document.getElementById('algJavascript');

async function fetchJava() {
    try {
        const response = await fetch('http://localhost:3000/java');
        const data = await response.json(); // Assumindo que o servidor retorna JSON
        const h2 = document.createElement('h2');
        h2.textContent = data.mensagem;
        const p = document.createElement('p');
        p.textContent = data.exemplo;
        java.appendChild(h2);
        java.appendChild(p);


        return data;
    } catch (error) {
        console.error('Erro ao acessar rota raiz:', error);
        document.getElementById('resultado').textContent = 'Erro: ' + error.message;
    }
}

async function fetchJavascript() {
    try {
        const response = await fetch('http://localhost:3000/javascript');
        const data = await response.json(); // Assumindo que o servidor retorna JSON
        console.log(data);

        // Adiciona o título e os formulários para cada função
        const h2 = document.createElement('h2');
        javascript.appendChild(h2);
        h2.textContent = data.mensagem;

        for (let funcao of data.funcoes) {
            const form = document.createElement('form');
            const p = document.createElement('p');
            form.id = `meuForm${funcao.nome}`;
            form.method = "POST";
            p.textContent = funcao.nome;
            javascript.appendChild(form);
            form.appendChild(p);
            // Adiciona campos de entrada com base na quantidade de parâmetros
            for (let i = 0; i < funcao.quantidadeParametros; i++) {
                const input = document.createElement('input');
                input.type = "text";
                input.name = `param${i + 1}`;
                input.placeholder = `Parâmetro ${i + 1}`;
                // Configura pattern e placeholder baseado no pattern da função
                if (funcao.pattern && funcao.pattern.length > 0) {
                    // Pega o pattern correspondente ao parâmetro atual
                    const patternObj = funcao.pattern[i] || funcao.pattern[0];

                    // Extrai o pattern string (pode estar em diferentes formatos)
                    let patternString = '';
                    if (typeof patternObj === 'string') {
                        patternString = patternObj;
                    } else if (typeof patternObj === 'object') {
                        // Se for objeto como {0: "\\d+"}, pega o primeiro valor
                        patternString = Object.values(patternObj)[i] || '';
                    }

                    // Aplica o pattern
                    if (patternString) {
                        input.pattern = patternString;

                        // Cria placeholder informativo baseado no pattern
                        if (input.pattern === "\\d+") {
                            input.placeholder = `Número inteiro parâmetro ${i + 1})`;
                        }
                        else if(input.pattern === "\[\s*\d+(\s*,\s*\d+)*\s*\]"){
                            input.placeholder = `Array numeros, [1,2,3...] (parâmetro ${i + 1})`;
                        }

                        else if (input.pattern === "[s*[0-9]+(s*,s*[0-9]+)*s*]") {
                            input.placeholder = `Arrray de inteiros,[1,2,3...], (parâmetro ${i + 1})`;
                        }
                        else if(input.pattern === "\[\s*([0-9]+|\"[^\"]*\")(\s*,\s*([0-9]+|\"[^\"]*\"))*\s*\]"){
                            input.placeholder = `Array generico, [1,2,3...] (parâmetro ${i + 1})`;
                        }
                    } else {
                        input.placeholder = `Parâmetro ${i + 1}`;
                    }
                    input.required = true; // Torna o campo obrigatório
                    form.appendChild(input);
                }
            }



            const submit = document.createElement('input');
            submit.type = "button";
            submit.value = "Executar";
            form.appendChild(submit);
            submit.addEventListener('click', () => submitForm(funcao.nome, form));
        }

        return data;
    } catch (error) {
        console.error('Erro ao acessar rota raiz:', error);
        document.getElementById('resultado').textContent = 'Erro: ' + error.message;
    }
}

async function submitForm(nome, form) {

    try {
        // FormData para pegar todos os campos automaticamente
        const formData = new FormData(document.getElementById(form.id));

        // Converter FormData para objeto JavaScript
        const dados = {};
        formData.forEach((value, key) => {
            dados[key] = value;
        });

        // Fazer POST
        const response = await fetch(`http://localhost:3000/javascript/${nome}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dados)
        });

        const resultado = await response.json();
        const div = document.createElement('div');
        div.textContent = JSON.stringify(resultado.resultado);
        //
        form.appendChild(div);
        console.log(resultado);
        return resultado;

    } catch (error) {
        console.error('Erro ao enviar dados:', error);
        document.getElementById('resultado').textContent = 'Erro: ' + error.message;
    }
};

// Chamar a função quando a página carregar
document.addEventListener("DOMContentLoaded", () => {
    fetchJava();
    fetchJavascript();
});