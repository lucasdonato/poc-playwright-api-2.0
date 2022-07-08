import faker from 'faker-br'

export const produto = {
    ativo: true,
    descricao: faker.commerce.productName(),
    valor_venda_varejo: 159.9
}