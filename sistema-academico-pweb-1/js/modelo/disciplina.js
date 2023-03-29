class Disciplina {
    constructor(codigo, nome) {
      this.codigo = codigo;
      this.nome = nome;
      this.alunos = [];
    }
  
    get codigo() {
      return this._codigo;
    }
  
    set codigo(novoCodigo) {
      this._codigo = novoCodigo;
    }
  
    get nome() {
      return this._nome;
    }
  
    set nome(novoNome) {
      this._nome = novoNome;
    }
  
    get alunos() {
      return this._alunos;
    }
  
    set alunos(novosAlunos) {
      this._alunos = novosAlunos;
    }
  

  }
