class DisciplinaServico {
    constructor() {
        this.repositorio = new DisciplinaRepositorio();
    }

    inserir(codigo, nome) {
        const disciplina = new Disciplina(codigo, nome);
        const disc = localStorage.setItem("disciplina", document.querySelector("#nomeDis").value);
        if (this.repositorio.buscarPorCodigo(codigo) === undefined) {
            return this.repositorio.inserir(disciplina);
        }
        // disciplina já existente
        return undefined;
    }

    remover(codigo) {
        this.repositorio.remover(codigo);
    }

    listar() {
        return this.repositorio.listar();
    }

    buscarPorNome(nome) {
        return this.repositorio.buscarPorNome(nome);
    }

    buscarPorCodigo(codigo) {
        return this.repositorio.buscarPorCodigo(codigo);
    }

    inserirAlunoNaDisciplina(codigo, aluno) {
        const disciplina = this.repositorio.buscarPorCodigo(codigo);
        if (disciplina !== undefined) {
            this.repositorio.inserirAlunoNaDisciplina(disciplina, aluno);
        }
    }

    removerAlunoDaDisciplina(codigo, aluno) {
        const disciplina = this.repositorio.buscarPorCodigo(codigo);
        if (disciplina !== undefined) {
            this.repositorio.removerAlunoDaDisciplina(disciplina, aluno);
        }
    }
   
    
}
