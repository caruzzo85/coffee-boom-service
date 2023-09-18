
import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../utils/prisma";



export function GET(req: NextRequest) {

  const url = req.nextUrl.toJSON()

  const parts = url.split("/");
  const brand = parts[parts.length - 1].toLowerCase();

  console.log(brand)

  const result = prisma.repairDevice.findFirst()

  console.log(result)

  return result


}