import { Router } from "express";
import { testAutentication, sqliteConnection } from "../core/database/connection";
import { produtoRouter } from "./produtos.routes";

const router = Router();

sqliteConnection.sync().then(() => console.log('banco pronto'))

router.get("/", async (req, res) => {
    const connection = await testAutentication();
    return res.json({
        //message: "server API up",
        sqlConnection: connection,
        //serverInfo
    });
});

router.use('/produto', produtoRouter)

export { router }