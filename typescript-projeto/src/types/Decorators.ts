export function ValidaDebito(target: any, propertyKey: string, descriptior: PropertyDescriptor){
    const originMethod = descriptior.value;

    descriptior.value = function(valorDoDebito: number){
        if(valorDoDebito <= 0){
            throw new Error("o valor a ser debitado precisa ser maior que 0")
        }

        if(valorDoDebito > this.slado){
            throw new Error("o valor é insuficiente para realizar a operação")
        }

        return originMethod.apply(this, [valorDoDebito]);
    }

    return descriptior;
}

export function ValidaDeposito(target: any, propertyKey: string, descriptior: PropertyDescriptor){
    const originMethod = descriptior.value;
    
    descriptior.value = function(valorDoDeposito: number){
        if (this.valor <= 0) {
            throw new Error("O valor a ser depositado deve ser maior que zero!");
        }
    }
}