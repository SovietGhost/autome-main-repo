import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

setInterval(async () => {
  const updateResult = await prisma.auction.updateMany({
    where: {
      end_date: {
        lte: new Date(),
      },
      enabled: true,
    },
    data: {
      enabled: false,
    },
  });

  console.log(updateResult.count);
}, 6000);
