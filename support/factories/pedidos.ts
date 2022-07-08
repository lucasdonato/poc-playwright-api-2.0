import faker from 'faker-br'

export const pedido = {
    numero: faker.random.number({ min: 1000000, max: 999999 }),
    status: "A",
    vendedor: 1,
    cliente: null,
    itens: [
        {
            item: 1,
            produto_servico: null,
            qtd: 5,
            valor_unitario: 100,
            valor_desconto: 19,
            detalhes: "detalhes produto 1"
        },
    ]
}