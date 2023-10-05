import { NextResponse } from "next/server";
import { getSession } from 'next-auth/react';
import prisma from "../../utils/prisma";




export async function GET() {
  
  const allUsers = await prisma.repairDevice.findMany()

  return allUsers.join()
  }
  

GET()
.then(async () => {
  await prisma.$disconnect()
})
.catch(async (e) => {
  console.error(e)
  await prisma.$disconnect()
  process.exit(1)
})
