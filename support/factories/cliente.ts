import faker from 'faker-br'

export const cliente1 = {
    tipo: "F",
    cpf: faker.br.cpf({ format: true }),
    razao_social: `${faker.name.firstName()} ${faker.name.lastName()}`
}

export const cliente2 = {
    tipo: "F",
    cpf: faker.br.cpf({ format: true }),
    razao_social: `${faker.name.firstName()} ${faker.name.lastName()}`
}

export const cliente3 = {
    tipo: "F",
    cpf: faker.br.cpf({ format: true }),
    razao_social: `${faker.name.firstName()} ${faker.name.lastName()}`
}

export const cliente4 = {
    tipo: "F",
    cpf: faker.br.cpf({ format: true }),
    razao_social: `${faker.name.firstName()} ${faker.name.lastName()}`
}