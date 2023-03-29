class DisciplinaControlador {
    constructor() {
        this.disciplinaServico = new DisciplinaServico();
    }

    inserir() {
        const codigoDis = Number(document.querySelector("#codigoDis").value);
        const nomeDis = document.querySelector("#nomeDis").value;
        const disciplina = this.disciplinaServico.inserir(codigoDis, nomeDis);
        console.log(disciplina);
        if (disciplina) {
            this.mostrarDisciplinaNoHTML(codigoDis, nomeDis);
            alert('Disciplina inserida com sucesso!');
        } else {
            alert('Disciplina já existente, insira uma nova.');
        }
    }

    mostrarDisciplinaNoHTML(nome, codigo) {
        const elementoP = document.createElement("p");
        elementoP.textContent = `${codigo} - ${nome}`;

        const elementoBotaoApagar = document.createElement("button");
        elementoBotaoApagar.textContent = "X";

        elementoBotaoApagar.addEventListener('click', (event) => {
                this.removerDisciplinaDaLista(codigo);
                event.target.parentElement.remove();
            }
        );
        elementoP.appendChild(elementoBotaoApagar);
        document.querySelector('#disciplina').appendChild(elementoP);
    }

    removerDisciplinaDaLista(codigo) {
        this.disciplinaServico.remover(codigo);
    }

    inserirAlunoNaDisciplina() {
        const codigoDis = Number(document.querySelector("#codigoExistente").value);
        const nomeAluno = document.querySelector("#nomeExistente").value;
        const disciplina = this.disciplinaServico.buscarPorCodigo(codigoDis);
        if (disciplina) {
            const aluno = new Aluno(nomeAluno);
            this.disciplinaServico.inserirAlunoNaDisciplina(codigoDis, aluno, nomeDis);
            this.mostrarAlunoDisciplinaNoHTML(codigoDis, nomeAluno, nomeDis);
            alert('Aluno adicionado à disciplina!');
        } else {
            alert('Disciplina não existente, tente outra vez!');
        }
    }

    removerAlunoDaDisciplina(codigo, nome) {
        const disciplina = this.disciplinaServico.buscarPorCodigo(codigo);
        const aluno = new Aluno(nome);
        this.disciplinaServico.removerAlunoDaDisciplina(disciplina, aluno);
    }

    mostrarAlunoDisciplinaNoHTML(codigo, nome, nomeDis) {
        const elementoP = document.createElement("p");
        const disciplina_name = localStorage.getItem("disciplina");
        elementoP.textContent = `${codigo} - ${nome} - ${disciplina_name}`;

        const elementoBotaoApagar = document.createElement("button");
        elementoBotaoApagar.textContent = "X";

        elementoBotaoApagar.addEventListener('click', (event) => {
                this.removerAlunoDaDisciplina(event.target.parentElement.getAttribute("data-codigo"), nome);
                event.target.parentElement.remove();
            }
        );
        elementoP.appendChild(elementoBotaoApagar);
        elementoP.setAttribute("data-codigo", codigo);
        document.querySelector('#AlunoDisciplina').appendChild(elementoP);
    }
       

}
