-- CreateEnum
CREATE TYPE "Genero" AS ENUM ('ACAO', 'COMEDIA', 'DRAMA', 'TERROR', 'FICCAO_CIENTIFICA', 'ANIMACAO', 'DOCUMENTARIO', 'ROMANCE');

-- CreateTable
CREATE TABLE "Cinema" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,

    CONSTRAINT "Cinema_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sala" (
    "id" SERIAL NOT NULL,
    "numero" INTEGER NOT NULL,
    "capacidade" INTEGER NOT NULL,
    "poltronas" INTEGER[],
    "cinemaId" INTEGER NOT NULL,

    CONSTRAINT "Sala_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Filme" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "sinopse" TEXT NOT NULL,
    "classificacao" TEXT NOT NULL,
    "duracao" INTEGER NOT NULL,
    "elenco" TEXT NOT NULL,
    "genero" "Genero" NOT NULL,
    "dataIniciaExibicao" TIMESTAMP(3) NOT NULL,
    "dataFinalExibicao" TIMESTAMP(3) NOT NULL,
    "cinemaId" INTEGER NOT NULL,

    CONSTRAINT "Filme_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sessao" (
    "id" SERIAL NOT NULL,
    "horacrioExibicao" TIMESTAMP(3) NOT NULL,
    "filmeId" INTEGER NOT NULL,
    "salaId" INTEGER NOT NULL,
    "cinemaId" INTEGER NOT NULL,

    CONSTRAINT "Sessao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ingresso" (
    "id" SERIAL NOT NULL,
    "valorInteira" DOUBLE PRECISION NOT NULL,
    "valorMeia" DOUBLE PRECISION NOT NULL,
    "sessaoId" INTEGER NOT NULL,

    CONSTRAINT "Ingresso_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pedido" (
    "id" SERIAL NOT NULL,
    "qtInteira" INTEGER NOT NULL,
    "qtMeia" INTEGER NOT NULL,
    "valorTotal" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Pedido_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LancheCombo" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "valorUnitario" DOUBLE PRECISION NOT NULL,
    "qtUnidade" INTEGER NOT NULL,
    "subtotal" DOUBLE PRECISION NOT NULL,
    "pedidoId" INTEGER NOT NULL,

    CONSTRAINT "LancheCombo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_IngressoToPedido" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_IngressoToPedido_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_IngressoToPedido_B_index" ON "_IngressoToPedido"("B");

-- AddForeignKey
ALTER TABLE "Sala" ADD CONSTRAINT "Sala_cinemaId_fkey" FOREIGN KEY ("cinemaId") REFERENCES "Cinema"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Filme" ADD CONSTRAINT "Filme_cinemaId_fkey" FOREIGN KEY ("cinemaId") REFERENCES "Cinema"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sessao" ADD CONSTRAINT "Sessao_filmeId_fkey" FOREIGN KEY ("filmeId") REFERENCES "Filme"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sessao" ADD CONSTRAINT "Sessao_salaId_fkey" FOREIGN KEY ("salaId") REFERENCES "Sala"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sessao" ADD CONSTRAINT "Sessao_cinemaId_fkey" FOREIGN KEY ("cinemaId") REFERENCES "Cinema"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ingresso" ADD CONSTRAINT "Ingresso_sessaoId_fkey" FOREIGN KEY ("sessaoId") REFERENCES "Sessao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LancheCombo" ADD CONSTRAINT "LancheCombo_pedidoId_fkey" FOREIGN KEY ("pedidoId") REFERENCES "Pedido"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_IngressoToPedido" ADD CONSTRAINT "_IngressoToPedido_A_fkey" FOREIGN KEY ("A") REFERENCES "Ingresso"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_IngressoToPedido" ADD CONSTRAINT "_IngressoToPedido_B_fkey" FOREIGN KEY ("B") REFERENCES "Pedido"("id") ON DELETE CASCADE ON UPDATE CASCADE;
