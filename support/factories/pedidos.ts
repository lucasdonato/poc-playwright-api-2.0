import faker from 'faker-br'

export const pedido = {
    numero: faker.random.number(),
    status: "A",
    data_entrega: "2030-01-01",
    hora_entrega: "00:00:00",
    vendedor: 1,
    departamento: 1,
    cliente: null,
    valor_troco: 1.99,
    numero_fatura: "555555",
    itens: [
        {
            item: 1,
            produto_servico: null,
            qtd: 5,
            valor_unitario: 100,
            valor_desconto: 19,
            detalhes: "detalhes produto 1"
        },
    ],
    faturas: [
        {
            forma_pagamento: 1,
            parcelas: [
                {
                    documento: "123",
                    valor_parcela: 50,
                    data_vencimento: "2030-10-10"
                }
            ]
        }
    ],
    valor_frete: 10,
    valor_desconto: 2,
    valor_acrescimo: 3.50,
    observacoes: "Obs pedido cadastrado pela API"
}