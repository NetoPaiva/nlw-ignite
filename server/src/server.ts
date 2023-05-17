import fastify from 'fastify'
import { PrismaClient } from '@prisma/client'

const nome: string = 'Neto'
const exclamacao: string = '!'
console.log('Olá,', nome + exclamacao)

const app = fastify()
const prisma = new PrismaClient()

app.get('/hello', () => {
  return 'Hello, World!'
})

app.get('/users', async () => {
  const users = await prisma.user.findMany()
  return users
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('servidor rodando na porta 3333')
    console.log('http://localhost:3333')
  })
