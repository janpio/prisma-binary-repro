const { PrismaClient, Prisma } = require('@prisma/client')

const client = new PrismaClient()

exports.handler = async function (event, context, callback) {

  // list all files in node_modules/.prisma/client
  const fs = require('fs')
  const path = require('path')
  const files = fs.readdirSync(path.join(process.env.LAMBDA_TASK_ROOT, 'src', 'node_modules', '.prisma', 'client'))

  return {
    statusCode: 200,
    body: JSON.stringify({
      version: Prisma.prismaVersion.client,
      files,
    }),
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  }
}
