-- CreateEnum
CREATE TYPE "public"."UserRole" AS ENUM ('CLIENT', 'ADMIN', 'PROVIDER');

-- CreateTable
CREATE TABLE "public"."users" (
    "user_id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "email" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "phone" VARCHAR(20),
    "role" "public"."UserRole" NOT NULL DEFAULT 'CLIENT',
    "city" VARCHAR(100),
    "state" VARCHAR(100),
    "hashed_refresh_token" VARCHAR(255),
    "bio" TEXT,
    "profile_pic_url" VARCHAR(255),
    "is_verified" BOOLEAN DEFAULT false,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "username" VARCHAR(255) NOT NULL,
    "id_type" VARCHAR(50),
    "id_number" VARCHAR(50),
    "address" TEXT,
    "zip_code" VARCHAR(20),
    "totp_secret" VARCHAR(255),
    "is_2fa_enabled" BOOLEAN DEFAULT false,
    "is_active" BOOLEAN DEFAULT true,

    CONSTRAINT "users_pkey" PRIMARY KEY ("user_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "public"."users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "public"."users"("username");
