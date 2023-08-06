import express from "express";
import {createProvider, getProvides, searchProvider} from "../controller/provider.controller.js";
import {body} from "express-validator";


const router = express.Router()


router.post("/setprovider", [
    body("name", "el nombre es requerido ")
        .isEmpty()
        .trim(),
    body("address", "la direccion es requerida")
        .isEmpty()
        .trim(),
    body("telephone", "el telefono es requerido")
        .isEmpty()
        .trim(),
    body("price", "el precio es requerido")
        .isEmpty()
        .trim(),
    body("weight", "peso aproximado")
        .isEmpty()
        .trim(),
    body("isCansel", "el estado es requerido")
        .toBoolean(),
    body("photo", "la foto es requerida")
        .isEmpty()
        .trim()

], createProvider)
router.get("/getprovides", getProvides)

router.get("/searchprovider/:name", searchProvider)


export default router