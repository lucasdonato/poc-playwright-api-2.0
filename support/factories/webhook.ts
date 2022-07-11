import faker from 'faker-br'

export const webhook = {
    nome_integracao: `Webhook ${faker.random.word()}`,
    url: "https://app.tagplus.com.br/test_gat/usuario/integracoes/callback/6666",
    hub_secret: faker.random.number(),
    eventos: [
        "produto_criado",
        "produto_alterado",
        "venda_simples_criada",
        "fornecedor_criado",
        "fornecedor_alterado",
        "fornecedor_apagado",
        "transportadora_criada",
        "transportadora_alterada",
        "transportadora_apagada",
        "venda_simples_alterada"
    ]
}