class DisciplinaRepositorio {
    constructor() {
        this._disciplinas = [];
    }

    inserir(disciplina) {
        this._disciplinas.push(disciplina);
        return disciplina;
    }

    remover(codigo) {
        const indxRemocao = this._disciplinas.indexOf(disciplina => disciplina.codigo === codigo);
        this._disciplinas.splice(indxRemocao, 1);
    }

    listar() {
        return this._disciplinas;
    }

    buscarPorNome(nome) {
        return this._disciplinas.filter(disciplina => disciplina.nome === nome);
    }

    buscarPorCodigo(codigo) {
        return this._disciplinas.find(disciplina => disciplina.codigo === codigo);
    }

    inserirAlunoNaDisciplina(disciplina, aluno) {
            const alunos = disciplina.alunos;
            console.log(alunos);
            alunos.push(aluno);
            disciplina.alunos = alunos;
        
    }
    
    removerAlunoDaDisciplina(nome) {
        const index = this.alunos.indexOf(aluno => aluno.nome === nome);
        this.alunos.splice(index, 1);
        
      }

}
