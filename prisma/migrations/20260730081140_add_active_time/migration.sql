-- CreateTable
CREATE TABLE "UserActiveTime" (
    "id" TEXT NOT NULL,
    "activeTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,

    CONSTRAINT "UserActiveTime_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "UserActiveTime" ADD CONSTRAINT "UserActiveTime_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
