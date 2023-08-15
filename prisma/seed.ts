import { hash } from 'bcryptjs'
import { prisma } from '../app/lib/prisma'

// async function main() {
//     const admin = await prisma.user.upsert({
//         where: { email: 'admin@admin.com' },
//         update: {},
//         create: {
//             email: 'admin@admin.com',
//             password: 'password',
//         }
//     })
// }

// main()
//     .then(async () => {
//         await prisma.$disconnect()
//     })
//     .catch(async (e) => {
//         console.error(e)
//         await prisma.$disconnect()
//         process.exit(1)
//     })