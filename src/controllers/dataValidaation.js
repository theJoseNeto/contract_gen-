class DataValidation {

    constructor(data) {
        this.errors = [];
        this.data = data
    }

    name = () => {
        const { name } = this.data;
        if (name.length < 3 || !name) this.errors.push("NOME INVÁLIDO");
        return;
    }
    cnpj = () => {
        const { cnpj } = this.data;
        const cnpjClean = cnpj.replace(/[^\d]/g, '');
        const allRight = cnpj.length > 0 && cnpjClean.length === 14;
        if (!allRight) this.errors.push("CNPJ INVÁLIDO");
        return;
    }

    cpf = () => {
        function validarCPF() {
            const { cpf } = this.data
            cpf = cpf.replace(/[^\d]/g, '');

            const allRight = cpf.length === 11 && !(/^(\d)\1{10}$/.test(cpf));

            if (allRight) {

                let soma = 0;
                for (let i = 0; i < 9; i++) {
                    soma += parseInt(cpf.charAt(i)) * (10 - i);
                }
                let resto = 11 - (soma % 11);
                let digitoVerificador1 = resto === 10 || resto === 11 ? 0 : resto;

                if (digitoVerificador1 !== parseInt(cpf.charAt(9))) this.errors.push("CPF INVÁLIDO");

                soma = 0;
                for (let i = 0; i < 10; i++) { soma += parseInt(cpf.charAt(i)) * (11 - i); }
                resto = 11 - (soma % 11);

                let digitoVerificador2 = resto === 10 || resto === 11 ? 0 : resto;

                if (digitoVerificador2 !== parseInt(cpf.charAt(10))) this.errors.push("CPF INVÁLIDO")

                return;
            }
        }
    } 


    




}