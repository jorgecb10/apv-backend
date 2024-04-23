import express from "express";
import { 
    perfil, 
    registrar, 
    confirmar,
    autenticar,
    olvidePassword,
    comprobarToken,
    nuevoPassword,
    actualizarPerfil,
    actualizarPassword
} from '../controllers/veterinarioController.js'
const router = express.Router();
import chechAuth from "../middleware/authMiddleware.js";

//area publica
router.post("/", registrar)
router.get('/confirmar/:token', confirmar)
router.post('/login', autenticar)
router.post('/olvide-password', olvidePassword)
router.route("/olvide-password/:token").get(comprobarToken).post(nuevoPassword);

//area privada
router.get('/perfil', chechAuth, perfil)
router.put('/perfil/:id', chechAuth, actualizarPerfil)
router.put('/actualizar-password', chechAuth, actualizarPassword)

export default router; 